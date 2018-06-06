import { ActionsType } from "hyperapp";

import IState from "./IState";

export interface IActions {
    up: (value: number) => Partial<IState>;
    down: (value: number) => Partial<IState>;
}

export default class Actions implements ActionsType<IState, IActions> {
    down = (value: number) => (state: IState) => ({count: state.count - value});
    up = (value: number) => (state: IState) => ({count: state.count + value});
}
