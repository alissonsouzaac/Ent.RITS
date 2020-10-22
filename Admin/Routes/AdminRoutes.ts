import { Router } from 'express';
import adminController from '../Controller/AdminController';
import NotAdminController from '../Controller/AdminNotAuthController';

class AdminRoutes {
    adminController: adminController = new adminController;
    notAdminController: NotAdminController = new NotAdminController;

    getAdminRoutes(): Router {
        const router: Router = Router();

        router.get('/produtos', this.adminController.listProd);
        router.get('/clientes', this.adminController.listClient);
        router.get('/produto', this.adminController.verProd);
        router.get('/cliente', this.adminController.verClient);
        router.post('/produto', this.adminController.saveProd);
        router.post('/cliente', this.adminController.saveClient);
        router.put('/produto', this.adminController.updateProd);
        router.put('/status', this.adminController.updateStatus);
        router.delete('/produto', this.adminController.deleteProd);

        return router;

    }

    getNotAdminRoutes(): Router {
        const router: Router = Router();

        router.post('/', this.notAdminController.saveAdmin);
        router.post('/login', this.notAdminController.loginAdmin);

        return router;
    }
}

export default AdminRoutes;