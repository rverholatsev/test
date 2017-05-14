import React from 'react';
import {connect} from 'react-redux';
import ConnectionList from '../views/collection-list';
import Spinner from '../views/spinner';
import * as collectionApi from '../../api/collection-api';
import store from '../../store';
import {COLLECTION_STATE_REQUEST, COLLECTION_STATE_SUCCESS, COLLECTION_STATE_FAILURE} from '../../helpers/constants';

const CollectionListContainer = React.createClass({

    componentDidMount: function () {
        collectionApi.getAllCollections();
    },

    render: function () {
        switch (this.props.state) {
            case COLLECTION_STATE_REQUEST:
                return <Spinner />;
            case COLLECTION_STATE_SUCCESS:
                return <ConnectionList collections={this.props.collections} />;
            case COLLECTION_STATE_FAILURE:
                return <h1>fail</h1>;
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
