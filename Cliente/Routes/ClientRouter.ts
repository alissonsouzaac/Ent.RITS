import { Router } from 'express';
import ClientController from '../Controller/ClientController';
import NotClientController from '../Controller/NotClientController';

class clientRoutes {
    clientController: ClientController = new ClientController;
    notClientController: NotClientController = new NotClientController;

    getClientRoutes(): Router {
        const router: Router = Router();

        router.get('/ver', this.clientController.get);
        router.get('/listar', this.clientController.getAll);
        router.post('/criar', this.clientController.save);
        router.delete('/deletar', this.clientController.delete);

        return router;

    }

    getNotClientRoutes(): Router {
        const router: Router = Router();

        router.post('/', this.notClientController.save);

        return router;
    }
}

export default clientRoutes;