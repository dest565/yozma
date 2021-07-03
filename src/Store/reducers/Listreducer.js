export const ADD_ITEMS = 'ADD_ITEMS';
export const SET_STATE = 'SET_STATE';

const initialState = {
  isListReady: false,
  list: []
};

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return {
        ...state,
        isListReady: action.isListReady
      };

      case ADD_ITEMS:
      return {
        ...state,
        list: action.payload
      };

    default:
      return state;
  }
};

export default ListReducer;
