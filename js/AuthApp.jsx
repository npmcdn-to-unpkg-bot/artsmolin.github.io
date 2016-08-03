var TestApp = React.createClass({
    render: function() {
        if(getCookie("name") && getCookie("lastname")){
            return (
                <h1>{cookie_name + " " + cookie_lastname} </h1>
            );
        }
        if (name == undefined || lastname == undefined){
            return (
                <a href="https://oauth.vk.com/authorize?client_id=5572694&display=page&redirect_uri=http://artsmolin.github.io&scope=friends&response_type=token&v=5.53">Войти через ВК</a>
            );
        } 
        if (name != undefined && lastname != undefined){
            return (
                <h1>{name + " " + lastname} </h1>
            );
        }
    }
    });

ReactDOM.render(
    <TestApp />,
    document.getElementById('example')
);
