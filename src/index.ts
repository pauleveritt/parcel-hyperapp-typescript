import { app } from "hyperapp";
import Actions from "./Actions";
import Container from "./Container";
import IState from "./IState";

export const initialState: IState = {
  count: 0
};

app(initialState, new Actions(), Container, document.body);
