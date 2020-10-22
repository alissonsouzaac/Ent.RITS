import { Response } from '../../Helpers/response';
import AdminRepository from '../../Repository/Admin-Repository'


class loginUseCase {
    adminRepository: AdminRepository = new AdminRepository();

    execute = async (email: any, password: any): Promise<any> => {
        return new Promise(async (resolve, reject) => {
         
         const admin = await this.adminRepository.search(email);
         if(!admin) {
            return reject(new Response(
                "NotAuthorizedException",
                "NotAuthorizedException",
                "Admin não encontrado"
              ));
         }
         
         if (password == admin[0].password ) {
            resolve(admin);
         } else {
             reject();
         }
        
        })
    }

}

export default loginUseCase;