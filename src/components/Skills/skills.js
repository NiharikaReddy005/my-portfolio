import React from 'react'
import './skills.css';
import UIDesign from '../../assets/UiDesign.png';
import AppDesign from '../../assets/AppDesign.png';
import WebDesign from '../../assets/WebDesign.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
            Iam a front-end engineer that develops visual components of websites and web applications, ensuring they are interactive and responsive.I use languages like HTML, CSS, Javascript, Angular and React to create seamless user experiences.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Iam a UI designer that creates visually appealing and user-friendly interfaces for websites.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Iam an app designer that creates intuitive and attractive interfaces for mobile applications.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Iam a web designer that creates user-friendly websites, focusing on layout, design.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills