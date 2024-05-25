import { defineConfig } from 'tsup';

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/index.tsx'], // Entry file with .tsx extension
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
});
