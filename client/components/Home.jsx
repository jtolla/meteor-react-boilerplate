// App component - represents the whole app
Home = React.createClass({ 
  render() {
    return (
      <div className="container">
        <header>
          <div className="header-left pull-left">
            <h2>Meteor-React Boilerplate</h2>
          </div>
          <div className="header-right pull-left">
            <a href={'#'}>link</a>
            <a href={'#'}>link</a>
            <a href={'#'}>link</a>
          </div>
        </header>  
      </div>
    );
  }
});