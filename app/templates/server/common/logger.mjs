import pino from 'pino';

const l = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL,
});

export default l;
