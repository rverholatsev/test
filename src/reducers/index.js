import {combineReducers} from 'redux';

import collectionReducer from './collection-reducer';
import testReducer from './test-reducer';

// Combine Reducers
var reducers = combineReducers({
    collectionState: collectionReducer,
    testState: testReducer,
});

export default reducers;
