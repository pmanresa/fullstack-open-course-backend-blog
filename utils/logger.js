const info = (...params) => {
  console.log(...params);
};

const debug = (...params) => {
  console.debug(...params);
};

const error = (...params) => {
  console.error(...params);
};

module.exports = {
  info,
  debug,
  error,
};
