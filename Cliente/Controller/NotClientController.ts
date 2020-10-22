import { Request, Response, NextFunction } from 'express';
import logger from "../Helpers/logger";
import SaveUseCase from "../UseCases/ClientNotAuth/SaveUseCase";
import { INotController } from "../Contracts/INotController"


class notClientController implements INotController {
    saveUseCase: SaveUseCase = new SaveUseCase();


    save = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting NotClientController.save...");
    
       
          try {

            await this.saveUseCase
              .execute(req.body)
              .then(async (resp) => {
                res.send(resp);
           
              })
              .catch(async (err) => {
                res.send(err);
              });
          } catch (err) {
            logger.error(err);
            res.send(err);
          }
        logger.info("finishing NotClientController.save...");
      };

      login = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
     //   logger.info("starting AccountController.save...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
    
          try {
            await this.saveUseCase
              .execute(req.body)
              .then(async (resp) => {
                res.send(resp);
              })
              .catch(async (err) => {
                res.send(err);
              });
          } catch (err) {
            logger.error(err);
            res.send(err);
          }
        logger.info("finishing AccountController.save...");
      };


      healthCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.status(200).send({ success: true, data: 'service up and running...' });
    };
}

export default notClientController;