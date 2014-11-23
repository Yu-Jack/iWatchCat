var All = React.createClass({
    render: function(){
        var _self = this;
        var image = this.props.url.map(function(m,index){
            var divStyle = {
                background: 'url(' + m +') center center no-repeat',
                backgroundSize: 'cover'
            };
            var divClass = "col-md-4 col-xs-12 image";

            return <a key = { index } className = {divClass} style = {divStyle} href = { m }></a>
        });
        return ( <div className="row">{image}</div>);
    }
});
