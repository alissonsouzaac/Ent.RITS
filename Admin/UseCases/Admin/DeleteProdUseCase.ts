import ProdRepository from "../../Repository/Produto-Repository";
import { Response } from "../../Helpers/response";

class DeleteProdUseCase {
    prodRepository: ProdRepository = new ProdRepository();

    execute = async (cod: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            
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


            await this.prodRepository.delete(cod);
            resolve(new Response(
                "ProdDeleteSuccess",
                "ProdDeleteSuccess",
                "Produto deletado com sucesso"
            ));
        });
    };
};

export default DeleteProdUseCase;