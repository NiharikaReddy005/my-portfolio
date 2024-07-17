import React from 'react'
import './intro.css'
import profile from '../../assets/Profile.jpg';
import hireMe from '../../assets/Hire.png';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello!</span>
            <span className="introText">I'm<span className="introName"> Niharika</span><br/>Software Developer</span>
            <p className="introPara">
            Highly skilled and results-driven computer science professional with a solid foundation in software development and project management.
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