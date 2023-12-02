import './intro.scss'
import React from 'react'
import EngineerSVG from '../assets/images/engineer.js'

const Intro = () => {
  return (<>

    <div className='intro'>
      <div className='textbox'>
        <div className='name'>Yadnyesh</div>
        <div className='description'>
          A passionate individual, always keen to learn and create a positive impact in surrounding. <span className='profession'>Web-developer</span> by profession.
        </div>
      </div>
      <EngineerSVG />
    </div>
  </>)
}

export default Intro