import axiosClient from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const AuthenticateAPI = {
  LoginAccount: (params) => axiosClient.post(END_POINT_API.LOGIN, params),
  RegisterAccount: (params) => axiosClient.post(END_POINT_API.REGISTER, params),
};

export default AuthenticateAPI;
