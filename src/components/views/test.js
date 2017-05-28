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
            model: models[0],
            page: 1,
            pages: [],
            counter: 0,
        };
    },
    handlerOnModelChanged: function (model) {
        let collection = this.state.collection,
            pages = this.state.pages,
            counter = this.state.counter;

        collection.models.map(function (collectionModel, index) {
            if (model.id === collectionModel.id) {
                collection.models[index] = model;

                let isDone = true;
                this.state.model.prototypes.map(function (prototype) {
                    if (prototype.count === -1) {
                        isDone = false;
                    }
                }.bind(this));

                pages[this.state.page - 1] = isDone;
                isDone ? counter++ : counter--;
            }
        }.bind(this));

        this.setState(Object.assign({}, this.state,
            {
                collection: collection,
                model: model,
                pages: pages,
                counter: counter,
            })
        );


    },
    handlerOnPageChanged: function (page) {
        this.setState(
            Object.assign(this.state, this.state.model, {
                model: this.state.collection.models[page - 1],
                page: page,
            })
        );

        return true;
    },
    render: function () {
        let isDone = (this.state.counter == this.state.collection.models.length);
        return (
            <content>
                <div className="square row">
                    <h3 className="col-xs-10">{this.state.collection.name}</h3>
                    <div className="col-xs-2 circle"
                         style={{visible: ( isDone ? 'visible' : 'hidden')}}>
                        <span>Завершить</span>
                    </div>
                </div>

                <Model data={this.state.model}
                       mode="widget"
                       smallProts={true}
                       onChange={this.handlerOnModelChanged}
                />

                <Paginator page={this.state.page}
                           maxPage={this.state.collection.models.length}
                           onChange={this.handlerOnPageChanged}
                />
            </content>
        );
    }
});