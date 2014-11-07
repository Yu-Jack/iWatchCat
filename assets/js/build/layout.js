var All = React.createClass({
    render: function(){
        var image = this.props.url.map(function(m,index){
            var divStyle = {
                background: 'url(' + m +') center center no-repeat',
                backgroundSize: 'cover'
            };
            var divClass = "col-md-4 col-xs-12";

            return <div className = {divClass} style = {divStyle}></div>
        });
        return ( <div className="row">{image}</div>);
    }
});
