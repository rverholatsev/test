import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types'

import Image from '../views/image.js';
import Model from '../views/model';

export default React.createClass({
    propTypes: {
        models: PropTypes.array,
    },
    render: function () {
        return (
            <div className="model-list">
                {this.props.models.map((model, index) => {
                    return (
                        <div className="model-list-item row" key={index}>
                            <Model data={model}
                                   smallProts={true}
                                   mode='view'
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
});