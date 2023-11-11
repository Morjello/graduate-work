import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Kish from './Kish/Kish';
import Kki from './Kki/Kki';
import Kzsh from './Kzsh/Kzsh';
import DepthOfSpurs from './DepthOfSpurs/DepthOfSpurs';
import SpecificVV from './SpecificVV/SpecificVV';
import SpendVV from './SpendVV/SpendVV';
import QuantityOfSpurs from './QuantityOfSpurs/QuantityOfSpurs';
import VVinSpurs from './VVinSpurs/VVinSpurs';
import LengthOfZaryad from './LengthOfZaryad/LengthOfZaryad';
import LengthOfSpurs from './LengthOfSpurs/LengthOfSpurs';

const Calculations = () => {
  const [zaryadInSpurs, setZaryadInSpurs] = useState({});
  const [kishResultForLength, setKishResultForLength] = useState();

  return (
    // <>
    //   <Kish setKishResultForLength={setKishResultForLength} />
    //   <Kki />
    //   <Kzsh />
    //   <DepthOfSpurs />
    //   <SpecificVV />
    //   <SpendVV />
    //   <QuantityOfSpurs />
    //   <VVinSpurs setZaryadInSpurs={setZaryadInSpurs} />
    //   <LengthOfZaryad zaryadInSpurs={zaryadInSpurs} />
    //   <LengthOfSpurs kishResultForLength={kishResultForLength} />
    // </>
    <Routes>
      <Route
        path="/calc-of-bvr/kish"
        element={<Kish setKishResultForLength={setKishResultForLength} />}
      />
      <Route path="/kki" element={<Kki />} />
      <Route path="/kzsh" element={<Kzsh />} />
      <Route path="/depth-of-spurs" element={<DepthOfSpurs />} />
      <Route path="/specific-vv" element={<SpecificVV />} />
      <Route path="/spend-vv" element={<SpendVV />} />
      <Route path="/quantity-of-spurs" element={<QuantityOfSpurs />} />
      <Route
        path="/vv-in-spurs"
        element={<VVinSpurs setZaryadInSpurs={setZaryadInSpurs} />}
      />
      <Route
        path="/length-of-zaryad"
        element={<LengthOfZaryad zaryadInSpurs={zaryadInSpurs} />}
      />
      <Route
        path="/length-of-spurs"
        element={<LengthOfSpurs kishResultForLength={kishResultForLength} />}
      />
    </Routes>
  );
};

export default Calculations;
