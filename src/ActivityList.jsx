import React from "react";
import ActivityItem from "./ActivityItem.jsx";

const ActivityList = ({ activities }) => {

  const activityComponents = activities.map((activity) => {
    return (
      <ActivityItem key={activity.id} activity={activity} />
    )
  });

  return (
    <div className="activity-list">
      {activityComponents}
    </div>
  );
};

export default ActivityList;