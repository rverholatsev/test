import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types'

import Image from '../views/image.js';

export default React.createClass({
    propTypes: {
        data: PropTypes.object.isRequired,
        smallProts: PropTypes.bool,
        mode: PropTypes.oneOf(['view', 'widget']),
        onClick: PropTypes.func,
    },
    defaultProps: {
        smallProts: false,
        mode: 'view',
    },
    getInitialState: function () {
        let protsCounts = [], counter = 0;

        this.props.data.prototypes.map(prot => {
            protsCounts[prot.id] = prot.count;
            if(prot.count !== -1){
                counter++;
            }
        });

        return {
            protsCounts: protsCounts,
            // for widget:
            counter: counter,
            prevProtID: null,
        };
    },
    handlerOnclick: function (protID) {
        let protsCounts = this.state.protsCounts,
            prevProtID = this.state.prevProtID,
            counter = this.state.counter;

        if (protsCounts[protID] == counter) {
            counter--;
            protsCounts[protID] = -1;
            prevProtID = null;
        } else if (protsCounts[protID] == -1) {
            counter++;
            protsCounts[protID] = counter;
            prevProtID = protID;
        }

        this.setState(() => {
            return {
                protsCounts: protsCounts,
                counter: counter,
                prevProtID: prevProtID,
            };
        });
    },
    renderPrototypes: function (numOfProtsInRow) {
        let prots = this.props.data.prototypes;
        let rows = [];
        let self = this;

        prots.map(function (_, i) {
            if (i % numOfProtsInRow !== 0) {
                return;
            }

            rows.push(
                <div className="row" key={i / numOfProtsInRow}>
                    {prots.map(function (prot, j) {
                        if (!(j >= i && j < (i + numOfProtsInRow))) {
                            return;
                        }

                        return (<div className={"prototype-list-row col-xs-" + (12 / numOfProtsInRow)} key={j - i}>
                            <div key={prot.id}
                                 className={"prototype-list-item"}
                                 onClick={function () {
                                     if (self.props.mode == 'widget') {
                                         self.handlerOnclick(prot.id);
                                     }
                                 }}>
                                <Image src={prot.src}
                                       name={prot.name}
                                       desc={prot.desc}
                                       index={self.state.protsCounts[prot.id]}
                                       overlapText={true}
                                />
                            </div>
                        </div>);
                    })}
                </div>
            );
        });

        return <div>{rows}</div>;
    },
    render: function () {
        let model = this.props.data;
        let numOfProtsInRow = this.props.smallProts ? 3 : 2;
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
                    {this.renderPrototypes(numOfProtsInRow)}
                </div>
            </div>
        );
    }
});