module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./src/setup-jest.ts'],
  testPathIgnorePatterns: ['node_modules/', 'dist/', 'src/test.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: {
        before: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer']
      }
    }
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.module.ts',
    '!src/app/**/*.interface.ts',
    '!src/app/**/*.enum.ts',
    'src/app/shared/**/*.ts', // Incluir archivos en la carpeta 'shared'
    'src/app/pokemon/services/**/*.ts' // Incluir archivos en la carpeta 'services'
  ],
  coverageReporters: ['html', 'text-summary'],
};
