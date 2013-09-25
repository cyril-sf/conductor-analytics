module.exports = {
  app: {
    src: ['tmp/public/conductor-analytics/**/*.js'],
    dest: 'tmp/public/app/app.js'
  },

  main: {
    src: ['tmp/public/app/*.js', 'lib/card.js'],
    dest: 'dist/card.js'
  },

  tests: {
    src: ['tmp/public/test/**/*.js'],
    dest: 'tmp/public/test/card_test.js'
  }
};
