
import produce from 'immer';
import { Types as UsersTypes } from './actions';

export const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function users(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case UsersTypes.GET_REQUEST: {
        draft.loading = true;
        break;
      }
      case UsersTypes.GET_SUCCESS: {
        draft.data = action.payload.map(item => ({...item, garcia: "Wellington"}));
        draft.loading = false;
        break;
      }
      case UsersTypes.GET_FAILURE: {
        draft.loading = false;
        draft.data = [];
        break;
      }

      default:
    }
  });
}