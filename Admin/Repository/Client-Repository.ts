import { IPedido } from '../Contracts/IPedido';
import { IClientRepository } from '../Contracts/IClientRepository';
import Pedido from '../Models/Pedido';
import Client from '../Models/Client';



class ClientRepository implements IClientRepository<IPedido> {
    save = async (data: IPedido): Promise<any> => {
        return Pedido.create(data)
      };

    getAll = async (): Promise<IPedido[] | undefined> => Client.find();
    
    getById = async (id: Object): Promise<IPedido | undefined> => Pedido.find(id);

    search = async (search: Object): Promise<IPedido[]> => 
    Pedido.find(search);


    delete = async (nome: String): Promise<IPedido | undefined> => Pedido.deleteOne(nome);
}

export default ClientRepository