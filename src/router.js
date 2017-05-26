import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Layout from './components/layouts/layout';
import CollectionList from './components/containers/collection-list-container';
import Collection from './components/containers/collection-container'

export default (
    <Router history={browserHistory}>
        <Route component={Layout}>
            <Route path="/">
                <IndexRoute component={CollectionList}/>
                <Route path=":collectionId" component={Collection}/>
            </Route>
        </Route>
    </Router>
);
