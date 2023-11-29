import { CALC_KKI } from '../actions/actions';

const kki = {
  count: 0,
  Spr: '',
  Svch: '',
};
const kkiReduser = (state = kki, action) => {
  switch (action.type) {
    case CALC_KKI:
      return {
        ...state,
        count: action.payload.count,
        Spr: action.payload.Spr,
        Svch: action.payload.Svch,
      };
    default:
      return state;
  }
};

export default kkiReduser;
