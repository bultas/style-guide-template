
var React = require("react");

// Base CSS
var CSS = require("assets/css/base.styl");

// Components
var Section = require("components/section");
var Container = require("components/container");
var Typography = require("components/typography");
var ColorPalette = require("components/colorPalette");
var Input = require("components/input");



var Index = React.createClass({

	render: function() {
		return (
			<div>

				<Section>
					<ColorPalette />
				</Section>

				<Section>
					<Container>
						<Typography />
					</Container>
				</Section>

				<Section className="section--dark">
					<Container>
						<Typography />
					</Container>
				</Section>

				
			</div>
		);
	}

});

React.render(
    <Index />,
    document.getElementById("app")
);