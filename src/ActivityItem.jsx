import React, {useState} from "react";

import ActivityDetails from "./ActivityDetails.jsx";

import callIconPicker from "../functions/iconPicker";
import activityTime from "../functions/activityTimeFormat";

import "./css/ActivityItem.css"

const ActivityItem = ({ activity }) => {
  const [activityDetails, setActivityDetails] = useState(false)
  const toggleDetails = () => {
    setActivityDetails(prevState => !prevState)
  }
  return (
    <div className="activity-item">
      <div className="row">
      <span className="icon">
        {callIconPicker(activity.direction, activity.call_type)}
      </span>
      <span className="number">
        {activity.direction === "inbound" ? `Call from: ${activity.from}` : `Call to: ${activity.to}`}
      </span>
      <span className="time">
        {activityTime(activity.created_at)}
      </span>
      <button onClick={toggleDetails}>
        <img src="public/assets/3-dots.svg" height="16px" alt="" />  
      </button>
    </div>
      {activityDetails && <ActivityDetails activity={activity} />}
    </div>
  );
};

export default ActivityItem;