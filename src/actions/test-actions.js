import * as types from '../actions/action-types';

export function setTestResult(collection) {
    return {
        type: types.SET_TEST_RESULT,
        data: collection,
    };
}

export function clearTestResult() {
    return {
        type: types.CLEAR_TEST_RESULT
    };
}
