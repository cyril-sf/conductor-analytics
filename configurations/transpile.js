module.exports = {
  code: {
    type: "amd",
    files: [{
      expand: true,
      cwd: 'lib/',
      src: ['app/**/*.js'],
      dest: 'tmp/public/conductor-analytics'
    }]
  },

  tests: {
    type: "amd",
    files: [{
      expand: true,
      cwd: 'test/tests/',
      src: ['**/*.js'],
      dest: 'tmp/public/test/'
    },{
      expand: true,
      cwd: 'test/helpers/',
      src: ['**/*.js'],
      dest: 'tmp/public/test/'
    }]
  },

  templates: {
    type: "amd",
    files: [{
      expand: true,
      cwd: 'tmp/public/',
      src: ['templates.js'],
      dest: 'tmp/public/conductor-analytics'
    }]
  }
};
