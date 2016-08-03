var HelloWorld = React.createClass({
    render: function() {
        return (
            <p>
              <a href="https://oauth.vk.com/authorize?client_id=5572694&display=page&redirect_uri=http://artsmolin.github.io&scope=friends&response_type=token&v=5.53">Войти через ВК</a>
              Hello, <input type="text" placeholder="Your name here" />!
              It is {this.props.date.toTimeString() + name}
            </p>
          );
        }
    });

ReactDOM.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
);