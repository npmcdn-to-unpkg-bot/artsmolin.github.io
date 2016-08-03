var HelloWorld = React.createClass({
    render: function() {
            return (
                <p>
                    <a href="https://oauth.vk.com/authorize?client_id=5572694&display=page&redirect_uri=http://artsmolin.github.io&scope=friends&response_type=token&v=5.53">Войти через ВК</a>
                    <h1>Hello {name}</h1>
                </p>
            );
    }
    });

ReactDOM.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
);