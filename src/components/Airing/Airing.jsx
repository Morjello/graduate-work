import { Routes, Route } from 'react-router-dom';
import './Airing.sass';
import AirOfGasAfterExplosion from './AirOfGasAfterExplosion/AirOfGasAfterExplosion';
import LeakOfAir from './LeakOfAir/LeakOfAir';
import AirForPeople from './AirForPeople/AirForPeople';

const Airing = () => {
  return (
    <Routes>
      <Route
        path="/calc-of-airing/air-of-gas-after-explosion"
        element={<AirOfGasAfterExplosion />}
      />
      <Route path="/calc-of-airing/leak-of-air" element={<LeakOfAir />} />
      <Route path="/calc-of-airing/air-for-people" element={<AirForPeople />} />
    </Routes>
  );
};

export default Airing;
