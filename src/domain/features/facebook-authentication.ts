import { AuthenticationError } from "@/domain/errors";
import { AccessToken } from "../models/access-token";

export interface FacebookAuthentication {
  perform: (params: FacebookAuthentication.Params) => FacebookAuthentication.Result
}

namespace FacebookAuthentication {
  export type Params = {
    token: string;
  }

  export type Result = AccessToken | AuthenticationError;
}
