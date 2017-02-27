var React = require('react');

var Footer = React.createClass({
  render:function(){
    return (
      <footer>

         <div className="row">

            <div className="twelve columns">

               <ul className="copyright">
                  <li>Done by Victor Yap 2017</li>
                  <li>Idea & Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>  
               </ul>

            </div>

            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

         </div>

      </footer>
    );
  }
});

module.exports = Footer;
