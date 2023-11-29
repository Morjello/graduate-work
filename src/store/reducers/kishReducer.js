import { CALC_KISH } from '../actions/actions';

const kish = {
  count: 0,
  length: '',
  depth: '',
};
const kishReduser = (state = kish, action) => {
  switch (action.type) {
    case CALC_KISH:
      return {
        ...state,
        count: action.payload.count,
        length: action.payload.length,
        depth: action.payload.depth,
      };
    default:
      return state;
  }
};

export default kishReduser;
