import { useLocation } from 'react-router-dom';

const location = useLocation;

export const navigationsPaths = // маршруты для отображения подвала
  location.pathname === '/calc-of-bvr' ||
  location.pathname === '/calc-of-bvr/kish' ||
  location.pathname === '/calc-of-bvr/kki' ||
  location.pathname === '/calc-of-bvr/kzsh' ||
  location.pathname === '/calc-of-bvr/depth-of-spurs' ||
  location.pathname === '/calc-of-bvr/specific-vv' ||
  location.pathname === '/calc-of-bvr/spend-vv' ||
  location.pathname === '/calc-of-bvr/quantity-of-spurs' ||
  location.pathname === '/calc-of-bvr/vv-in-spurs' ||
  location.pathname === '/calc-of-bvr/length-of-zaryad' ||
  location.pathname === '/calc-of-bvr/length-of-spurs';
