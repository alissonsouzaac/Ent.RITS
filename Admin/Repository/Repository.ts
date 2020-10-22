import { IClient } from "../Contracts/ICliente";
import { IRepository } from "../Contracts/IRepository"
import Client from "../Models/Client";

class Repository implements IRepository<IClient> {

    save = async (data: IClient): Promise<any> => {
        return Client.create(data)
      };
}

export default Repository;