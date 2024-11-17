const activityTime = (timestamp) => {
  const date = new Date(timestamp)
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let activityTimeString = "";
  if (hours > 12) {
    activityTimeString += `${hours - 12}`
  } else {
    activityTimeString += `${hours}`
  }
  if (minutes > 10) {
    activityTimeString += `:${minutes}`
  } else {
    activityTimeString += `:0${minutes}`
  }
  if (hours > 12) {
    activityTimeString += "pm"
  } else {
    activityTimeString += "am"
  }
  return activityTimeString
};

export default activityTime;