import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_LOGIN_STATUS,
  REGISTRATION_ATTEMPT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOAD_LOGGED_USER,
  DELETE_USER_PROFILE_SUCCESS
} from '../constants/index';

const initialState = {
  status: '',
  errorText: '',
  isLogged: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, status: 'PENDING' };
    case LOGIN_SUCCESS:
      return {
        ...state,
        status: 'DONE',
        isLogged: action.user
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        status:'FAIL',
        isLogged: null,
        errorText: action.errorText
      };
    case CLEAR_LOGIN_STATUS:
      return { ...state, status: '', errorText: '' };
    case REGISTRATION_ATTEMPT:
      return { ...state, status: 'PENDING' };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLogged: action.user,
        status: 'DONE'
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        status: 'FAIL',
        errorText: action.errorText
      };
    case LOGOUT_PENDING:
      return { ...state, status: 'PENDING' };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        status: '',
        isLogged: null
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        status:'FAIL',
        errorText: action.errorText
      };
    case LOAD_LOGGED_USER:
      return { ...state, status: 'PENDING' };
    case DELETE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLogged: null
      };
    default:
      return state;
  }
};

export default reducer;
