import React from 'react';
import img1 from "../../Images/resume-guy-img.png";
import skype from "../../Images/skype.png";
import pin from "../../Images/pinterest.png";
import beh from "../../Images/behance.png";
import dribbble from "../../Images/dribbble.png";

const Resume = () => {
  return (
    <div>
      <div className='resume' id="resume-id">
        <h2>Resume</h2><hr className='resume-hr' />
        <div className='resume-flex'>
          <div className='resume-content'>
            <div className='resume-content-1'>
              <h3><b>Certificate (NPTEL)</b></h3>
              <hr />
              <h6><b>Developing Soft Skills And Personality</b></h6>
              <h6><b>Diploma In Programming (python & java)</b></h6>
              <h6><b>Big Data Computing</b></h6>
              <h6><b>Introduction To Industry 4.0 & Industrial Internet Of Things</b></h6>
            </div>

            <div className='resume-content-1'>
              <h3><b>Education</b></h3>
              <hr />
              <h6><b className='cllgName'>Moradabad Institute Of Technology & Technology </b></h6>
              <h6><b className='cllgName'>Bachelor of Computer Science & Technology 6.7 CGPA</b></h6>
              <h6><b className='cllgName'>2018 - 2022</b>2</h6>
            </div>
            <div className='resume-content-1'>
              <h3><b>Skills</b></h3>
              <hr />
              <h6><b className='cllgName'>HTML </b></h6>
              <h6><b className='cllgName'>CSS</b></h6>
              <h6><b className='cllgName'>Java Script</b></h6>
              <h6><b className='cllgName'>Node</b></h6>
              <h6><b className='cllgName'>MongoDb</b></h6>
              <h6><b className='cllgName'>DSA</b></h6>
            </div>
          </div>
          <div className='resume-right'>
            <div className='resume-guy'>
              <div>
                <img className='resume-guy-pic' src={img1} alt="" />
              </div>
              <div className='platforms'>
                <div><img className='platform-img' src={skype} alt="" /></div>
                <div><img className='platform-img' src={pin} alt="" /></div>
                <div><img className='platform-img' src={dribbble} alt="" /></div>
                <div><img className='platform-img' src={beh} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;

