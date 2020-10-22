import { Request, Response, NextFunction } from 'express';

export interface INotController {

save(req: Request, res: Response, next: NextFunction): Promise<void>
}
