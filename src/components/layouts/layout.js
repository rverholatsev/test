import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
    render: function () {
        return (
            <div className="container-fluid
                cols-xs-12
                col-sm-offset-1 col-sm-10
                col-md-offset-2 col-md-8
                col-lg-offset-3 col-lg-6"
            >
                <nav className="navbar">
                    <div className="nav-header">
                        <div className="navbar-brand">
                            Collections Test
                        </div>
                    </div>
                </nav>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
});