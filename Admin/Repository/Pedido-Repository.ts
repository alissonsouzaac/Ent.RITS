import { IPedido } from '../Contracts/IPedido';
import { IPedidoRepository } from '../Contracts/IPedidoRepository';
import Pedido from '../Models/Pedido';


class PedidoRepository implements IPedidoRepository<IPedido> { 

    update = async (codClient: String, status: String): Promise<IPedido | undefined> => 
      Pedido.update(codClient, status);  


    search = async (search: Object): Promise<IPedido[]> => 
      Pedido.find(search);  
}

export default PedidoRepository;