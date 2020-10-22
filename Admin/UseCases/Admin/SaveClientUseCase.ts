//import logger from "../../Helpers/logger";
import ClientRepository from "../../Repository/client-Repository";
//import { Response } from "../../Helpers/response";

class SaveClientUseCase {
    clientRepository: ClientRepository = new ClientRepository();

    execute = async (data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {

            const cliente = await this.clientRepository.save(data);
            if (!cliente) {
                
            }
            resolve(cliente);
        })
    }
}

export default SaveClientUseCase;