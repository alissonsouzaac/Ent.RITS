import ClientRepository from "../../Repository/client-Repository";
import Validate from "../../Helpers/Validate";
import { v4 as uuid } from "uuid";

class CriarUseCase {
    clientRepository: ClientRepository = new ClientRepository();
    validate: Validate = new Validate();

    execute = async (data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            data.codClient = uuid();
            data.status = "pendente";
                    const pedido = await this.clientRepository.save(data);
                    resolve(pedido);
        })
    }
}

export default CriarUseCase;
