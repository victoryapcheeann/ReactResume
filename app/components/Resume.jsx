var React = require('react');

var Resume = React.createClass({
  render:function(){
      if(this.props.data){
        var education = this.props.data.education.map(function(education){
          return (
            <div key={education.school} className="row item">
               <div className="twelve columns">
                  <h3>{education.school}</h3>
                  <p className="info">{education.degree} <span>&bull;</span> <em className="date">{education.graduated}</em></p>
                  <p>
                    {education.description}
                  </p>
               </div>
            </div>
          );
        });

        var work = this.props.data.work.map(function(work){
          return (
            <div key={work.company} className="row item">
               <div className="twelve columns">
                  <h3>{work.company}</h3>
                  <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                  <p>
                  {work.description}
                  </p>
               </div>
            </div>
          );
        });

        var skills = this.props.data.skills.map(function(skills){
          return (
            <li className="box-up">{skills.name}</li>
          );
        });
      }

      return (
        <section id="resume">
        <div className="row education">
           <div className="three columns header-col">
              <h1><span>Education</span></h1>
           </div>

           <div className="nine columns main-col">
              {education}
           </div>
        </div>

        <div className="row work">
           <div className="three columns header-col">
              <h1><span>Work</span></h1>
           </div>

           <div className="nine columns main-col">
            {work}
           </div>
        </div>

        <div className="row skill">
           <div className="three columns header-col">
              <h1><span>Skills</span></h1>
           </div>
           <div className="nine columns main-col">
            {skills}
  			  </div>
        </div>
     </section>
    );
  }
});

module.exports = Resume;
