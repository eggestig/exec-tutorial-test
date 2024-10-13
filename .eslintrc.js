module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`, `plugin:jest/all`],
  rules: {
    'prefer-const': 'error',
  },
};
