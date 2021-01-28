// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: [
    '**/plugins/*',
    '**/.github/**/*',
    '**/.gitignore',
    '**/package*',
    '**/README*',
    '**/snowpack.config.js'
  ],
  mount: {
    /* ... */
  },
  plugins: [
    './plugins/markdown-parser.js'
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  // TODO: Enable built-in build when it is fixed
  // Reference: https://github.com/snowpackjs/snowpack/issues/2318#issuecomment-765652326
  // optimize: {
  //   bundle: true,
  //   minify: true,
  //   target: 'es2018'
  // }
};
