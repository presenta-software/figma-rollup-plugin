import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import htmlTemplate from 'rollup-plugin-generate-html-template'

const terser = require('rollup-plugin-terser').terser

export default [
  {
    input: 'src/code.js',
    output: {
      file: 'dist/code.js',
      format: 'umd',
      sourcemap: false
    },
    watch: {
      exclude: 'dist/*',
      include: 'src/*'
    },
    plugins: [
      resolve(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      terser(),
      commonjs()
    ]
  },

  {
    input: 'src/ui.js',
    output: {
      file: 'dist/ui.js',
      format: 'umd',
      sourcemap: false
    },
    watch: {
      exclude: 'dist/*',
      include: 'src/**'
    },
    plugins: [
      resolve(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      terser(),
      commonjs(),
      htmlTemplate({
        template: 'src/ui.html',
        target: 'dist/ui.html',
        embedContent: true
      }),
      postcss({
        modules: {
          globalModulePaths: [
            /global/
          ]
        },
        autoModules: false,
        plugins: [
          autoprefixer({ grid: true }),
          cssnano({ preset: 'default' })
        ]
      })
    ]
  }
]
