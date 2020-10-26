export const SET_USERS = 'SET_USERS';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_TASKERS = 'SET_TASKERS';
export const SET_DAY = 'SET_DAY';
export const SET_RANGE = 'SET_RANGE';

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };

    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
        loading: false,
      };

    case SET_TASKERS:
      return {
        ...state,
        taskers: action.taskers,
        loading: false,
      };

    case SET_DAY:
      return {
        ...state,
        day: action.day,
        loading: false,
      };

    case SET_RANGE:
      return {
        ...state,
        range: action.range,
        loading: false,
      };


    default:
      return state;
  }
};

export default dataReducer;