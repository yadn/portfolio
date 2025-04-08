import './intro.scss'
import React from 'react'
import EngineerSVG from '../../assets/images/engineer.js'
import useTypewriter from '../../hooks/useTypeWriter';

const Intro = () => {

  const words = ["A passionate individual", "Curious and fast learner", "Full Stack Developer", "Collaborative team contributor", "Optimistic and solution-oriented"];
  const text = useTypewriter(words, 150, 50, 1500);

  return (<>
    <div className='textbox'>
      <div className='name'>Yadnyesh</div>
      <div className='description'>
        {"> " + text}
        <span className="cursor"></span>
      </div>
    </div>
    <div className="icon">
      <EngineerSVG />
    </div>

  </>)
}

export default Intro