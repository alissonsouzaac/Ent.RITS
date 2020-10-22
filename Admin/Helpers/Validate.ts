import { IValidate } from '../Contracts/IValidate';
import ClientRepository from '../Repository/client-Repository';

class validate implements IValidate {
    clientRepository: ClientRepository = new ClientRepository;

    isValid = async (jsonUser: any): Promise<boolean | String> => {

        let valid: String | boolean = true;
        const email = jsonUser.email;
        const phone = jsonUser.phone;

        return new Promise(async (resolve, reject) => {
            const clientByEmail = await this.clientRepository.searchByEmail({email})
            if (clientByEmail != null && clientByEmail.length != 0) {
                valid = false;
              }

            const clinetByPhone = await this.clientRepository.searchByPhone({phone})
            if (clinetByPhone != null && clinetByPhone.length != 0) {
                valid = false;
            }  
        })
    }
}

export default validate;