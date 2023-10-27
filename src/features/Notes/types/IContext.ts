import { IState } from "./IState"
import { IApi } from "./IApi"

export interface IContext {
  state: IState;
  api: IApi;
}
