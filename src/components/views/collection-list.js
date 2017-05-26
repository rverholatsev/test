import React from 'react';
import {Link} from 'react-router';

import Image from '../views/image.js';
import Carousel from '../views/carousel.js';

export default React.createClass({
    render: function () {
        return (
            <div className="collection-list col-xs-12">
                {this.props.collections.map(collection => {

                    return (
                        <div key={collection.id} className="collection-list-item square row">
                            <div className="col-xs-10">
                                <div className="col-xs-12">
                                    <Link className="name-box"
                                          to={'/collections/' + collection.id}>
                                        {collection.name}
                                    </Link>
                                </div>
                                <div className="desc-box col-xs-12">
                                    {collection.desc}
                                </div>
                            </div>
                            <div className="col-xs-2">
                                <Link className="circle start-link" to={'/' + collection.id}>
                                    <img className=""
                                         src="images/start.svg"
                                         width={45} height={45}/>
                                </Link>
                                <Link className="circle" to={'/' + collection.id}>
                                    <img src="images/analytics.svg"
                                         width={45} height={45}/>
                                </Link>

                            </div>
                            <div className="col-xs-12">
                                <Carousel height={300} items={collection.models}/>
                            </div>
                        </div>
                    );

                })}
            </div>
        );
    }
});