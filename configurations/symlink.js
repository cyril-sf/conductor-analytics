module.exports = {
  test: {
    files: [{
      expand: true,
      cwd: 'example/',
      src: ['*'],
      dest: 'tmp/public/example/'
    }]
  }
};
