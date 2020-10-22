//import logger from "../../Helpers/logger";
import AdminRepository from "../../Repository/admin-Repository";
import { Response } from "../../Helpers/response";
import { v4 as uuid } from "uuid";

class SaveAdminUseCase {
    adminRepository: AdminRepository = new AdminRepository();

    execute = async (data: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            data.id = uuid();
            const admin = await this.adminRepository.save(data);
            if (!admin) {
                return reject (
                    new Response(
                        "UserSignupException",
                         "UserSignupException",
                         "Usuário não cadastrado"
                    )
                )
                
            }
            resolve(admin);
        })
    }
}

export default SaveAdminUseCase;