import React from 'react';
import {connect} from 'react-redux';
import {setTestResult} from '../../actions/test-actions'
import store from '../../store';

import {browserHistory} from 'react-router';

import * as collectionApi from '../../api/collection-api';

import Test from '../views/test';
import Spinner from '../views/spinner';
import Failure from '../views/failure';
import PropTypes from 'prop-types';

import * as CONST from '../../helpers/constants';

const TestContainer = React.createClass({
    propTypes: {
        collection: PropTypes.array
    },
    componentDidMount: function () {
        let collectionId = this.props.params.collectionId;
        collectionApi.getCollection(collectionId);
    },
    handlerOnSuccess: function (collection) {
        store.dispatch(setTestResult(collection));
        browserHistory.push('/test/result/' + collection.id);
    },
    render: function () {
        let collectionId = this.props.params.collectionId;

        switch (this.props.state) {
            case CONST.STATE_REQUEST:
                return <Spinner/>;
            case CONST.STATE_SUCCESS:
                return (
                    <Test
                        collection={
                            this.props.collections.find(
                                (collectionItem) => {
                                    return (collectionItem.id == collectionId);
                                }
                            )}
                        onSuccess={this.handlerOnSuccess}
                    />
                );
            case CONST.STATE_FAILURE:
                return <Failure/>;
        }
    }
});

const mapStateToProps = function (store) {
    return {
        state: store.collectionState.state,
        collections: store.collectionState.collections,
    };
};

export default connect(mapStateToProps)(TestContainer);
