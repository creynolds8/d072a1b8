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
      <h2>Activity List</h2>
      {activityComponents}
    </div>
  );
};

export default ActivityList;