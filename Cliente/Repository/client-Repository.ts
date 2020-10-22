import { IPedido } from '../Contracts/IPedido';
import { IClientRepository } from '../Contracts/IClientRepository';
import Pedido from '../Models/Pedido';



class ClientRepository implements IClientRepository<IPedido> {
    save = async (data: IPedido): Promise<any> => {
        return Pedido.create(data)
      };

    getAll = async (): Promise<IPedido[] | undefined> => Pedido.find();
    
    getById = async (id: Object): Promise<IPedido | undefined> => Pedido.find(id);

    search = async (search: Object): Promise<IPedido[]> => 
    Pedido.find(search);

    delete = async (codClient: Object): Promise<IPedido | undefined> => Pedido.deleteOne({codClient});
}

export default ClientRepository