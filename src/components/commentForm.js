import React, { Component, PropTypes } from 'react';


class CommentForm extends Component {
  constructor(props) {
    super(props);
  }

  handleAuthorChange(e) {
    const { inputAuthor } = this.props;
    inputAuthor(e.target.value);
  }

  handleTextChange(e) {
    const { inputText } = this.props;
    inputText(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { author, text, onCommentSubmit } = this.props;
    if (!author || !text) {
      return;
    }
    onCommentSubmit({ author: author, text: text });
  }

  render() {
    const { author, text } = this.props;
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)} >
        <fieldset>
          <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={this.handleAuthorChange.bind(this)}
          />
          <input
            type="text"
            placeholder="Say something..."
            value={text}
            onChange={this.handleTextChange.bind(this)}
          />
          <input type="submit" value="Post" />
        </fieldset>
      </form>
    );
  }
}

CommentForm.PropTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  inputAuthor: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  inputText: PropTypes.func.isRequired,
}

export default CommentForm;
