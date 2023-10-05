import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';

function Experience() {
  return (
    <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement className="vertical-timeline-element--education" 
            date="2015 - 2019"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />} 
            >
                <h3 className="vertical-timeline-element-title">
                    Winthrop University, Rock Hill, South Carolina
                    </h3>
                    <p> Bachelor of Fine Arts, Painting</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" 
            date="2015 - 2019"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />} 
            >
                <h3 className="vertical-timeline-element-title">
                    Winthrop University, Rock Hill, South Carolina
                    </h3>
                    <p> Bachelor of Fine Arts, Painting</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" 
            date="2015 - 2019"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />} 
            >
                <h3 className="vertical-timeline-element-title">
                    Winthrop University, Rock Hill, South Carolina
                    </h3>
                    <p> Bachelor of Fine Arts, Painting</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" 
            date="2015 - 2019"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />} 
            >
                <h3 className="vertical-timeline-element-title">
                    Winthrop University, Rock Hill, South Carolina
                    </h3>
                    <p> Bachelor of Fine Arts, Painting</p>
            </VerticalTimelineElement>
        </VerticalTimeline></div>
  )
}

export default Experience