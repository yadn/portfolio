import React from "react";
import Card from "../../components/card";
import IITB from "../../assets/images/iitb";
import IITBHU from "../../assets/images/iitbhu.png"


const Education = () => {
  const iitbObj = {
    className: 'iitb',
    icon: <IITB />,
    left_title: 'Indian Institute of Technology, Bombay',
    left_subtitle: 'M.Tech in Computer Science',
    right_title: 'Aug 2021 - Present',
    right_subtitle: 'Bangalore, India',
    bottom: 'Working as a front end developer, implementing complex features in ReactJS, integrating RESTful APIs, responses from IoT devices via MQTT protocol. Developing adaptive UI components for mobile and web view in application Enphase homeowner app used by 2M+ customers',
  }

  const iitbhuObj = {
    className: 'iitbhu',
    icon: <img  src={IITBHU}/>,
    left_title: 'Indian Institute of Technology (BHU) Varanasi',
    left_subtitle: 'B.Tech in Metallurgical Engineering',
    right_title: 'Jul 2016 – Apr 2018',
    right_subtitle: 'Kalinganagar, India',
    bottom: 'Led a team of 10 members in a raw materials handling unit of 10,000 tons per day ensuring uninterrupted supply. Managed scheduling of electrical and mechanical maintenance activities without causing delays in supply chain. Trained 10 team members about the overall structure and the functioning of the unit.',
  }


  return (
    <div className='work'>
      <Card {...iitbObj} />
      <Card {...iitbhuObj} />
    </div>
  )
}

export default Education;