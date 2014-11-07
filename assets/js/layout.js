var All = React.createClass({displayName: 'All',
    render: function(){
        var image = this.props.url.map(function(m,index){
            var divStyle = {
                background: 'url(' + m +') center center no-repeat',
                backgroundSize: 'cover'
            };
            var divClass = "col-md-4 col-xs-12";

            return React.createElement("div", {className: divClass, style: divStyle})
        });
        return ( React.createElement("div", {className: "row"}, image));
    }
});
