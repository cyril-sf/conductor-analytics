module.exports = {
  css: {
    expand: true,
    flatten: true,
    src: ['stylesheets/*.css'],
    dest: 'dist/'
  },

  card: {
    files: [
    {
        expand: true,
        cwd: 'dist',
        src: ['**'],
        dest: 'tmp/public/'
    }
  ]},

  test: {
    files: [
      {
        expand: true,
        cwd: 'test/',
        src: ['index.html', 'qunit/**'],
        dest: 'tmp/public'
    }
  ]},

  testsVendor: {
    expand: true,
    cwd: 'bower_components',
    src: [
      'almond/almond.js',
      'qunit/qunit/*',
      'jquery/jquery.js'
    ],
    flatten: true,
    dest: 'tmp/public/'
  },

  vendor: {
    files: [
      {
        expand: true,
        cwd: 'vendor',
        src: ['**'],
        dest: 'tmp/public/'
      }
    ]
  }
};
