import { SET_LANGUAGE } from '../actions/index';

const initialState = {
  language: 'pt-BR'
};

const lang = (state = initialState, action) => {
  switch (action.type) {
  case SET_LANGUAGE:
    return { ...state,
        language: action.payload
    };
  default:
    return state;
  }
};

export default lang;