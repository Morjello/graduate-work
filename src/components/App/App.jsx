import './App.sass';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { Route, Routes, useLocation } from 'react-router-dom';
import AllResults from '../AllResults/AllResults';
import Main from '../Main/Main';
import { useState } from 'react';
import Background from '../DivisionForm/Background/Background';
import Airing from '../Airing/Airing';
import Calculations from '../Сalculations/Сalculations';

function App() {
  const location = useLocation();
  const [bvrData, setBvrData] = useState({
    kishResultForLength: '',
    kki: '',
    kzsh: '',
    depthOfSpursRes: '',
    specificVVRes: '',
    teorSpendVVOnExplore: '',
    quantityOfSpursRes: '',
    allSpurs: { vrub: '', okont: '', kontur: '' },
    weigthOfallSpurs: {
      vrubWeigth: '',
      okontWeigth: '',
      konturWeigth: '',
    },
    lengthOfAllSpurs: {
      vrub: '',
      okont: '',
      kontur: '',
    },
    lengthOfSpur: '',
    koeffOfZarForRes: '',
    factSpendVVForRes: '',
    averageDepthOfSpursForRes: '',
    ouputOfOreForRes: '',
  }); // стейты бвр
  const [airirngData, setAiringData] = useState({
    airOfGasForRes: '',
    leakOfAirForRes: '',
    airForPeopleForRes: '',
    airingOfMinSpeedForRes: '',
    powerOfFanForRes: '',
    depressionOfFlexiblePumpForRes: '',
    depressionOfHardPumpForRes: '',
  }); // стейты проветривания

  const navigationsOfBVRPaths =
    location.pathname === '/calc-of-bvr' ||
    location.pathname === '/calc-of-bvr/kish' ||
    location.pathname === '/calc-of-bvr/kki' ||
    location.pathname === '/calc-of-bvr/kzsh' ||
    location.pathname === '/calc-of-bvr/average-depth-of-spurs' ||
    location.pathname === '/calc-of-bvr/specific-vv' ||
    location.pathname === '/calc-of-bvr/spend-vv' ||
    location.pathname === '/calc-of-bvr/quantity-of-spurs' ||
    location.pathname === '/calc-of-bvr/vv-in-spurs' ||
    location.pathname === '/calc-of-bvr/length-of-zaryad' ||
    location.pathname === '/calc-of-bvr/length-of-spurs' ||
    location.pathname === '/calc-of-bvr/koeff-of-zaryajaniya' ||
    location.pathname === '/calc-of-bvr/fact-spend-vv';

  // const navigationPathsOfAiring =
  //   location.pathname === '/calc-of-airing' ||
  //   location.pathname === '/calc-of-airing/leak-of-air' ||
  //   location.pathname === '/calc-of-airing/air-for-people' ||
  //   location.pathname === '/calc-of-airing/air-of-gas-after-explosion' ||
  //   location.pathname === '/calc-of-airing/air-of-min-speed' ||
  //   location.pathname === '/calc-of-airing/power-of-fan' ||
  //   location.pathname === '/calc-of-airing/depression-of-flexible-pump' ||
  //   location.pathname === '/calc-of-airing/depression-of-hard-pump';

  return (
    <>
      <Header />
      <div className="content">
        {navigationsOfBVRPaths && <Navigation />}
        {/* {navigationPathsOfAiring && <NavigationOfAiring />} */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/calc-of-bvr" element={<Background />} />
          <Route path="/calc-of-airing" element={<Background />} />
          <Route
            path="/calc-of-bvr/*" // бвр
            element={<Calculations setBvrData={setBvrData} />}
          />
          <Route
            path="/calc-of-airing/*" // проветривание
            element={<Airing setAiringData={setAiringData} />}
          />
          <Route
            path="/all-calculations" // Результаты расчетов
            element={<AllResults bvrData={bvrData} airirngData={airirngData} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
