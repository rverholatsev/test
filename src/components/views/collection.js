import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

import ModelsList from '../views/models-list';

export default React.createClass({
    propTypes: {
        collection: PropTypes.array,
    },
    render: function () {

        let collection = this.props.collection;
        return (
            <div className="col-xs-12">
                <div className="col-xs-12">
                    <div className="square row">
                        <div className="col-xs-10">
                            <div className="col-xs-12 name-box">
                                {collection.name}
                            </div>
                            <div className="desc-box col-xs-12">
                                {collection.desc}
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <Link className="circle start-link" to={'/' + collection.id}>
                                <img src="images/start.svg"/>
                            </Link>

                        </div>
                        <div className="desc-box col-xs-12">
                            <b>Тестирований пройденно: {collection.count} </b>
                        </div>
                    </div>
                </div>
                <ModelsList models={collection.models}/>
            </div>

        );
    }
});