import React from 'react';
import {Link, browserHistory} from 'react-router';
import PropTypes from 'prop-types';
import Carousel from '../views/carousel';
import ModelsList from '../views/models-list';

export default React.createClass({
    propTypes: {
        collection: PropTypes.object,
    },
    render: function () {
        let collection = this.props.collection;
        return (
            <content>
                <div className="square row">
                    <div className="col-xs-10">
                        <div className="col-xs-12">
                            <h3>{collection.name}</h3>
                        </div>
                        <div className="desc-box col-xs-12">
                            {collection.desc}
                        </div>
                    </div>
                    <div className="col-xs-2">
                        <Link className="circle start-link" to={'/test/' + collection.id}>
                            <img src="images/start.svg"/>
                        </Link>
                    </div>

                    <div className="col-xs-12">
                        <h4 className="col-xs-12">Модели коллекции</h4>
                        <Carousel height={300} items={ this.props.collection.models }/>
                    </div>

                    <div className="desc-box col-xs-12">
                        <h4 className="col-xs-12">Тестирований пройденно: {collection.count} </h4>
                    </div>
                </div>
                <ModelsList models={collection.models}/>
            </content>
        );
    }
});