import { Router } from 'express';
import { IRoute } from '../Contracts/IRoute';
import ClientRouter from './ClientRouter';

class ApplicationRoutes implements IRoute {
    router: Router = Router();
    clientRouter: ClientRouter = new ClientRouter();

    getRoutes(): Router {
        this.router.use('/cliente', this.clientRouter.getClientRoutes());
        this.router.use('/', this.clientRouter.getNotClientRoutes());
        return this.router;
    }

}

export default ApplicationRoutes;