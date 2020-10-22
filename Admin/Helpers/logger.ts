import winston, { Logger } from 'winston';

const {
  combine, timestamp, colorize, prettyPrint,
} = winston.format;

const ecsFormat = winston.format.printf(info => `${info.timestamp} - `
  + `${info.level}: ${info.message}`);


const logger: Logger = winston.createLogger({
  format: combine(
    timestamp(),
    prettyPrint(),
    colorize(),
  ),
  transports: [
    new winston.transports.Console({
      format: ecsFormat,
    }),
  ],
  exitOnError: false,
});

export = logger;
