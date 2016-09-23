import React from 'react';
import $ from 'jquery';
import CommentList from './commentList';
import CommentForm from './commentForm';


const CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  getInitialState: function() {
    return {
      data: [],
    };
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  handleCommentSubmit: function(comment) {
    const comments = this.state.data;
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState({data: newComments});

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: comments});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});


module.exports = CommentBox;
