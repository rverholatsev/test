import React from 'react';
import {connect} from 'react-redux';
import ConnectionList from '../views/collection';
import * as collectionApi from '../../api/collection-api';
import store from '../../store';
import Collection from '../views/collection';
import Spinner from '../views/spinner';
import Failure from '../views/failure';
import PropTypes from 'prop-types';

import * as CONST from '../../helpers/constants';

const ModelWidgetContainer = React.createClass({
    propTypes: {
        collection: PropTypes.object
    },

    componentDidMount: function () {
        let collectionId = this.props.params.collectionId;
        collectionApi.getCollection(collectionId);
    },

    render: function () {
        let collectionId = this.props.params.collectionId;

        switch (this.props.state) {

            case CONST.COLLECTIONS_STATE_REQUEST:
                return <Spinner/>;

            case CONST.COLLECTIONS_STATE_SUCCESS:
                return <Collection collection={
                    this.props.collections.find(
                        (collectionItem) => {
                            return (collectionItem.id == collectionId);
                        }
                    )}/>;

            case CONST.COLLECTIONS_STATE_FAILURE:
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

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContainer);
