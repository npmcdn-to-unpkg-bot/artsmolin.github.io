var HelloWorld = React.createClass({
    render: function() {
        if (name != null){
            return (
                <p><h1>Hello {name}</h1></p>
            );
        }
        if (name == null) {
            return (
                <p><a href="https://oauth.vk.com/authorize?client_id=5572694&display=page&redirect_uri=http://artsmolin.github.io&scope=friends&response_type=token&v=5.53">Войти через ВК</a></p>
            ); 
        }
    }
    });

ReactDOM.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
);