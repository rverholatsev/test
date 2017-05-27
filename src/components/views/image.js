import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router';

export default React.createClass({
    propTypes: {
        index: PropTypes.number,

        src: PropTypes.string.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,

        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,

        overlapText: PropTypes.bool.isRequired
    },
    defaultProps: {
        index: undefined,
        overlapText: true,

    },
    getInitialState: function () {
        return {
            isActive: false,
            isHover: false,
        }
    },
    renderIndex: function () {
        if (this.props.index !== null) {
            return (
                <div className={"index " + (this.state.isActive ? "index--active" : "")}>
                    {(this.props.index >=0 ? this.props.index : '')}
                </div>
            );
        }
    },
    renderImage: function () {
        if (this.props.width && !this.props.height) {
            return <img src={this.props.src}
                        width={this.props.width}
            />;
        }
        else if (!this.props.width && this.props.height) {
            return <img src={this.props.src}
                        height={this.props.height}
            />;
        }
        else if (this.props.width && this.props.height) {
            return <img src={this.props.src}
                        width={this.props.width}
                        height={this.props.height}
            />;
        }
        else {
            return <img className="img--expanding-width"
                        src={this.props.src}
                        width={this.props.width}
                        height={this.props.height}
            />;
        }
    },
    renderText: function () {
        if (this.props.name || this.props.desc) {
            if (this.props.overlapText === true) {
                return (
                    <div
                        className={'text-box text-box--overlap ' + (this.state.isHover ? "text-box--overlap--hover" : "")}>
                        <div className="name">{this.props.name}</div>
                        <div className="desc">{this.props.desc}</div>
                    </div>
                );
            } else {
                return (
                    <div className="text-box">
                        <div className="name">{this.props.name}</div>
                        <div className="desc">{this.props.desc}</div>
                    </div>
                );
            }
        }
    },
    render: function () {
        return (
            <div className="image-box"
                 onMouseDown={this.handlerOnMouseDown}
                 onMouseUp={this.handlerOnMouseUp}
                 onMouseEnter={this.handlerOnMouseEnter}
                 onMouseLeave={this.handlerOnMouseLeave}
            >
                {this.renderIndex()}
                {this.renderImage()}
                {this.renderText()}
            </div>
        );
    },
    handlerOnMouseDown: function () {
        this.setState({
            isActive: true,
            isHover: this.state.isHover
        });
    },
    handlerOnMouseUp: function () {
        this.setState({
            isActive: false,
            isHover: this.state.isHover
        });
    },
    handlerOnMouseEnter: function () {
        this.setState({
            isActive: this.state.isActive,
            isHover: true
        });
    },
    handlerOnMouseLeave: function () {
        this.setState({
            isActive: false,
            isHover: false
        });
    }
});