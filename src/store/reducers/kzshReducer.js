import { CALC_KZSH } from '../actions/actions';

const kzsh = {
  count: 0,
  Spr: '',
  Svch: '',
};
const kzshReduser = (state = kzsh, action) => {
  switch (action.type) {
    case CALC_KZSH:
      return {
        ...state,
        count: action.payload.count,
        Lzar: action.payload.Lzar,
        Lshp: action.payload.Lshp,
      };
    default:
      return state;
  }
};

export default kzshReduser;
