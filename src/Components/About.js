import React from 'react';

import Nav from './Nav';

function About() {
  return (
    <div >
    <Nav/>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258359.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258355.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://imgscf.slidemembers.com/docs/1/1/259/shopping_slide_ppt_258349.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl-Y4r3KchDuge9VCDl7hAhEBHenau8XpAfb0ou2PrHwJUDFec7m7xF1ZHfhkS00gZnU&usqp=CAU" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
   </div>
  );
}

export default About;

