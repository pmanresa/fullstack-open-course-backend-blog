const logger = require("./logger");
const { unknownEndpoint, errorHandler } = require("./error");

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
