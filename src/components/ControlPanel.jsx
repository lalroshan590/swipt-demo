/**
 * © 2025 Akshay AGI LLP. All rights reserved.
 */
import React from "react";
const distributions = ["normal", "uniform", "poisson", "exponential"];

export default function ControlPanel({
  mode, setMode,
  splitRatio, setSplitRatio,
  switchTime, setSwitchTime,
  inputPower, setInputPower,
  dataRate, setDataRate,
  distribution, setDistribution,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
      <div>
        <label className="font-semibold">Receiver Mode:</label>
        <select
          className="ml-2 p-2 rounded bg-gray-800"
          value={mode}
          onChange={e => setMode(e.target.value)}
        >
          <option value="power-splitting">Power Splitting</option>
          <option value="time-switching">Time Switching</option>
        </select>
      </div>
      <div>
        <label className="font-semibold">Input Power (W):</label>
        <input
          type="number"
          min={10}
          max={2000}
          step={10}
          value={inputPower}
          onChange={e => setInputPower(Number(e.target.value))}
          className="ml-2 w-24 p-2 rounded bg-gray-800"
        />
      </div>
      <div>
        <label className="font-semibold">Data Rate (Mbps):</label>
        <input
          type="number"
          min={0.1}
          max={10}
          step={0.1}
          value={dataRate}
          onChange={e => setDataRate(Number(e.target.value))}
          className="ml-2 w-24 p-2 rounded bg-gray-800"
        />
      </div>
      <div>
        <label className="font-semibold">Distribution:</label>
        <select
          className="ml-2 p-2 rounded bg-gray-800"
          value={distribution}
          onChange={e => setDistribution(e.target.value)}
        >
          {distributions.map(d => (
            <option key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>
          ))}
        </select>
      </div>
      {mode === "power-splitting" ? (
        <div>
          <label className="font-semibold">Split Ratio:</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={splitRatio}
            onChange={e => setSplitRatio(Number(e.target.value))}
            className="ml-2"
          />
          <span className="ml-2">{(splitRatio * 100).toFixed(0)}%</span>
        </div>
      ) : (
        <div>
          <label className="font-semibold">Switch Time (fraction):</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={switchTime}
            onChange={e => setSwitchTime(Number(e.target.value))}
            className="ml-2"
          />
          <span className="ml-2">{(switchTime * 100).toFixed(0)}%</span>
        </div>
      )}
    </div>
  );
}