import logger from "../../Helpers/logger";
import ClientRepository from "../../Repository/client-Repository";

class listarUseCase {
    clientRepository: ClientRepository = new ClientRepository();

    execute = async (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                const clients = await this.clientRepository.getAll();
                resolve(clients);
            } catch (err) {
                logger.error(err);
                reject(err);
            }
        })
    }
}

export default listarUseCase;