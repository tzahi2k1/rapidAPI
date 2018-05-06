import { homeConstants } from '../constants';

export function homeReducer(state = {}, action) {
  switch (action.type) {
    case homeConstants.DRAG_END:
        let positions = {
            top: action.top,
            left: action.left
        };
      return {
          positions: positions
      };
    default:
      return state
  }
}