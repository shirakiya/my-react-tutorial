import React from 'react';
import Comment from './comment';


const CommentList = React.createClass({
  render: function() {
    const commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});


module.exports = CommentList;
