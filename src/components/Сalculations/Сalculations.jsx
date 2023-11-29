import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Kish from '../Сalculations/Kish/Kish';
import Kki from '../Сalculations/Kki/Kki';
import Kzsh from '../Сalculations/Kzsh/Kzsh';
import SpecificVV from '../Сalculations/SpecificVV/SpecificVV';
import TeorSpendVV from '../Сalculations/TeorSpendVV/TeorSpendVV';
import QuantityOfSpurs from '../Сalculations/QuantityOfSpurs/QuantityOfSpurs';
import VVinSpurs from '../Сalculations/VVinSpurs/VVinSpurs';
import LengthOfZaryad from '../Сalculations/LengthOfZaryad/LengthOfZaryad';
import LengthOfSpurs from '../Сalculations/LengthOfSpurs/LengthOfSpurs';
import KoeffOfZaryajaniya from '../Сalculations/KoeffOfZaryajaniya/KoeffOfZaryajaniya';
import FactSpendVV from '../Сalculations/FactSpendVV/FactSpendVV';
import AverageDepthOfSpurs from './AverageDepthOfSpurs/AverageDepthOfSpurs';
import OuputOfOre from './OuputOfOre/OuputOfOre';

const Calculations = ({ setBvrData }) => {
  // стейты единиц
  const [svch, setSvch] = useState('');
  const [spr, setSpr] = useState('');
  const [q, setQ] = useState('');
  // стейты на таблицу
  const [zaryadInSpurs, setZaryadInSpurs] = useState({});
  const [kishResultForLength, setKishResultForLength] = useState('');
  const [kki, setKki] = useState('');
  const [kzsh, setKzsh] = useState('');
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
  const [lengthOfSpursForDepth, setLengthOfSpursForDepth] = useState('');
  const [averageDepthOfSpursForRes, setAverageDepthOfSpursForRes] =
    useState('');
  const [ouputOfOreForRes, setOuputOfOreForRes] = useState('');

  useEffect(() => {
    setBvrData({
      kishResultForLength: kishResultForLength,
      kki: kki,
      kzsh: kzsh,
      specificVVRes: specificVVRes,
      teorSpendVVOnExplore: teorSpendVVOnExplore,
      quantityOfSpursRes: quantityOfSpursRes,
      allSpurs: allSpurs,
      weigthOfallSpurs: weigthOfallSpurs,
      lengthOfAllSpurs: lengthOfAllSpurs,
      lengthOfSpur: lengthOfSpur,
      koeffOfZarForRes: koeffOfZarForRes,
      factSpendVVForRes: factSpendVVForRes,
      averageDepthOfSpursForRes: averageDepthOfSpursForRes,
      ouputOfOreForRes: ouputOfOreForRes,
    });
  }, [
    kishResultForLength,
    kki,
    kzsh,
    specificVVRes,
    teorSpendVVOnExplore,
    quantityOfSpursRes,
    allSpurs,
    weigthOfallSpurs,
    lengthOfAllSpurs,
    lengthOfSpur,
    koeffOfZarForRes,
    factSpendVVForRes,
    averageDepthOfSpursForRes,
    ouputOfOreForRes,
  ]);

  return (
    <Routes>
      <Route
        path="/kish" // Начало параметров БВР
        element={<Kish setKishResultForLength={setKishResultForLength} />}
      />
      <Route
        path="/kki"
        element={<Kki setKki={setKki} setSpr={setSpr} setSvch={setSvch} />}
      />
      <Route
        path="/kzsh"
        element={<Kzsh setKzsh={setKzsh} lengthOfSpur={lengthOfSpur} />}
      />
      <Route
        path="/specific-vv"
        element={
          <SpecificVV
            setSpecificVVRes={setSpecificVVRes}
            svch={svch}
            setQ={setQ}
          />
        }
      />
      <Route
        path="/spend-vv"
        element={
          <TeorSpendVV
            setTeorSpendVVOnExplore={setTeorSpendVVOnExplore}
            svch={svch}
            lengthOfSpur={lengthOfSpur}
            q={q}
          />
        }
      />
      <Route
        path="/quantity-of-spurs"
        element={
          <QuantityOfSpurs
            setQuantityOfSpursRes={setQuantityOfSpursRes}
            spr={spr}
            q={q}
            kzsh={kzsh}
          />
        }
      />
      <Route
        path="/vv-in-spurs"
        element={
          <VVinSpurs
            setZaryadInSpurs={setZaryadInSpurs}
            setAllSpurs={setAllSpurs}
            setWeigthOfAllSpurs={setWeigthOfAllSpurs}
            quantityOfSpursRes={quantityOfSpursRes}
            teorSpendVVOnExplore={teorSpendVVOnExplore}
          />
        }
      />
      <Route
        path="/length-of-zaryad"
        element={
          <LengthOfZaryad
            zaryadInSpurs={zaryadInSpurs}
            setLengthOfZar={setLengthOfZar}
            allSpurs={allSpurs}
            setLengthOfAllSpurs={setLengthOfAllSpurs}
          />
        }
      />
      <Route
        path="/length-of-spurs"
        element={
          <LengthOfSpurs
            kishResultForLength={kishResultForLength}
            setLengthOfSpur={setLengthOfSpur}
            setLengthOfSpursForDepth={setLengthOfSpursForDepth}
          />
        }
      />
      <Route
        path="/koeff-of-zaryajaniya"
        element={
          <KoeffOfZaryajaniya
            lengthOfSpur={lengthOfSpur}
            lengthOfZar={lengthOfZar}
            setKoeffOfZarForRes={setKoeffOfZarForRes}
          />
        }
      />
      <Route
        path="/fact-spend-vv"
        element={<FactSpendVV setFactSpendVVForRes={setFactSpendVVForRes} />}
      />
      <Route
        path="/average-depth-of-spurs"
        element={
          <AverageDepthOfSpurs
            lengthOfSpursForDepth={lengthOfSpursForDepth}
            setAverageDepthOfSpursForRes={setAverageDepthOfSpursForRes}
          />
        }
      />
      <Route
        path="/output-of-ore"
        element={
          <OuputOfOre
            averageDepthOfSpursForRes={averageDepthOfSpursForRes}
            kishResultForLength={kishResultForLength}
            setOuputOfOreForRes={setOuputOfOreForRes}
          />
        }
      />
    </Routes>
  );
};

export default Calculations;
