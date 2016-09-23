import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as commentAction from '../actions/commentAction';
import CommentBox from '../components/commentBox';


const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(commentAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
