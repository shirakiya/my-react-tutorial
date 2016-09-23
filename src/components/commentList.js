import React, { Component, PropTypes } from 'react';
import Comment from './comment';


class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const commentNodes = this.props.data.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

CommentList.propsTypes = {
  data: PropTypes.array,
};

export default CommentList;
