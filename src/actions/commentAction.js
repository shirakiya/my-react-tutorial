import $ from 'jquery';
import * as Constants from '../constants';


export function loadComments(url) {
  return (dispatch) => {
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      cache: false,
      success: (data) => {
        dispatch({
          type: Constants.GET_COMMENT,
          data: data,
        })
      },
      error: (xhr, status, err) => {
        console.error(url, status, err.toString());
      },
    });
  };
}

export function postComment(url, comment) {
  return (dispatch) => {
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (data) => {
        dispatch({
          type: Constants.POST_COMMENT,
          data: data,
        })
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      },
    });
  };
}

export function inputAuthor(value) {
  return {
    type: Constants.INPUT_AUTHOR,
    author: value,
  };
}

export function inputText(value) {
  return {
    type: Constants.INPUT_TEXT,
    text: value,
  };
}
