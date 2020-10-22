import { v4 as uuid } from "uuid";
import Repository from "../../Repository/Repository";
import Validate from "../../Helpers/Validate";
import { Response } from "../../Helpers/response"
import logger from "../../Helpers/logger";


class CriarUseCase {
    repository: Repository = new Repository();
    validate: Validate = new Validate();
    
    execute = async (data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            await this.validate
                .isValid(data)
                .then(async (resp) => {
                    data.id = uuid();

                    const cliente = await this.repository.save(data);
                    if (!cliente) {
                        return reject (
                            new Response(
                                "UserSignupException",
                                 "UserSignupException",
                                 "Usuário não cadastrado"
                            )
                        )
                    }
                    resolve(cliente);
                })
                .catch((err) => {
                    logger.error(err);
                    reject(err);
                  });
        })
    }
}

export default CriarUseCase;