import { ReduxAction } from '../actions';
import { TestActionTypes } from '../actions/test.actions';

export interface ITestReducerState {
    test_flag?: boolean;
    init_time?: number;
}

class DefaultState implements ITestReducerState {
    test_flag = false;
    init_time = + Date.now();
};

export default (state: ITestReducerState = new DefaultState(), action: ReduxAction) => {
    let newState: ITestReducerState;

    switch (action.type) {
        case TestActionTypes.TEST_TOGGLE_ACTION:
            newState = Object.assign({}, { ...state, test_flag: !state.test_flag });
            return newState;

        default:
          return state;
      }
}
