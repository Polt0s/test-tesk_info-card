import { IUserInfo } from "../Types/IUserInfo";
import { IAboutMe } from "../Types/IAboutMe";
import ApiService from "./ApiServise";

export class ApiDataUsers extends ApiService {

  static getInfoUser() {
    const response = this.apiGet<IUserInfo>('https://api.github.com/users/gaearon');
    return response;
  };

  static getInfoAboutMe() {
    const response = this.apiGet<IAboutMe>('https://api.github.com/users/polt0s');
    return response;
  };
};
