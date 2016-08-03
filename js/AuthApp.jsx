var HelloWorld = React.createClass({
    render: function() {
        return (
            <p>
              Hello, <input type="text" placeholder="Your nameы here" />!
              It is {this.props.date.toTimeString() + name}
            </p>
          );
        }
    });

ReactDOM.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
);