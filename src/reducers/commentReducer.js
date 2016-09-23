import * as Constants from '../constants';

const initailState = {
  data: [],
  url: '/api/comments',
  pollInterval: 2000,
  form: {
    author: '',
    text: '',
  },
};

export default function reducer(state = initailState, action) {
  switch(action.type) {
    case Constants.GET_COMMENT:
      return Object.assign({}, state, {
        data: action.data,
      });
    case Constants.POST_COMMENT:
      return Object.assign({}, state, {
        data: action.data,
        form: {
          author: '',
          text: ''
        },
      });
    case Constants.INPUT_AUTHOR:
      return Object.assign({}, state, {
        form: {
          author: action.author,
          text: state.form.text,
        },
      });
    case Constants.INPUT_TEXT:
      return Object.assign({}, state, {
        form: {
          author: state.form.author,
          text: action.text,
        },
      });
    default:
      return state;
  }
}
