import './intro.scss'
import React from 'react'
import EngineerSVG from '../../assets/images/engineer.js'
import useTypewriter from '../../hooks/useTypeWriter';

const Intro = () => {

  const words = ["Java", "Spring Boot", "React JS", "JavaScript", "HTML & CSS", "Docker", "MongoDB", "Ruby On Rails", "AWS"];
  const text = useTypewriter(words, 150, 50, 1500);

  return (<>
    <div className='textbox'>
      <div className='name'>Yadnyesh</div>
      <div className='description'>
        {"> Has Hands-On experience in " + text}
        <span className="cursor"></span>
      </div>
    </div>
    <div className="icon">
      <EngineerSVG />
    </div>

  </>)
}

export default Intro