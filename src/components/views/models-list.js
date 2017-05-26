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
            <div className="model-list col-xs-12">
                {this.props.models.map(model => {
                    return (
                        <div className="row model-list-item">
                            <Model data={model}/>
                        </div>
                    );

                })}
            </div>
        );
    }
});