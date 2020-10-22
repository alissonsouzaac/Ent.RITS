import logger from "../../Helpers/logger";
import ProdRepository from "../../Repository/produto-Repository";
import { Response } from "../../Helpers/response";

class VerProdUseCase {
    prodRepository: ProdRepository = new ProdRepository();

    execute = async (cod: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {
           
            try {
                const produtos = await this.prodRepository.search(cod);
                if (produtos && produtos.length === 0) {
                    return reject (
                        new Response(
                            "ProdNotFound",
                            "ProdNotFound",
                            "Produto não encontrado"
                        )
                    )
                } 
    
                resolve(produtos) 
            } catch (err) {
                logger.error(err);
                reject(err);
            }
        })
    }

}

export default VerProdUseCase;