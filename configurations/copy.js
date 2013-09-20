module.exports = {
  css: {
    cwd: 'lib',
    expand: true,
    src: ['*.css', 'conductor-analytics-bootstrap.js'],
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
