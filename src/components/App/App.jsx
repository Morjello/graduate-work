import './App.sass';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { Route, Routes, useLocation } from 'react-router-dom';
import AllResults from '../AllResults/AllResults';
import Main from '../Main/Main';
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
import NavigationOfAiring from '../NavigationOfAiring/NavigationOfAiring';
import AirOfGasAfterExplosion from '../Airing/AirOfGasAfterExplosion/AirOfGasAfterExplosion';
import LeakOfAir from '../Airing/LeakOfAir/LeakOfAir';
import AirForPeople from '../Airing/AirForPeople/AirForPeople';
import Background from '../DivisionForm/Background/Background';
import AiringOfMinSpeed from '../Airing/AiringOfMinSpeed/AiringOfMinSpeed';
import PowerOfFan from '../Airing/PowerOfFan/PowerOfFan';
import DepressionOfFlexiblePump from '../Airing/DepressionOfFlexiblePump/DepressionOfFlexiblePump';
import DepressionOfHardPump from '../Airing/DepressionOfHardPump/DepressionOfHardPump';

function App() {
  const location = useLocation();

  // стейты БВР
  const [zaryadInSpurs, setZaryadInSpurs] = useState({});
  const [kishResultForLength, setKishResultForLength] = useState('');
  const [kki, setKki] = useState('');
  const [kzsh, setKzsh] = useState('');
  const [depthOfSpursRes, setdepthOfSpursRes] = useState('');
  const [specificVVRes, setSpecificVVRes] = useState('');
  const [teorSpendVVOnExplore, setTeorSpendVVOnExplore] = useState('');
  const [quantityOfSpursRes, setQuantityOfSpursRes] = useState('');
  const [allSpurs, setAllSpurs] = useState({ vrub: '', okont: '', kontur: '' });
  const [weigthOfallSpurs, setWeigthOfAllSpurs] = useState({
    vrubWeigth: '',
    okontWeigth: '',
    konturWeigth: '',
  });
  const [lengthOfAllSpurs, setLengthOfAllSpurs] = useState({
    vrub: '',
    okont: '',
    kontur: '',
  });
  const [lengthOfSpur, setLengthOfSpur] = useState('');
  const [lengthOfZar, setLengthOfZar] = useState('');
  const [koeffOfZarForRes, setKoeffOfZarForRes] = useState('');
  const [factSpendVVForRes, setFactSpendVVForRes] = useState('');

  // стейты проветривания
  const [airOfGasForRes, setAirOfGasForRes] = useState('');
  const [leakOfAirForRes, setLeakOfAirForRes] = useState('');
  const [airForPeopleForRes, setAirForPeopleForRes] = useState('');
  const [airingOfMinSpeedForRes, setAiringOfMinSpeedForRes] = useState('');
  const [powerOfFanForRes, setPowerOfFanForRes] = useState('');
  const [depressionOfFlexiblePumpForRes, setDepressionOfFlexiblePumpForRes] =
    useState('');
  const [depressionOfHardPumpForRes, setDepressionOfHardPumpForRes] =
    useState('');

  const navigationsOfBVRPaths = // маршруты для отображения подвала
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

  const navigationPathsOfAiring =
    location.pathname === '/calc-of-airing' ||
    location.pathname === '/calc-of-airing/leak-of-air' ||
    location.pathname === '/calc-of-airing/air-for-people' ||
    location.pathname === '/calc-of-airing/air-of-gas-after-explosion' ||
    location.pathname === '/calc-of-airing/air-of-min-speed' ||
    location.pathname === '/calc-of-airing/power-of-fan' ||
    location.pathname === '/calc-of-airing/depression-of-flexible-pump' ||
    location.pathname === '/calc-of-airing/depression-of-hard-pump';

  return (
    <>
      <Header />
      <div className="content">
        {navigationsOfBVRPaths && <Navigation />}
        {navigationPathsOfAiring && <NavigationOfAiring />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/calc-of-bvr" element={<Background />} />
          <Route path="/calc-of-airing" element={<Background />} />
          <Route
            path="/calc-of-bvr/kish" // Начало параметров БВР
            element={<Kish setKishResultForLength={setKishResultForLength} />}
          />
          <Route path="/calc-of-bvr/kki" element={<Kki setKki={setKki} />} />
          <Route
            path="/calc-of-bvr/kzsh"
            element={<Kzsh setKzsh={setKzsh} />}
          />
          <Route
            path="/calc-of-bvr/depth-of-spurs"
            element={<DepthOfSpurs setdepthOfSpursRes={setdepthOfSpursRes} />}
          />
          <Route
            path="/calc-of-bvr/specific-vv"
            element={<SpecificVV setSpecificVVRes={setSpecificVVRes} />}
          />
          <Route
            path="/calc-of-bvr/spend-vv"
            element={
              <TeorSpendVV setTeorSpendVVOnExplore={setTeorSpendVVOnExplore} />
            }
          />
          <Route
            path="/calc-of-bvr/quantity-of-spurs"
            element={
              <QuantityOfSpurs setQuantityOfSpursRes={setQuantityOfSpursRes} />
            }
          />
          <Route
            path="/calc-of-bvr/vv-in-spurs"
            element={
              <VVinSpurs
                setZaryadInSpurs={setZaryadInSpurs}
                setAllSpurs={setAllSpurs}
                setWeigthOfAllSpurs={setWeigthOfAllSpurs}
              />
            }
          />
          <Route
            path="/calc-of-bvr/length-of-zaryad"
            element={
              <LengthOfZaryad
                zaryadInSpurs={zaryadInSpurs}
                setLengthOfZar={setLengthOfZar}
                setLengthOfAllSpurs={setLengthOfAllSpurs}
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
                setKoeffOfZarForRes={setKoeffOfZarForRes}
              />
            }
          />
          <Route
            path="/calc-of-bvr/fact-spend-vv"
            element={
              <FactSpendVV setFactSpendVVForRes={setFactSpendVVForRes} />
            }
          />
          <Route
            path="/calc-of-airing/air-of-gas-after-explosion" // Начало вентиляции
            element={
              <AirOfGasAfterExplosion setAirOfGasForRes={setAirOfGasForRes} />
            }
          />
          <Route
            path="/calc-of-airing/leak-of-air"
            element={<LeakOfAir setLeakOfAirForRes={setLeakOfAirForRes} />}
          />
          <Route
            path="/calc-of-airing/air-for-people"
            element={
              <AirForPeople setAirForPeopleForRes={setAirForPeopleForRes} />
            }
          />
          <Route
            path="/calc-of-airing/air-of-min-speed"
            element={
              <AiringOfMinSpeed
                setAiringOfMinSpeedForRes={setAiringOfMinSpeedForRes}
              />
            }
          />
          <Route
            path="/calc-of-airing/power-of-fan"
            element={<PowerOfFan setPowerOfFanForRes={setPowerOfFanForRes} />}
          />
          <Route
            path="/calc-of-airing/depression-of-flexible-pump"
            element={
              <DepressionOfFlexiblePump
                setDepressionOfFlexiblePumpForRes={
                  setDepressionOfFlexiblePumpForRes
                }
              />
            }
          />
          <Route
            path="/calc-of-airing/depression-of-hard-pump"
            element={
              <DepressionOfHardPump
                setDepressionOfHardPumpForRes={setDepressionOfHardPumpForRes}
              />
            }
          />
          <Route
            path="/all-calculations" // Результаты расчетов
            element={
              <AllResults
                kishResultForLength={kishResultForLength}
                kki={kki}
                kzsh={kzsh}
                depthOfSpursRes={depthOfSpursRes}
                specificVVRes={specificVVRes}
                teorSpendVVOnExplore={teorSpendVVOnExplore}
                quantityOfSpursRes={quantityOfSpursRes}
                allSpurs={allSpurs}
                weigthOfallSpurs={weigthOfallSpurs}
                lengthOfAllSpurs={lengthOfAllSpurs}
                lengthOfSpur={lengthOfSpur}
                koeffOfZarForRes={koeffOfZarForRes}
                factSpendVVForRes={factSpendVVForRes}
                airOfGasForRes={airOfGasForRes}
                leakOfAirForRes={leakOfAirForRes}
                airForPeopleForRes={airForPeopleForRes}
                airingOfMinSpeedForRes={airingOfMinSpeedForRes}
                powerOfFanForRes={powerOfFanForRes}
                depressionOfFlexiblePumpForRes={depressionOfFlexiblePumpForRes}
                depressionOfHardPumpForRes={depressionOfHardPumpForRes}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
