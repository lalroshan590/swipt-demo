/**
 * © 2025 Akshay AGI LLP. All rights reserved.
 */
import React, { useState } from "react";
import ControlPanel from "./ControlPanel";
import ReceiverChart from "./ReceiverChart";
import { simulateSWIPT } from "../utils/swiptAlgorithms";

export default function Simulator() {
  const [mode, setMode] = useState("power-splitting");
  const [splitRatio, setSplitRatio] = useState(0.5);
  const [switchTime, setSwitchTime] = useState(0.5);
  const [inputPower, setInputPower] = useState(500); // in Watts
  const [dataRate, setDataRate] = useState(4); // Mbps
  const [distribution, setDistribution] = useState("normal");

  const simulationResults = simulateSWIPT({
    mode,
    splitRatio,
    switchTime,
    inputPower,
    dataRate,
    distribution,
  });

  return (
    <div className="bg-black bg-opacity-40 p-6 md:p-8 rounded-2xl shadow-2xl">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Interactive SWIPT Simulator</h2>
      <ControlPanel
        mode={mode}
        setMode={setMode}
        splitRatio={splitRatio}
        setSplitRatio={setSplitRatio}
        switchTime={switchTime}
        setSwitchTime={setSwitchTime}
        inputPower={inputPower}
        setInputPower={setInputPower}
        dataRate={dataRate}
        setDataRate={setDataRate}
        distribution={distribution}
        setDistribution={setDistribution}
      />
      <ReceiverChart results={simulationResults} mode={mode} />
      <div className="mt-6 text-sm text-gray-300">
        <strong>Tip:</strong> Adjust the controls above to demonstrate SWIPT's impact on data center power and data rate!
      </div>
    </div>
  );
}