import { Routes, Route } from 'react-router-dom';
import './Airing.sass';
import AirOfGasAfterExplosion from '../Airing/AirOfGasAfterExplosion/AirOfGasAfterExplosion';
import LeakOfAir from '../Airing/LeakOfAir/LeakOfAir';
import AirForPeople from '../Airing/AirForPeople/AirForPeople';
import AiringOfMinSpeed from '../Airing/AiringOfMinSpeed/AiringOfMinSpeed';
import PowerOfFan from '../Airing/PowerOfFan/PowerOfFan';
import DepressionOfFlexiblePump from '../Airing/DepressionOfFlexiblePump/DepressionOfFlexiblePump';
import DepressionOfHardPump from '../Airing/DepressionOfHardPump/DepressionOfHardPump';
import { useEffect, useState } from 'react';

const Airing = ({ setAiringData }) => {
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

  // стейты единиц
  const [scv, setScv] = useState('');
  const [kyt, setKyt] = useState('');
  const [rtr, setRtr] = useState('');

  useEffect(() => {
    setAiringData({
      airOfGasForRes: airOfGasForRes,
      leakOfAirForRes: leakOfAirForRes,
      airForPeopleForRes: airForPeopleForRes,
      airingOfMinSpeedForRes: airingOfMinSpeedForRes,
      powerOfFanForRes: powerOfFanForRes,
      depressionOfFlexiblePumpForRes: depressionOfFlexiblePumpForRes,
      depressionOfHardPumpForRes: depressionOfHardPumpForRes,
    });
  }, [
    airOfGasForRes,
    leakOfAirForRes,
    airForPeopleForRes,
    airingOfMinSpeedForRes,
    powerOfFanForRes,
    depressionOfFlexiblePumpForRes,
    depressionOfHardPumpForRes,
  ]);

  return (
    <Routes>
      <Route
        path="/air-of-gas-after-explosion"
        element={
          <AirOfGasAfterExplosion
            setAirOfGasForRes={setAirOfGasForRes}
            setScv={setScv}
            setKyt={setKyt}
          />
        }
      />
      <Route
        path="/leak-of-air"
        element={
          <LeakOfAir setLeakOfAirForRes={setLeakOfAirForRes} setRtr={setRtr} />
        }
      />
      <Route
        path="/air-for-people"
        element={<AirForPeople setAirForPeopleForRes={setAirForPeopleForRes} />}
      />
      <Route
        path="/air-of-min-speed"
        element={
          <AiringOfMinSpeed
            setAiringOfMinSpeedForRes={setAiringOfMinSpeedForRes}
            scv={scv}
          />
        }
      />
      <Route
        path="/power-of-fan"
        element={
          <PowerOfFan
            setPowerOfFanForRes={setPowerOfFanForRes}
            kyt={kyt}
            airingOfMinSpeedForRes={airingOfMinSpeedForRes}
          />
        }
      />
      <Route
        path="/depression-of-flexible-pump"
        element={
          <DepressionOfFlexiblePump
            setDepressionOfFlexiblePumpForRes={
              setDepressionOfFlexiblePumpForRes
            }
            rtr={rtr}
          />
        }
      />
      <Route
        path="/depression-of-hard-pump"
        element={
          <DepressionOfHardPump
            setDepressionOfHardPumpForRes={setDepressionOfHardPumpForRes}
            rtr={rtr}
            kyt={kyt}
            airingOfMinSpeedForRes={airingOfMinSpeedForRes}
          />
        }
      />
    </Routes>
  );
};

export default Airing;
