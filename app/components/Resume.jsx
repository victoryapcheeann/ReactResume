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
                  <p>{education.description}</p>
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
                  <p>{work.description}</p>
                  <ul>
                    <li className = "details-format">{work.workdetail1}</li>
                    <li className = "details-format">{work.workdetail2}</li>
                    <li className = "details-format">{work.workdetail3}</li>
                  </ul>
               </div>
            </div>
          );
        });

        var projects = this.props.data.projects.map(function(projects){
          return (
            <div key={projects.name} className="row item">
               <div className="twelve columns">
                  <h3>{projects.name}</h3>
                  <span className="info"><em className="date">{projects.date}</em></span>
                  <div>{projects.description}</div>
                  <div className = "details-format2 spacing-bottom">{projects.function}</div>
               </div>
            </div>
          );
        });

        var skills = this.props.data.skills.map(function(skills){
          return (
            <li className="box-up box-up-color1">{skills.name}</li>
          );
        });

        var interests = this.props.data.interests.map(function(interests){
          return (
            <li className="box-up box-up-color2">{interests.name}</li>
          );
        });

        var futureprojects = this.props.data.futureprojects.map(function(futureprojects){
          return (
            <li className="box-up box-up-color3">{futureprojects.name}</li>
          );
        });

        var others = this.props.data.others.map(function(others){
          return (
            <div key={others.title} className="row item">
               <div className="twelve columns">
                 <h3>{others.title}</h3>
                  <div>{others.description}</div>
                    <ul>
                      <li className = "details-format">{others.othersdetail1}</li>
                      <li className = "details-format">{others.othersdetail2}</li>
                      <li className = "details-format">{others.othersdetail3}</li>
                    </ul>
               </div>
            </div>
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

        <div className="row projects">
           <div className="three columns header-col">
              <h1><span>Projects</span></h1>
           </div>
           <div className="nine columns main-col">
            {projects}
          </div>
        </div>

        <div className="row skills">
           <div className="three columns header-col">
              <h1 className="box-u-underline-color1">Skills</h1>
           </div>
           <div className="nine columns main-col">
            {skills}
  			  </div>
        </div>

        <div className="row interests">
           <div className="three columns header-col">
              <h1 className="box-u-underline-color2">Interests</h1>
           </div>
           <div className="nine columns main-col">
            {interests}
          </div>
        </div>

        <div className="row futureprojects">
           <div className="three columns header-col">
              <h1 className="box-u-underline-color3">Future Projects</h1>
           </div>
           <div className="nine columns main-col">
            {futureprojects}
          </div>
        </div>

        <div className="row others">
           <div className="three columns header-col">
              <h1><span>Others</span></h1>
           </div>
           <div className="nine columns main-col">
            {others}
          </div>
        </div>
     </section>
    );
  }
});

module.exports = Resume;
