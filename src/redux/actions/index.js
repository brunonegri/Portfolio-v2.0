const SET_LANGUAGE = 'SET_LANGUAGE'

const setLang = (value) => ({
    type: SET_LANGUAGE,
    payload: value,
  });

export {setLang , SET_LANGUAGE}