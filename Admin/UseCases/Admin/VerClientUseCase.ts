import logger from "../../Helpers/logger";
import ClientRepository from "../../Repository/client-Repository";
import { Response } from "../../Helpers/response";

class VerClientUseCase {
    clientRepository: ClientRepository = new ClientRepository();

    execute = async (data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            const query = {
                name: data.name
            };
            try {
                const cliente = await this.clientRepository.search(query);
                if (!cliente) {
                    return reject (
                        new Response(
                            "ProdNotFound",
                            "ProdNotFound",
                            "Produto não encontrado"
                        )
                    )
                } 
                resolve(cliente?.[0]) 
            } catch (err) {
                logger.error(err);
                reject(err);
            }
        })
    }

}

export default VerClientUseCase;