/**
 * © 2025 Akshay AGI LLP. All rights reserved.
 * Simulates SWIPT behaviors with chosen random data generator.
 */
import { normalRandom, uniformRandom, poissonRandom, exponentialRandom } from "./randomGenerators";

export function simulateSWIPT({
  mode,
  splitRatio,
  switchTime,
  inputPower,
  dataRate,
  distribution,
  N = 40 // number of samples for chart
}) {
  let gen;
  switch (distribution) {
    case "normal":
      gen = () => Math.max(0, normalRandom(inputPower, inputPower * 0.08));
      break;
    case "uniform":
      gen = () => Math.max(0, uniformRandom(inputPower * 0.7, inputPower * 1.1));
      break;
    case "poisson":
      gen = () => Math.max(0, poissonRandom(inputPower / 10) * 10);
      break;
    case "exponential":
      gen = () => inputPower * 0.4 + exponentialRandom(1 / (inputPower * 0.4));
      break;
    default:
      gen = () => inputPower;
  }

  // Simulate N samples
  const infoRate = [];
  const energyHarvested = [];
  for (let i = 0; i < N; i++) {
    const powerSample = gen();
    if (mode === "power-splitting") {
      infoRate.push((1 - splitRatio) * dataRate * (powerSample / inputPower));
      energyHarvested.push(splitRatio * powerSample);
    } else {
      infoRate.push((1 - switchTime) * dataRate * (powerSample / inputPower));
      energyHarvested.push(switchTime * powerSample);
    }
  }
  return {
    infoRate,
    energyHarvested,
    labels: Array.from({ length: N }, (_, i) => `Sample ${i + 1}`),
  };
}