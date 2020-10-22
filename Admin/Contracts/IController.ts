import { Request, Response, NextFunction } from 'express';

export interface IController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<void>
    get(req: Request, res: Response, next: NextFunction): Promise<void>
    save(req: Request, res: Response, next: NextFunction): Promise<void>

}