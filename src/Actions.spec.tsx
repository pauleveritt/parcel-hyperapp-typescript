import { app, h } from "hyperapp";

import { default as Actions } from "./Actions";
import { initialState } from "./index";
import IState from "./IState";

describe("Actions", () => {
    let wiredActions = new Actions();

    beforeEach(done => {
        document.body.innerHTML = "";
        const Wrapper = (state: IState, actions: Actions) => (
            <div oncreate={() => done()}/>
        );
        wiredActions = app(initialState, new Actions(), Wrapper, document.body);
    });

    it("should increase count", () => {
        const result = wiredActions.up(99);
        expect(result).toEqual({count: 99});
    });

    it("should decrease count", () => {
        const result = wiredActions.down(99);
        expect(result).toEqual({count: -99});
    });

});
