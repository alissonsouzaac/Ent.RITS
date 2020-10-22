//import logger from "../../Helpers/logger";
import ProdRepository from "../../Repository/produto-Repository";
//import { Response } from "../../Helpers/response";

class SaveProdUseCase {
    prodRepository: ProdRepository = new ProdRepository();

    execute = async (data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {

            const produto = await this.prodRepository.save(data);
            if (!produto) {
                
            }
            resolve(produto);
        })
    }
}

export default SaveProdUseCase;