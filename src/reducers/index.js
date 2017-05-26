import { combineReducers } from 'redux';

import collectionReducer from './collection-reducer';

// Combine Reducers
var reducers = combineReducers({
    collectionState: collectionReducer,
});

export default reducers;
