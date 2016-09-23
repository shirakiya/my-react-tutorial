import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import CommentList from './commentList';
import CommentForm from './commentForm';


class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  loadCommentsFromServer() {
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
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer(), this.props.pollInterval);
  }

  handleCommentSubmit(comment) {
    comment.id = Date.now();
    const comments = this.state.data;
    const newComments = comments.concat([comment]);
    this.setState({ data: newComments });

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
      }.bind(this),
    });
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
      </div>
    );
  }
}

CommentBox.propTypes = {
  url: PropTypes.string.isRequired,
  pollInterval: PropTypes.number.isRequired,
};

export default CommentBox;
