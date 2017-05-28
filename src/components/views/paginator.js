import React from 'react';
import PropTypes from 'prop-types';

export default React.createClass({
    propTypes: {
        page: PropTypes.number.isRequired,
        maxPage: PropTypes.number.isRequired,
        pageCount: PropTypes.number,
        onChange: PropTypes.func
    },
    getDefaultProps: function () {
        return {
            pageCount: 5
        };
    },
    getInitialState: function () {
        return this.calcStateByPage(this.props.page);
    },
    calcStateByPage: function (page) {
        let isBegin, isEnd,
            startPage, endPage;
        page = (page > this.props.maxPage ? 1 : page);


        if (this.props.maxPage < this.props.pageCount) {
            // всего от 1 до 5 страниц
            isBegin = isEnd = true;

            startPage = 1;
            endPage = this.props.maxPage;
        } else if (page <= (Math.floor(this.props.pageCount / 2) + 1)) {
            // страниц больше пяти, текущая от 1 до 3
            isBegin = true;
            isEnd = false;

            startPage = 1;
            endPage = this.props.pageCount;
        } else if (page >= this.props.maxPage - Math.floor(this.props.pageCount / 2)) {
            // страниц больше 5,текущая находится в конце
            isBegin = false;
            isEnd = true;

            startPage = this.props.maxPage - (this.props.pageCount - 1);
            endPage = this.props.maxPage;
        } else {
            // текущая страница посередине, страниц больше пяти
            isBegin = isEnd = false;
            startPage = page - Math.floor(this.props.pageCount / 2);
            endPage = page + Math.floor(this.props.pageCount / 2);
        }

        return {
            page: page,
            isBegin: isBegin,
            isEnd: isEnd,
            startPage: startPage,
            endPage: endPage,
        };
    },
    handlerOnClick: function (nextPage) {
        if (this.props.onChange && !this.props.onChange(nextPage)) {
            return;
        }

        this.setState(this.calcStateByPage(nextPage));
    },
    renderPages: function () {
        let pages = [], self = this;
        for (let i = this.state.startPage; i <= this.state.endPage; i++) {
            pages.push(
                <div className={"circle paginator__page " + (i == this.state.page ? "circle--select" : "")}
                     key={i}
                     onClick={function () {
                         self.handlerOnClick(i);
                     }}
                >
                    <span>{i}</span>
                </div>
            );
        }
        return pages;
    },
    render: function () {
        let self = this;

        return (
            <div className="paginator row">

                <div className="circle paginator__page"
                     style={ {visibility: (this.state.isBegin ? "hidden" : "visible")} }
                     onClick={function () {
                         self.handlerOnClick(1);
                     }}
                >
                    <span>В начало</span>
                </div>

                {this.renderPages()}

                <div className="circle paginator__page"
                     style={ {visibility: (this.state.isEnd ? "hidden" : "visible")} }
                     onClick={function () {
                         self.handlerOnClick(self.props.maxPage);
                     }}
                >
                    <span>В конец</span>
                </div>

            </div>
        );
    }
});