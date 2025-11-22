import React from 'react';
import './intro.css';
import bg from '../../assets/intro-bg.png';
import hireMe from '../../assets/hireme.png';
import Resume from '../../assets/resume.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Mihiranga</span> <br /> Software Developer </span>
            <p className="introPara">I am a skilled web developer with experience in creating <br />visually appealing and user-friendly websites.</p>
            <Link>
            <div className='introButtons'>
            <button className="btn">
                <img src= {hireMe} alt="Hire Me" className='hireMe' />
                Hire Me
            </button>
            <button className="cvbtn">
                <img src= {Resume} alt="resume" className='resume' />
                Resume
            </button>
            </div>
            </Link>
        </div>
        <img src= {bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro;