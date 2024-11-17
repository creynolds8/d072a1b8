const dateFormat = (timestamp) => {
  let dateString = "";
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(timestamp);
  const weekday = days[(date.getDay() - 1)];
  const day = date.getDate();
  const month = months[(date.getMonth() - 1)];
  const year = date.getFullYear();
  dateString = `${weekday}. ${month}. ${day}, ${year}`;
  return dateString;
}

export default dateFormat;