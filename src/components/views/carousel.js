import React from 'react';
import Measure from 'react-measure';
import PropTypes from 'prop-types';

import Image from './image.js';

export default React.createClass({
    propTypes: {
        items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
        width: PropTypes.number,
        height: PropTypes.number
    },
    getInitialState: function () {
        return {
            offset: 0,
            maxOffset: 0,
            carouselDimensions: {
                width: 0,
                height: 0
            },
            imagesDimensions: [],
        };
    },
    handleCarouselOnMeasure: function (carouselDimensions) {
        var maxOffset = this.calcMaxOffset(carouselDimensions, this.state.imagesDimensions);
        var offset = this.calcOffset(this.state.offset, maxOffset);

        this.setState(Object.assign({}, this.state, {
            offset: offset,
            maxOffset: maxOffset,
            carouselDimensions: {
                width: carouselDimensions.width,
                height: carouselDimensions.height,
            }
        }));
    },
    handleImagesOnMeasure: function (item, imageDimensions) {
        var imagesDimensions = this.state.imagesDimensions;

        imagesDimensions[item.id] = {
            width: imageDimensions.width,
            height: imageDimensions.height,
        };

        var maxOffset = this.calcMaxOffset(this.state.carouselDimensions, imagesDimensions),
            offset = this.calcOffset(this.state.offset, maxOffset);

        this.setState(Object.assign({}, this.state, {
            offset: offset,
            maxOffset: maxOffset,
            imagesDimensions: imagesDimensions
        }));
    },
    calcMaxOffset: function (carouselDimensions, imagesDimensions) {
        var carouselWidth = carouselDimensions.width,
            imagesWidth = 0;

        imagesDimensions.forEach(function (image) {
            imagesWidth += image.width;
        });

        if (carouselWidth >= imagesWidth) {
            return 0;
        } else {
            return -(imagesWidth - carouselWidth);
        }
    },
    calcOffset: function (offset, maxOffset) {
        if (offset > 0) {
            return 0;
        } else if (offset < maxOffset) {
            return maxOffset;
        } else {
            return offset;
        }
    },
    calcStepOffset: function (isLeft, offset, maxOffset, carouselDimensions, imagesDimensions) {
        if (isLeft && offset == 0 || !isLeft && offset == maxOffset) {
            return 0;
        }

        var isNeedBreak = false;

        var stepOffset = 0,
            prevImageWidth = 0,
            curOffset = 0;

        imagesDimensions.forEach(function (image) {
            if (isNeedBreak) {
                return;
            }

            if (isLeft && (curOffset - image.width) <= offset) {
                stepOffset = curOffset - offset;
                isNeedBreak = true;
            } else if (!isLeft && (curOffset - image.width) < (offset - carouselDimensions.width)) {
                stepOffset = (curOffset - image.width) - (offset - carouselDimensions.width);
                isNeedBreak = true;
            }

            curOffset -= image.width;
            prevImageWidth = image.width;
        });

        return stepOffset;
    },
    handleLeftArrowOnClick: function () {
        var stepOffset = this.calcStepOffset(true, this.state.offset, this.state.maxOffset, this.state.carouselDimensions, this.state.imagesDimensions),
            offset = this.calcOffset(this.state.offset + stepOffset, this.state.maxOffset);

        this.setState(Object.assign({}, this.state, {
            offset: offset
        }));

    },
    handleRightArrowOnClick: function () {
        var stepOffset = this.calcStepOffset(false, this.state.offset, this.state.maxOffset, this.state.carouselDimensions, this.state.imagesDimensions),
            offset = this.calcOffset(this.state.offset + stepOffset, this.state.maxOffset);

        this.setState(Object.assign({}, this.state, {
            offset: offset
        }));

    },
    render: function () {
        var self = this;

        var style = {};
        if (this.props.width) {
            style['width'] = this.props.width;
        }
        if (this.props.height) {
            style['height'] = this.props.height;
        }

        return (
            <Measure onMeasure={this.handleCarouselOnMeasure}>
                <div className="carousel" style={ style }>
                    <div className="arrow arrow--left"
                         onClick={this.handleLeftArrowOnClick}>
                        <img src="images/left.svg"/>
                    </div>

                    <div className="images"
                         style={ {left: this.state.offset} }>
                        {this.props.items.map(function (item) {
                            return (
                                <Measure key={item.id}
                                         onMeasure={
                                             function (dimensions) {
                                                 self.handleImagesOnMeasure(item, dimensions);
                                             }
                                         }>
                                    <Image key={item.id}
                                           src={item.src}
                                           height={(self.props.height ? self.props.height : null)}
                                           index={null}
                                           name={item.name}
                                           desc={item.desc}
                                           overlapText={true}
                                    />
                                </Measure>

                            );
                        })}
                    </div>

                    <div className="arrow arrow--right"
                         onClick={this.handleRightArrowOnClick}>
                        <img src="images/right.svg"/>
                    </div>
                </div>
            </Measure>
        );
    }
});