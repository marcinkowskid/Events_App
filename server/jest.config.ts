import type { Config } from '@jest/types';
import { defaults as tsjPreset } from 'ts-jest/presets';

const config: Config.InitialOptions = {
  modulePathIgnorePatterns: ['dist'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-node',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    ...tsjPreset.transform,
  },
  verbose: true,
};
export default config;
