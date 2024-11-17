import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Header from './Header.jsx';
import ActivityList from './ActivityList.jsx';

const App = () => {
const [activities, setActivities] = useState([]);

useEffect(() => {
  axios.get("https://aircall-api.onrender.com/activities")
  .then(res => setActivities(res.data))
  .catch(err => console.error("Error fetching activities", err))
}, []);

  return (
    <div className='container'>
      <Header/>
      {/* <div className="container-view">Some activities should be here</div> */}
      <ActivityList activities={activities} />
    </div>
  );
};



ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
