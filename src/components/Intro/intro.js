import React from 'react'
import './intro.css'
import profile from '../../assets/TestImg.png';
import hireMe from '../../assets/hireMe.png';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello!</span>
            <span className="introText">I'm<span className="introName"> Niharika</span><br/>Software Developer</span>
            <br/>
            <p className="introPara">
            Highly skilled and results-driven computer science professional with a solid foundation in software development and project management. Seeking a challenging role where I can leverage my expertise to contribute to innovative projects, drive efficiency, and deliver impactful solutions.Eager to apply my diverse skill set and collaborative mindset to contribute effectively to dynamic teams and achieve organizational goals.
            </p>
            <br/>
            <button className="hiremebtn">
          <img src={hireMe} alt="HireMe" className="hireMeImg"/>Hire Me</button>
        </div>
        <img src={profile} alt="profile" className="profile" />
    </section>
  )
}

export default Intro;