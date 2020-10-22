import { Request, Response, NextFunction } from 'express';

export interface IAdminNotAuthController {
    saveAdmin(req: Request, res: Response, next: NextFunction): Promise<void>
  //  loginAdmin(req: Request, res: Response, next: NextFunction): Promise<void>

}