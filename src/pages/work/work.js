import EnphaseLogo from '../../assets/images/enphase'
import Tata from '../../assets/images/tata'
import Card from '../../components/card'
import './work.scss'
import React from 'react'

const Work = () => {

  const enphaseObj = {
    className: 'enphase',
    icon: <EnphaseLogo />,
    left_title: 'Senior Software Engineer',
    left_subtitle: 'Enphase Solar Energy',
    right_title: 'Aug 2021 - Present',
    right_subtitle: 'Bangalore, India',
    bottom: 'Working as a front end developer, implementing complex features in ReactJS, integrating RESTful APIs, responses from IoT devices via MQTT protocol. Developing adaptive UI components for mobile and web view in application Enphase homeowner app used by 2M+ customers',
  }

  const tataObj = {
    className: 'tata',
    icon: <Tata />,
    left_title: 'Manager',
    left_subtitle: 'Tata Steel Limited',
    right_title: 'Jul 2016 – Apr 2018',
    right_subtitle: 'Kalinganagar, India',
    bottom: 'Led a team of 10 members in a raw materials handling unit of 10,000 tons per day ensuring uninterrupted supply. Managed scheduling of electrical and mechanical maintenance activities without causing delays in supply chain. Trained 10 team members about the overall structure and the functioning of the unit.',
  }


  return (
    <div className='work'>
      <Card {...enphaseObj} />
      <Card {...tataObj} />
    </div>
  )
}

export default Work