var React = require('react');
var About = require('About');
var Footer = require('Footer');
var Header = require('Header');
var Resume = require('Resume');
var resumeData = require('json!public/resumeData.json');

var Main = React.createClass({
  getInitialState: function() {
   return {
     resumeData: resumeData
   }
 },

  componentDidMount: function(){
    this.getResumeData();
  },

  render:function() {
    return(
      <div>
        <Header data = {this.state.resumeData.main}/>
        <About data = {this.state.resumeData.main}/>
        <Resume data = {this.state.resumeData.resume}/>
        <Footer/>
      </div>
    );
  }
})

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
