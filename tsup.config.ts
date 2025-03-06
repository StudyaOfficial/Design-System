import type { Options } from 'tsup'

const env = process.env.NODE_ENV

export const tsup: Options = {
    splitting: true,
    clean: true, // clean up the dist folder
    dts: {
      resolve: true,
    },
    format: ['cjs', 'esm'], // generate cjs and esm files
    // minify: env === 'production',
    minify: false,
    bundle: env === 'production',
    skipNodeModulesBundle: false,
    watch: env === 'development',
    target: 'es2020',
    outDir: env === 'production' ? 'dist' : 'lib',
    entry: ['src/index.ts'], // entry point
    noExternal: [ /(.*)/ ],
    // treeshake: true,
}
