import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Layout from './components/layouts/layout';
import CollectionListContainer from './components/containers/collection-list-container';
import CollectionContainer from './components/containers/collection-container';
import TestContainer from './components/containers/test-container';
import TestResultContainer from './components/containers/test-result-container';

export default (
    <Router history={browserHistory}>
        <Route component={Layout}>
            <Route path="/">
                <IndexRoute component={CollectionListContainer}/>
                <Route path=":collectionId" component={CollectionContainer}/>

                <Route path="test">
                    <Route path=":collectionId" component={TestContainer}/>
                    <Route path="result">
                        <Route path=":collectionId" component={TestResultContainer}/>
                    </Route>
                </Route>
            </Route>
        </Route>
    </Router>
);








