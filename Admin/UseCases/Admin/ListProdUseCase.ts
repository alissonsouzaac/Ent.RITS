import logger from "../../Helpers/logger";
import ProdRepository from "../../Repository/produto-Repository";

class GetAllUseCase {
    prodRepository: ProdRepository = new ProdRepository();

    execute = async (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                const clients = await this.prodRepository.getAll();
                resolve(clients);
            } catch (err) {
                logger.error(err);
                reject(err);
            }
        });
    };
}

export default GetAllUseCase;