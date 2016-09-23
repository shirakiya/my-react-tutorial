import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import CommentList from './commentList';
import CommentForm from './commentForm';


class CommentBox extends Component {
  componentDidMount() {
    const { url, pollInterval, actions } = this.props;
    actions.loadComments(url);
    setInterval(actions.loadComments(url), pollInterval);
  }

  handleCommentSubmit(comment) {
    const { url, actions } = this.props;
    actions.postComment(url, comment);
  }

  render() {
    const { data, form, actions } = this.props;
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={data} />
        <CommentForm
          onCommentSubmit={this.handleCommentSubmit.bind(this)}
          author={form.author}
          inputAuthor={actions.inputAuthor}
          text={form.text}
          inputText={actions.inputText}
        />
      </div>
    );
  }
}

CommentBox.propTypes = {
  data: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  pollInterval: PropTypes.number.isRequired,
  form: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  actions: PropTypes.shape({
    loadComments: PropTypes.func.isRequired,
    postComment: PropTypes.func.isRequired,
    inputAuthor: PropTypes.func.isRequired,
    inputText: PropTypes.func.isRequired,
  }),
};

export default CommentBox;
