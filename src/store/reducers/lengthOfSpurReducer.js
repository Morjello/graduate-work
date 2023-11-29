import { CALC_LENGTH_OF_SPURS } from '../actions/actions';

const lengthOfSpur = {
  count: 0,
  speed: '',
  tc: '',
  B: '',
  m: '',
  Nz: '',
};

const lengthOfSpurReducer = (state = lengthOfSpur, action) => {
  switch (action.type) {
    case CALC_LENGTH_OF_SPURS:
      return {
        ...state,
        count: action.payload.count,
        speed: action.payload.speed,
        tc: action.payload.tc,
        B: action.payload.B,
        m: action.payload.m,
        Nz: action.payload.Nz,
      };
    default:
      return state;
  }
};

export default lengthOfSpurReducer;
