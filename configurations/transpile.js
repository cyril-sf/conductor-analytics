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

  bootstrap: {
    type: "amd",
    moduleName: 'conductor/analytics/bootstrap',
    files: [{
      expand: true,
      cwd: 'lib/',
      moduleName: 'conductor/analytics/bootstrap',
      src: ['conductor-analytics-bootstrap.js'],
      dest: 'dist/'
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
