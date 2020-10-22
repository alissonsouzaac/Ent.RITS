import { Request, Response, NextFunction } from 'express';

export interface IAdminController {
    listClient(req: Request, res: Response, next: NextFunction): Promise<void>
    listProd(req: Request, res: Response, next: NextFunction): Promise<void>
    saveProd(req: Request, res: Response, next: NextFunction): Promise<void>
    saveClient(req: Request, res: Response, next: NextFunction): Promise<void>
    updateProd(req: Request, res: Response, next: NextFunction): Promise<void>
    verProd(req: Request, res: Response, next: NextFunction): Promise<void>
    verClient(req: Request, res: Response, next: NextFunction): Promise<void>
    deleteProd(req: Request, res: Response, next: NextFunction): Promise<void>
    updateStatus(req: Request, res: Response, next: NextFunction): Promise<void>

}