import { Request, Response, NextFunction } from 'express';
import logger from '../Helpers/logger';

class ErrorHandler {
  static handleError(err: any, req: Request, res: Response, next: NextFunction) {
    logger.error(err);
    res.status(400).send({ success: false, data: err });
    next();
  }
}

export default ErrorHandler;
