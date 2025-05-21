/**
 * © 2025 Akshay AGI LLP. All rights reserved.
 * Advanced random data generators for simulation realism
 */

export function normalRandom(mean, std) {
  let u = 0, v = 0;
  while(u === 0) u = Math.random();
  while(v === 0) v = Math.random();
  return mean + std * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

export function uniformRandom(min, max) {
  return min + Math.random() * (max - min);
}

export function poissonRandom(lambda) {
  let L = Math.exp(-lambda), k = 0, p = 1;
  do {
    k++;
    p *= Math.random();
  } while (p > L);
  return k - 1;
}

export function exponentialRandom(lambda) {
  return -Math.log(1 - Math.random()) / lambda;
}