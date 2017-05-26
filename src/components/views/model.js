import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types'

import Image from '../views/image.js';

export default React.createClass({
    propTypes: {
        data: PropTypes.object,
        smallIcons: PropTypes.bool,
    },
    defaultProps: {
        smallIcons: false
    },
    renderPrototypes: function (numOfItemInRow) {
        let prots = this.props.data.prototypes;
        let divRow = <div className="row prototype-list"/>;

        for (let i = 0; i < prots.length; i += numOfItemInRow) {
            let divCol = <div className={"col-xs-" + (12 / numOfItemInRow)}/>;
            for (let j = prots[i]; j < numOfItemInRow; j++) {
                if (prots[j] !== undefined) {
                    divCol.appendChild(
                        <div key={prots[j].id} className="square prototype-list-item">
                            <Image src={prots[j]}
                                   name={prots[j].name}
                                   desc={prots[j].desc}
                                   index={prots[j].count}
                            />
                        </div>
                    );
                }
            }
            console.log(divCol);
            // divRow.appendChild({divCol});
        }

        return divRow;
    },
    render: function () {
        let model = this.props.data;
        return (
            <div className="square col-xs-12">
                <div className="col-xs-4">
                    <Image src={model.src} overlapText={false}
                           name={model.name}
                           desc={model.desc}
                           index={null}
                    />
                </div>
                <div className="col-xs-8">
                    {this.renderPrototypes(this.props.smallIcons ? 2 : 3)}
                </div>
            </div>
        );
    }
});