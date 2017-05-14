import { combineReducers } from 'redux';

// Reducers
// import userReducer from './user-reducer';
// import widgetReducer from './widget-reducer';
// import searchLayoutReducer from './search-layout-reducer';

import collectionReducer from './collection-reducer';

// Combine Reducers
var reducers = combineReducers({
    collectionState: collectionReducer
});

export default reducers;
