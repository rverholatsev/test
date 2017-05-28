import React from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import Collection from '../views/collection';

import * as CONST from '../../helpers/constants';

const TestResultContainer = React.createClass({
    render: function () {
        return <Collection collection={this.props.collection} hideStartButton={true}/>;
    }
});

const mapStateToProps = function (store) {
    return {
        collection: store.testState.collection,
    };
};

export default connect(mapStateToProps)(TestResultContainer);
