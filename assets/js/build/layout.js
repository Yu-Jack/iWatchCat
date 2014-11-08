var All = React.createClass({displayName: 'All',
    handleClick: function(event,reactid){
        var $currentImg = $(this.getDOMNode()).find('.image[data-reactid="' + reactid + '"]');

        $('#galler-colorbox').find('img').attr('src', $currentImg.attr('href'));

        $.colorbox({
            html: $('#galler-colorbox').html()
        });
    },
    render: function(){
        var _self = this;
        var image = this.props.url.map(function(m,index){
            var divStyle = {
                background: 'url(' + m +') center center no-repeat',
                backgroundSize: 'cover'
            };
            var divClass = "col-md-4 col-xs-12 image";

            return React.createElement("div", {key: index, onClick:  _self.handleClick, className: divClass, style: divStyle, href: m })
        });
        return ( <div className="row">{image}</div>);
    }
});
