module.exports = {
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
