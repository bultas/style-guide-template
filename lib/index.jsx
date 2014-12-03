
var React = require("react");

var Input = require("components/input");



var Index = React.createClass({

	render: function() {
		return (
			<div>
				<Input />
			</div>
		);
	}

});

React.render(
    <Index />,
    document.getElementById("app")
);