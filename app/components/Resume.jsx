var React = require('react');

var Resume = React.createClass({
  render:function(){
    return (
      <section id="resume">

           <div className="row education">

              <div className="three columns header-col">
                 <h1><span>Education</span></h1>
              </div>

              <div className="nine columns main-col">
              </div>

           </div>

           <div className="row work">

              <div className="three columns header-col">
                 <h1><span>Work</span></h1>
              </div>

              <div className="nine columns main-col">

                 <div className="row item">

                    <div className="twelve columns">

                       <h3>Awesome Design Studio</h3>
                       <p className="info">Senior UX Designer <span>&bull;</span> <em className="date">March 2010 - Present</em></p>

                       <p>
                       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                       Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                       ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                       Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                       </p>

                    </div>

                 </div>

                 <div className="row item">

                    <div className="twelve columns">

                       <h3>Super Cool Studio</h3>
                       <p className="info">UX Designer <span>&bull;</span> <em className="date">March 2007 - February 2010</em></p>

                       <p>
                       This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                       Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                       nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                       ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                       </p>

                    </div>

                 </div>

              </div>

           </div>

           <div className="row skill">

              <div className="three columns header-col">
                 <h1><span>Skills</span></h1>
              </div>

              <div className="nine columns main-col">

                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                 eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                 voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                 voluptatem sequi nesciunt.
                 </p>
     			   </div>
           </div>

           <div className="row skill">
              <div className="three columns header-col">
                 <h1><span>Interest</span></h1>
              </div>

              <div className="nine columns main-col">

                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                 eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                 voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                 voluptatem sequi nesciunt.
                 </p>
     			   </div>
           </div>

           <div className="row skill">
              <div className="three columns header-col">
                 <h1><span>Projects</span></h1>
              </div>

              <div className="nine columns main-col">

                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                 eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                 voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                 voluptatem sequi nesciunt.
                 </p>
              </div>
           </div>

           <div className="row skill">
              <div className="three columns header-col">
                 <h1><span>Future Projects</span></h1>
              </div>

              <div className="nine columns main-col">

                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                 eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                 voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                 voluptatem sequi nesciunt.
                 </p>
              </div>
           </div>



        </section>
    );
  }
});

module.exports = Resume;
