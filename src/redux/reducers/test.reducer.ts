import { ActionWithPayload } from '../actions';
import { TestActionTypes } from '../actions/test.actions';

export interface ITestReducerState {
    test_flag: boolean;
}

class DefaultState implements ITestReducerState {
    test_flag = true;

    constructor() {
        this.test_flag = false;
    }
};

export default (state : ITestReducerState = new DefaultState(), action: ActionWithPayload<TestActionTypes, any>) => {
    let newState: ITestReducerState;

    switch (action.type) {
        case TestActionTypes.TEST_TOGGLE_ACTION:
            newState = Object.assign({}, { ...state, test_flag: !state.test_flag });
            return newState;

        default:
          return state;
      }
}
