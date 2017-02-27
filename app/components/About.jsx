var React = require('react');

var About = React.createClass({
  render:function(){
    if(this.props.data) {
        var name = this.props.data.name;
        var bio = this.props.data.bio;
        var street = this.props.data.address.street;
        var city = this.props.data.address.city;
        var phone = this.props.data.phone;
        var email = this.props.data.email;
        var resumedownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">

            <div className="row">
               <div className="nine columns main-col col-margin-left">

                  <h2>About Me</h2>

                  <p>{bio}</p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Contact Details</h2>
                        <p className="address">
      						   <span>{name}</span><br />
      						   <span>{street}<br />
      						         {city}
                         </span><br />
                       <span>{phone}</span><br />
                           <span>{email}</span>
      					   </p>

                     </div>

                     <div className="columns download">
                        <p>
                           <a href={resumedownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>

                  </div>

               </div>

            </div>

         </section>
    );
  }
});

module.exports = About
