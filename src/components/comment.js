import React, { Component, PropTypes } from 'react';
import Remarkable from 'remarkable';


class Comment extends Component {
  constructor(props) {
    super(props);
  }

  rawMarkup() {
    const md = new Remarkable();
    const rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="comment">
        <h3 className="commentAuthor">
          {this.props.author}
        </h3>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Comment;
