import logger from "../Helpers/logger";
import { Request, Response, NextFunction } from "express";
import { IAdminController } from "../Contracts/IAdminController";
import ListClientUseCase from "../UseCases/Admin/ListClientUseCase";
import ListProdUseCase from "../UseCases/Admin/ListProdUseCase";
import SaveProdUseCase from "../UseCases/Admin/SaveProdUseCase";
import SaveClientUseCase from "../UseCases/Admin/SaveClientUseCase";
import UpdateProdUseCase from "../UseCases/Admin/UpdateProdUseCase";
import UpdateStatusUseCase from "../UseCases/Admin/UpdateStatusUseCase";
import VerProdUseCase from "../UseCases/Admin/VerProdUseCase";
import VerClientUseCase from "../UseCases/Admin/VerClientUseCase";
import DeleteProdUseCase from "../UseCases/Admin/DeleteProdUseCase";

class AdminController implements IAdminController {
   
    listClientUseCase: ListClientUseCase = new ListClientUseCase();
    listProdUseCase: ListProdUseCase = new ListProdUseCase();
    saveProdUseCase: SaveProdUseCase = new SaveProdUseCase();
    saveClientUseCase: SaveClientUseCase = new SaveClientUseCase();
    updateProdUseCase: UpdateProdUseCase = new UpdateProdUseCase();
    updateStatusUseCase: UpdateStatusUseCase = new UpdateStatusUseCase();
    verProdUseCase: VerProdUseCase = new VerProdUseCase();
    verClientUseCase: VerClientUseCase = new VerClientUseCase();
    deleteProdUseCase: DeleteProdUseCase = new DeleteProdUseCase();

    listClient = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.listClient...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          await this.listClientUseCase
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
        logger.info("finishing AdminController.listClient...");
      };

      listProd = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.listProd...");
    
        try {
          await this.listProdUseCase
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
        logger.info("finishing AdminController.listProd...");
      };

      saveClient = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.saveClient...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          await this.saveClientUseCase
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
        logger.info("finishing AdminController.saveClient...");
      };

      saveProd = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.saveProd...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          await this.saveProdUseCase
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
        logger.info("finishing AdminController.saveProd...");
      };

      updateProd = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.updateProd...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
        const cod = req.body;
        try {
          await this.updateProdUseCase
            .execute(cod, req.body)
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
        logger.info("finishing AdminController.updateProd...");
      };

      updateStatus = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.updateStatus...");
        
    
        try {
          await this.updateStatusUseCase
            .execute(req.body, req.body)
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
        logger.info("finishing AdminController.updateStatus...");
      };

      verProd = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.verProd...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          await this.verProdUseCase
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
        logger.info("finishing AdminController.verProd...");
      }; 

      verClient = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.verClient...");
        //await this.hcpTools.auth.verifyToken(req, res, next);
    
        try {
          await this.verClientUseCase
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
        logger.info("finishing AdminController.verClient...");
      };

      deleteProd = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        logger.info("starting AdminController.deleteProd...");
        
    
        try {
          await this.deleteProdUseCase
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
        logger.info("finishing AdminController.deleteProd...");
      };

      

      healthCheck = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.status(200).send({ success: true, data: 'service up and running...' });
    };
      
}

export default AdminController;