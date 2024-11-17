import React from "react";

import "./css/ActivityDetails.css"
import activityTime from "../functions/activityTimeFormat";
import dateFormat from "../functions/activityDateFormat";

const ActivityDetails = ({ activity }) => {
  return (
    <div className="row activity-details">
      <div className="col">
        <span>
          Call Details:
        </span>
        <span>
          {dateFormat(activity.created_at)}
        </span>
        <span>
          {activityTime(activity.created_at)}
        </span>
      </div>
      <div className="col">
        <span>
          Call made via Aircall: {activity.via}
        </span>
        <span>
          Call duration: {activity.duration}
        </span>
        <span>
          Status: {activity.call_type}
        </span>
      </div>
    </div>

  );
};

export default ActivityDetails;