
var React = require('react');
var joinClasses = require("react/lib/joinClasses");

var css = require("assets/css/containers/section.styl");



var Section = React.createClass({

    render: function() {
        return (
            <div className={joinClasses("section", this.props.className)}>
                {this.props.children}
            </div>
        );
    }

});

module.exports = Section;