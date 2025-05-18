import React from 'react'
import EnphaseLogo from '../../assets/images/enphase'
import Tata from '../../assets/images/tata'
import IITB from "../../assets/images/iitb";
import IITBHU from "../../assets/images/iitbhu"
import './workEducation.scss'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const WorkEducation = () => {

  const params = new URLSearchParams(window.location.search);
  const layout = params.get('layout');

  return (
    <VerticalTimeline
      layout={layout === '1' ? "1-column-left" : "2-columns"} >
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
          <li>Currently working as a full stack developer, primarily focusing on backend engineering</li>
          <li>Added a logging feature that improved productivity and reduced debugging time by 80%</li>
          <li>Optimized app launch time by 30% by reducing redundant API calls and rearchitecting the initialization workflow</li>
          <li>Led the setup of 10 microservices in new <i>dev</i> and <i>integration</i> environments for development and QA testing, saving up to 2 hours of development time per developer</li>
          <li>Reduced p95 latency of an API used to fetch bulk user notification preferences by 66%, improving asynchronous Resque jobs by approximately 90 seconds</li>
          <li>Developed adaptive UI components for mobile and web views in the <a href="https://apps.apple.com/us/app/enphase-enlighten/id787415770?platform=iphone">Enphase Homeowner App</a>, used by over 2 million customers</li>
          <li>Implemented an end-to-end local connectivity feature for IoT devices in the Enphase app, reducing customer complaints by 90%</li>
          <li>Added a solar production forecasting feature with intuitive, easy-to-understand graphical presentation using the React-Vis library</li>
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