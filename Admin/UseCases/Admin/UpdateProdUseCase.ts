import ProdRepository from "../../Repository/produto-Repository";
import { Response } from "../../Helpers/response";

class UpdateProdUseCase {
    prodRepository: ProdRepository = new ProdRepository();

    execute = async (cod: any, data: any): Promise<any> => {
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
            console.log(produtos);

            const produto = produtos?.[0];
            delete data.name;
            delete data.preco;
            const ToUpdate = data;

            resolve (await this.prodRepository.update(produto.cod, ToUpdate))
        })
    }
}

export default UpdateProdUseCase;