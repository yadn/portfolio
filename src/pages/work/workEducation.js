import React from 'react'
import EnphaseLogo from '../../assets/images/enphase'
import Tata from '../../assets/images/tata'
import IITB from "../../assets/images/iitb";
import IITBHU from "../../assets/images/iitbhu"
import Card from '../../components/card'
import './workEducation.scss'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const WorkEducation = () => {

  const params = new URLSearchParams(window.location.search);
  const layout = params.get('layout');



  return (
    <VerticalTimeline
      layout={layout == '1' ? "1-column-left" : "2-columns"} >
      <VerticalTimelineElement
        className="vertical-timeline-element-main--enphase"
        date="2021 - Present" >
        <div className="header">
          <div className="text-info">
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangalore, India</h4>
          </div>
          <div className="icon-info--enphase"><EnphaseLogo /></div>
        </div>
        <ul>
          <li>Implemented complex features in ReactJS for the Enphase homeowner app.</li>
          <li>Integrated RESTful APIs and responses from IoT devices via MQTT protocol.</li>
          <li>Developed adaptive UI components for mobile and web views.</li>
          <li>Contributed to an application used by 2M+ customers worldwide.</li>
        </ul>
      </VerticalTimelineElement>
      {/* IITB Timeline Element */}
      <VerticalTimelineElement
        className="vertical-timeline-element-main--iitb"
        date="2019 - 2021">
        <div className="header">
          <div className="text-info">
            <h3 className="vertical-timeline-element-title">Indian Institute of Technology, Bombay</h3>
            <h4 className="vertical-timeline-element-subtitle">M.Tech in Computer Science</h4>
          </div>

          <div className="icon-info--iitb"><IITB /></div>
        </div>
        <ul>
          <li>Teaching Assistant for the course CS101: Computer Programming and Utilization</li>
          <li>Teaching Assistant for the course CS763/764: Computer Vision Theory and Lab, supervised the labs for the course, created and evaluated lab assignments, quizzes and examination papers.</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element-main--tata"
        date="2016 – 2018"
      >
        <div className="header">
          <div className="text-info">
            <h3 className="vertical-timeline-element-title">Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Kalinganagar, India</h4>
          </div>
          <div className="icon-info--tata"><Tata /></div>
        </div>
        <ul>
          <li>Led a team of 10 members in a raw materials handling unit of 10,000 tons per day.</li>
          <li>Ensured uninterrupted supply by managing scheduling of maintenance activities.</li>
          <li>Trained 10 team members on the structure and functioning of the unit.</li>
          <li>Completed Outdoor leadership programme in Himalaya, Uttarkashi by reaching Mudga Top at 11400 ft.</li>
        </ul>
      </VerticalTimelineElement>



      {/* IITBHU Timeline Element */}
      <VerticalTimelineElement
        className="vertical-timeline-element-main--iitbhu"
        date="2012 – 2016"
      >
        <div className="header">
          <div className="text-info">
            <h3 className="vertical-timeline-element-title">Indian Institute of Technology (BHU) Varanasi</h3>
            <h4 className="vertical-timeline-element-subtitle">B.Tech in Metallurgical Engineering</h4>
          </div>
          <div className="icon-info--iitbhu"><IITBHU /></div>
        </div>
        <ul>
          <li>Events Head, Anveshan 2016, Annual Technical festival of Metallurgy department</li>
        </ul>
      </VerticalTimelineElement>
    </VerticalTimeline>


  )
}

export default WorkEducation