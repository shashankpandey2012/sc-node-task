/**
 * Created by Shashank on 5/10/2017.
 */
import winston from 'winston';

let logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'log_file.log' })
    ]
});

export default logger;