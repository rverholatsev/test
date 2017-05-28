import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

import Model from '../views/model';
import Paginator from '../views/paginator';

export default React.createClass({
    propTypes: {
        collection: PropTypes.object.isRequired,
        onSuccess: PropTypes.func.isRequired,
    },
    getInitialState: function () {
        let models = [];

        this.props.collection.models.map(function (model) {
            let prototypes = [];

            model.prototypes.map(function (prototype) {
                prototypes.push(Object.assign({}, prototype, {count: -1}));
            });

            models.push(Object.assign({}, model, {prototypes: prototypes}));
        });

        return {
            collection: Object.assign({}, this.props.collection, {models: models}),
            modelIndex: 0,
        };
    },
    render: function () {
        return (
            <content>
                <div className="square row">
                    <h4 className="col-xs-12">{this.state.collection.name}</h4>
                </div>

                <Model data={this.state.collection.models[this.state.modelIndex]} mode="widget" smallProts={true}/>

                <Paginator page={4} maxPage={10} onChange={() => {}}/>
            </content>
        );
    }
});