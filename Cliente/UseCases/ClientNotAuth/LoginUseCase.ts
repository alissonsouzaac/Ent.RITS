
import ClientRepository from "../../Repository/client-Repository";
import { Response } from "../../Helpers/response";


class LoginUseCase {
clientRepository: ClientRepository = new ClientRepository();

    execute = async (data: any): Promise<any> => {
    return new Promise(async(resolve, reject) => {
        const name = data.name;
        const password = data.password;

      /*  const client = await this.clientRepository.getByName(name);
       if (!client) {
            return reject(new Response(
                "ClientNotFound",
                "ClientNotFound",
                "Cliente não encontrado"
            ));
        }*/

    })
}

}

export default LoginUseCase;