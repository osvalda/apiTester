'use strict';

module.exports = {
  'allow-uncaught': false,
  'async-only': false,
  bail: false,
  'check-leaks': false,
  color: true,
  delay: false,
  diff: true,
//   exit: false, // could be expressed as "'no-exit': true"
  extension: ['js', 'cjs', 'mjs'],
//   'fail-zero': true,
//   fgrep: 'something', // fgrep and grep are mutually exclusive
//   file: ['/path/to/some/file', '/path/to/some/other/file'],
  'forbid-only': true,
  'forbid-pending': false,
  'full-trace': true,
//   global: ['jQuery', '$'],
//   grep: /something/i, // also 'something', fgrep and grep are mutually exclusive
//   growl: false,
//   ignore: ['/path/to/some/ignored/file'],
  'inline-diffs': false,
  // invert: false, // needs to be used with grep or fgrep
  jobs: 4,
//   'node-option': ['unhandled-rejections=strict'], // without leading "--", also V8 flags
  package: './package.json',
//   parallel: true,
  recursive: true,
  reporter: 'mochawesome',
//   'reporter-option': ['foo=bar', 'baz=quux'], // array, not object
  require: 'test/hooks.js',
  retries: 2,
  slow: '75',
  sort: false,
//   spec: ['test/**/*.spec.js'], // the positional arguments!
  timeout: '10000', // same as "timeout: '2s'"
  // timeout: false, // same as "timeout: 0"
  'trace-warnings': true, // node flags ok
  ui: 'bdd',
//   'v8-stack-trace-limit': 100, // V8 flags are prepended with "v8-"
  watch: false,
//   'watch-files': ['lib/**/*.js', 'test/**/*.js'],
//   'watch-ignore': ['lib/vendor']
};