import React from 'react';
import {connect} from 'react-redux';
import ConnectionList from '../views/collection-list';
import * as collectionApi from '../../api/collection-api';
import * as CONST from '../../helpers/constants';
import store from '../../store';
import Spinner from '../views/spinner';

const CollectionListContainer = React.createClass({

    componentDidMount: function () {
        collectionApi.getCollections();
    },

    render: function () {
        switch(this.props.state) {
            case CONST.STATE_REQUEST:
                return <Spinner />;
            case CONST.STATE_SUCCESS:
                return <ConnectionList collections={this.props.collections}/>;
            case CONST.STATE_FAILURE:
                return <h1>Failure</h1>;
        }
    }
});

const mapStateToProps = function (store) {
    return {
        collections: store.collectionState.collections,
        state: store.collectionState.state
    };
};

export default connect(mapStateToProps)(CollectionListContainer);