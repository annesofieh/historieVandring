import {GET_HOUSES, GET_HOUSE } from '../constants';

export default function houses(state = {}, action) {
  switch (action.type) {
    case GET_HOUSES:
      return {
        ...state,
        ...action.houses
      }
      default:
        return {
          ...state
        }
  }
};

/*const reducerHouse = (state = {}, action) => {
  switch (action.type) {
    case GET_HOUSE:
      return {
        ...state,
        ...action
      }
      default:
        return {
          ...state
        }
  }
}*/
