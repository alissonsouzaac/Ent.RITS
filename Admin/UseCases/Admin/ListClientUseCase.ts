import logger from "../../Helpers/logger";
import ClientRepository from "../../Repository/client-Repository";

class GetAllUseCase {
    clientRepository: ClientRepository = new ClientRepository();

    execute = async (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                const clients = await this.clientRepository.getAll();
                console.log(clients);
                resolve(clients);
            } catch (err) {
                logger.error(err);
                reject(err);
            }
        });
    };
}

export default GetAllUseCase;