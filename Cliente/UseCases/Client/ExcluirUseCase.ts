import ClientRepository from "../../Repository/client-Repository";
import { Response } from "../../Helpers/response"

class ExcluirUseCase {
    clienteRepository: ClientRepository = new ClientRepository();

    execute = async (data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {

            const pedidos = await this.clienteRepository.search(data);
            if (!pedidos) {
                return reject( new Response(
                    "OrderNotFound",
                    "OrderNotFound",
                    "Pedido não encontrado"
                ));
            }
            const pedido = pedidos[0];
            const codProd: string | any = pedido.codProd;

            await this.clienteRepository.delete(codProd);
            resolve(new Response(
                "OrderDeleteSuccess",
                "OrderDeleteSuccess",
                "Pedido deletado com sucesso"
            ))
        })
    }
}

export default ExcluirUseCase;
