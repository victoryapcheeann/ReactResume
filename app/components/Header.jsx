var React = require('react');

var Header = React.createClass({
  render:function(){
    if(this.props.data) {
        var name = this.props.data.name;
        var occupation = this.props.data.occupation;
        var description = this.props.data.description;
        var city = this.props.data.address.city;
        var network = this.props.data.social.map(function(network){
            return <li key = {network.name}><a href={network.url}><i className={network.className}></i></a></li>
        });
    }

    return (
      <header id="home">

         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
   	      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
   	           <li><a className="smoothscroll" href="#resume">Resume</a></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {name}</h1>
               <h3>I am {city} based {occupation} {description} </h3>
               <hr />
               <ul className="social">
                {network}
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
    );
  }
});

module.exports = Header;
