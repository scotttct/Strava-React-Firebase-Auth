import React from 'react';
import { Link } from 'react-router-dom'

import './ActivitiesList.css'


export default function ActivitiesList({activities}) {
    console.log(activities)
    return (
        <div className="activity-list">
        <Link>
            <ul>
                <li>actName</li>
                <li>actDate</li>
                <li>MovingTime</li>
                <li>Distance</li>
            </ul>
            <ul>
                <li>actName</li>
                <li>actDate</li>
                <li>MovingTime</li>
                <li>Distance</li>
            </ul>
        </Link>
          {/* {activities.length === 0 && <p>No activities yet!</p>}
          {activities.map(activity => (
            <Link to={`/activities/${activity.id}`} key={activity.id}>
              <h4>{activity.name}</h4>
              <p>Activity Date: {activity.start_date.toDate().toDateString()}</p>
              <p>Distance: {activity.distances * 0.000621371} mi.</p>
              <p>Moving Time: {activity.moving_time * 0.0166667} min.</p>
            </Link>
          ))} */}
        </div>
      )
}

