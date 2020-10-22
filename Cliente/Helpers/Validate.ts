import { IValidate } from '../Contracts/IValidate';
import ClientRepository from '../Repository/Repository';

class validate implements IValidate {
    clientRepository: ClientRepository = new ClientRepository;

    isValid = async (jsonUser: any): Promise<boolean | String> => {

        let valid: String | boolean ;
        const email = jsonUser.email;
        const phone = jsonUser.phone;

        return new Promise(async (resolve, reject) => {
            const clientByEmail = await this.clientRepository.search({"email": email});
            
            if (clientByEmail != null && clientByEmail.length != 0) {
                valid = false;
                reject(valid);
              }

            const clientByPhone = await this.clientRepository.search({"phone": phone});
            if (clientByPhone != null && clientByPhone.length != 0) {
               
                valid = false;
                reject(valid);
            }  

            return resolve(valid);
        })
    }
}

export default validate;