import React from 'react';
import Remarkable from 'remarkable';


const Comment = React.createClass({
  rawMarkup: function() {
    const md = new Remarkable();
    const rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="comment">
        <h3 className="commentAuthor">
          {this.props.author}
        </h3>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});


module.exports = Comment;
