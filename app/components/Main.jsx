var React = require('react');
var About = require('About');
var Contact = require('Contact');
var Footer = require('Footer');
var Header = require('Header');
var Portfolio = require('Portfolio');
var Resume = require('Resume');
var Testimonials = require('Testimonials');

var Main = (props) => {
  return(
    <div>
      <Header/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

module.exports = Main;

// var Main = React.createClass({
//   render: function() {
//       return(
//         <div>
//           <Nav/>
//           <h2>Main Component</h2>
//           {this.props.children}
//         </div>
//     );
//   }
// });
