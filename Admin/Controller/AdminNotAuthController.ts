import logger from "../Helpers/logger";
import { Request, Response, NextFunction } from "express";
import { IAdminNotAuthController } from "../Contracts/IAdminNotAuthController";
import LoginUseCase from "../UseCases/AdminNotAuth/LoginUseCase";
import SaveAdminUseCase from "../UseCases/AdminNotAuth/SaveAdminUseCase";


class AdminNotAuthController implements IAdminNotAuthController {
    saveAdminUseCase: SaveAdminUseCase = new SaveAdminUseCase();
    loginUseCase: LoginUseCase = new LoginUseCase();

    saveAdmin = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.saveAdmin...");
    
        try {
          await this.saveAdminUseCase
            .execute(req.body)
            .then(async (resp) => {
              res.send(resp);

            })
            .catch((err) => {
              res.send(err);

            });
        } catch (err) {
          logger.error(err);
          res.send(err);

        }
        logger.info("finishing AdminController.saveAdmin...");
      };

      loginAdmin = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.adminLogin...");
    
        try {
          await this.loginUseCase
            .execute(req.body, req.body)
            .then(async (resp) => {
            res.send(resp);

            })
            .catch((err) => {
              res.send(err);
            });
        } catch (err) {
          logger.error(err);
         
        }
        logger.info("finishing AdminController.adminLogin...");
      };

      healthCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.status(200).send({ success: true, data: 'service up and running...' });
    };

}

export default AdminNotAuthController;