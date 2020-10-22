import { Router } from 'express';
import { IRoute } from '../Contracts/IRoute';
import AdminRouter from './AdminRoutes';

class ApplicationRoutes implements IRoute {
    router: Router = Router();
    adminRouter: AdminRouter = new AdminRouter();

    getRoutes(): Router {
        this.router.use('/admin', this.adminRouter.getAdminRoutes());
        this.router.use('/', this.adminRouter.getNotAdminRoutes());
        return this.router;
    }

}

export default ApplicationRoutes;