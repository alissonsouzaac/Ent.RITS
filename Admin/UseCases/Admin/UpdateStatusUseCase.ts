import PedRepository from "../../Repository/pedido-Repository";
import { Response } from "../../Helpers/response";

class UpdateStatusUseCase {
    pedRepository: PedRepository = new PedRepository();

    execute = async (codProd: any, data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {
           
            const pedidos = await this.pedRepository.search(codProd);
            if (pedidos && pedidos.length === 0) {
                return reject (
                    new Response(
                        "OrderNotFound",
                        "OrderNotFound",
                        "Pedido não encontrado"
                    )
                )
            } 
           
            const pedido = pedidos?.[0];
            delete data.status;
            const ToUpdate = data;

            resolve (await this.pedRepository.update(pedido.codClient, ToUpdate))
        })
    }
}

export default UpdateStatusUseCase;