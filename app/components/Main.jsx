var React = require('react');
var About = require('About');
var Footer = require('Footer');
var Header = require('Header');
var Resume = require('Resume');
var resumeData = require('json!public/resumeData.json');

var Main = React.createClass({
  getInitialState: function() {
   return {
     foo: 'foo',
     resumeData: {}
   }
 },

  getResumeData: function(){
    $.ajax({
      url:'http://localhost:3000/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  },

  componentDidMount: function(){
    this.getResumeData();
  },

  render:function() {
    return(
      <div>
        <Header data = {this.state.resumeData.main}/>
        <About data = {this.state.resumeData.main}/>
        <Resume data = {this.state.resumeData.main}/>
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
