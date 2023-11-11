import './App.sass';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { Route, Routes, useLocation } from 'react-router-dom';
import AllResults from '../AllResults/AllResults';
import Main from '../Main/Main';
import Ventilyaciya from '../Ventilyaciya/Ventilyaciya';
import { useState } from 'react';
import Kish from '../Сalculations/Kish/Kish';
import Kki from '../Сalculations/Kki/Kki';
import Kzsh from '../Сalculations/Kzsh/Kzsh';
import DepthOfSpurs from '../Сalculations/DepthOfSpurs/DepthOfSpurs';
import SpecificVV from '../Сalculations/SpecificVV/SpecificVV';
import TeorSpendVV from '../Сalculations/TeorSpendVV/TeorSpendVV';
import QuantityOfSpurs from '../Сalculations/QuantityOfSpurs/QuantityOfSpurs';
import VVinSpurs from '../Сalculations/VVinSpurs/VVinSpurs';
import LengthOfZaryad from '../Сalculations/LengthOfZaryad/LengthOfZaryad';
import LengthOfSpurs from '../Сalculations/LengthOfSpurs/LengthOfSpurs';
import KoeffOfZaryajaniya from '../Сalculations/KoeffOfZaryajaniya/KoeffOfZaryajaniya';
import FactSpendVV from '../Сalculations/FactSpendVV/FactSpendVV';

function App() {
  const location = useLocation();

  const [zaryadInSpurs, setZaryadInSpurs] = useState({});
  const [kishResultForLength, setKishResultForLength] = useState('');
  const [lengthOfSpur, setLengthOfSpur] = useState('');
  const [lengthOfZar, setLengthOfZar] = useState('');

  console.log(lengthOfZar, lengthOfSpur);

  const navigationsPaths = // маршруты для отображения подвала
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
    location.pathname === '/calc-of-bvr/length-of-spurs' ||
    location.pathname === '/calc-of-bvr/koeff-of-zaryajaniya' ||
    location.pathname === '/calc-of-bvr/fact-spend-vv';

  return (
    <>
      <Header />
      {navigationsPaths && <Navigation />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/calc-of-bvr/kish"
          element={<Kish setKishResultForLength={setKishResultForLength} />}
        />
        <Route path="/calc-of-bvr/kki" element={<Kki />} />
        <Route path="/calc-of-bvr/kzsh" element={<Kzsh />} />
        <Route path="/calc-of-bvr/depth-of-spurs" element={<DepthOfSpurs />} />
        <Route path="/calc-of-bvr/specific-vv" element={<SpecificVV />} />
        <Route path="/calc-of-bvr/spend-vv" element={<TeorSpendVV />} />
        <Route
          path="/calc-of-bvr/quantity-of-spurs"
          element={<QuantityOfSpurs />}
        />
        <Route
          path="/calc-of-bvr/vv-in-spurs"
          element={<VVinSpurs setZaryadInSpurs={setZaryadInSpurs} />}
        />
        <Route
          path="/calc-of-bvr/length-of-zaryad"
          element={
            <LengthOfZaryad
              zaryadInSpurs={zaryadInSpurs}
              setLengthOfZar={setLengthOfZar}
            />
          }
        />
        <Route
          path="/calc-of-bvr/length-of-spurs"
          element={
            <LengthOfSpurs
              kishResultForLength={kishResultForLength}
              setLengthOfSpur={setLengthOfSpur}
            />
          }
        />
        <Route
          path="/calc-of-bvr/koeff-of-zaryajaniya"
          element={
            <KoeffOfZaryajaniya
              lengthOfSpur={lengthOfSpur}
              lengthOfZar={lengthOfZar}
            />
          }
        />
        <Route path="/calc-of-bvr/fact-spend-vv" element={<FactSpendVV />} />
        <Route path="/calc-of-ventilyaciya" element={<Ventilyaciya />} />
        <Route path="/all-calculations" element={<AllResults />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
