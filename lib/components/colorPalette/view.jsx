
var React = require('react');
var joinClasses = require("react/lib/joinClasses");

var css = require("assets/css/components/colorPalette.styl");



var ColorPalette = React.createClass({

    render: function() {
        return (
            <div className="color-palette">
            	<div className="color-palette__color color-palette__color--1" />
            	<div className="color-palette__color color-palette__color--2" />
            	<div className="color-palette__color color-palette__color--3" />
            	<div className="color-palette__color color-palette__color--4" />
            	<div className="color-palette__color color-palette__color--5" />
            </div>
        );
    }

});

module.exports = ColorPalette;