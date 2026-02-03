import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const dev = process.env.ROLLUP_WATCH === 'true';

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/minime-card.js',
    format: 'es',
    sourcemap: dev,
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    !dev && terser(),
  ],
};
