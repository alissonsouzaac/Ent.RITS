export interface IValidate {
    isValid(jsonUser: any): Promise<boolean | String>
  }
  