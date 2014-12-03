
var React = require('react');
var joinClasses = require("react/lib/joinClasses");

var css = require("assets/css/containers/container.styl");



var container = React.createClass({

    render: function() {
        return (
            <div className={joinClasses("container", this.props.className)}>
                {this.props.children}
            </div>
        );
    }

});

module.exports = container;