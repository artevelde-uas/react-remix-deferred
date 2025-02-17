import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';

import pkg from './package.json' assert { type: 'json' };


export default {
    input: 'src/index.js',
    output: [{
        file: pkg.main,
        format: 'cjs'
    }, {
        file: pkg.module,
        format: 'esm'
    }],
    plugins: [
        peerDepsExternal(),
        nodeResolve({
            extensions: ['.js', '.jsx']
        }),
        commonjs(),
        babel({
            include: 'src/**/*',
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ],
            babelHelpers: 'bundled',
            comments: false
        }),
        postcss({
            modules: {
                localsConvention: 'camelCase',
                generateScopedName: 'MyComponent__[local]'
            },
            extract: 'index.css',
            plugins: [
                postcssPresetEnv()
            ]
        })
    ]
};
