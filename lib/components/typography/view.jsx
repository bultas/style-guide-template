
var React = require('react');



var Typography = React.createClass({

    render: function() {
        return (
            <div>
            
                <h1 className="headline">Hello World</h1>
                <h2 className="headline">Hello World</h2>
                <h3 className="headline">Hello World</h3>
                <h4 className="headline">Hello World</h4>
                <h5 className="headline">Hello World</h5>
                <h6 className="headline">Hello World</h6>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie
                laoreet mauris, nec finibus nisl dapibus sit amet. In et magna lorem.
                Pellentesque sed consequat lacus, a suscipit diam. Pellentesque
                porttitor tellus ex, id volutpat dui blandit in.</p>

                <p><a href="#">Link to nowhere</a></p>

                <h2>Pellentesque dictum</h2>

                <p>purus non tortor consectetur vulputate. Mauris pretium, mi ac
                fermentum consectetur, tellus sapien molestie nibh, at ornare nisl <br />
                lectus ut nisl. Aenean vulputate, felis fringilla cursus mollis, justo
                tellus elementum massa, a viverra enim lacus eget risus. Duis
                hendrerit arcu nec suscipit egestas. Aenean convallis dui vitae velit
                porta cursus. Cras urna turpis, porttitor ultrices egestas sed,
                vulputate ut diam. Proin pulvinar et libero sed dapibus. Morbi id
                ornare nibh, nec maximus orci.</p>

            </div>
        );
    },

});

module.exports = Typography;