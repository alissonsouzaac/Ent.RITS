import { Request, Response, NextFunction } from 'express';
import logger from "../Helpers/logger";
import CriarUseCase from "../UseCases/Client/CriarUseCase";
import VerUseCase from "../UseCases/Client/VerUseCase";
import ListarUseCase from "../UseCases/Client/ListarUseCase";
import ExcluirUseCase from "../UseCases/Client/ExcluirUseCase";
import { IController } from '../Contracts/IController';


class ClientController implements IController {
    verUseCase: VerUseCase = new VerUseCase();
    criarUseCase: CriarUseCase = new CriarUseCase();
    listarUseCase: ListarUseCase = new ListarUseCase();
    excluirUseCase: ExcluirUseCase = new ExcluirUseCase();
   

    getAll = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting ClientController.VerTudo...");
    
        try {
          await this.listarUseCase
            .execute()
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
        logger.info("finishing ClientController.VerTudo...");
      };


      get = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting ClientController.ver...");
    
        try {
          await this.verUseCase
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
        logger.info("finishing ClientController.ver...");
      };

      save = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting ClientController.criar...");
    
    
          try {
            await this.criarUseCase
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
        logger.info("finishing ClientController.criar...");
      };

      delete = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting ClientController.delete...");
    
        try {
          this.excluirUseCase
            .execute(req.body)
            .then((resp) => {
              res.send(resp);
            })
            .catch((err) => {
              res.send(err);
            });
        } catch (err) {
          logger.error(err);
          res.send(err);

        }
        logger.info("finishing ClientController.delete...");
      };

      healthCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.status(200).send({ success: true, data: 'service up and running...' });
    };
}

export default ClientController;



