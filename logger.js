const winston = require("winston");

const level = process.env.LOG_LEVEL || 'debug';

const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: level,
            timestamp: function() {
                return (new Date()).toString();
            }
        }),
        new winston.transports.File({
            filename: 'combined.log',
            level: 'info',
            timestamp: function() {
                return (new Date()).toString();
            }
        })
    ]
});

module.exports = logger;
