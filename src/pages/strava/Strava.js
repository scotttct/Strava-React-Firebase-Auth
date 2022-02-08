import React from 'react';
//import { Link } from "react_router_dom"
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'
//import ActivitiesList from '../../components/ActivitiesList'
import './Strava.css'



export default function Strava() {
 
    const { user } = useAuthContext()
    const id = user.uid 

    const {document, error} = useDocument("stravaCode", id)
    const stData = document
    // const activities = document[0].act
      console.log("stData: ",stData)
     
    //   if (stData != null){
    //     const count = stData.stats.all_ride_totals.count
    //      console.log("Ride Count ", count) 
    //   }

      
    // const movingTime = stData.stats.all_ride_totals.moving_time * 0.0166667  

    
  return <>
   {error && <p className='error'>{error.message}</p>}
   {stData && <>
  <div className="container c1">
    <div className="row">
        <div className="col">
            <h1>Strava Home</h1>
            
        </div>
    </div>
  </div>
  
    <div className="row row1">
        <div className="col col1 left">
            <h2>Strava Profile</h2>
            
            <div className="pDiv">
            <span><img src={stData.picUrl} width="50px" height="auto" alt="strava profile pic" className="img1"/></span><h3 className="h3Profile">{stData.fullName}</h3>
            </div>
            <hr/>
            <p><span className="pSpan">Strava Username: </span>{stData.stravaUsername}</p>
            <hr/>
            <h3>Bikes</h3>
           
                {stData.bikes && 
                stData.bikes.map(bike => (
                    <p>{bike.name}</p>
                ))}
            
        </div>
        <div className="col col1 middle">
            <h2>Strava Stats</h2>
            <hr/>
            <h3>Recent Ride Totals(RR)</h3>
            <p><span className="pSpan">RR Count: </span>{stData.stats.recent_ride_totals.count}</p>
            <p><span className="pSpan">RR Distance: </span>{parseFloat(stData.stats.recent_ride_totals.distance * 0.000621371).toFixed(2)} miles</p>
            <p><span className="pSpan">RR Moving Time: </span>{parseFloat(stData.stats.recent_ride_totals.moving_time * 0.000277778).toFixed(2)} hours</p>
            <hr/>
            <h3>Year To Date Ride Totals(YTD)</h3>
            <p><span className="pSpan">RR Count: </span>{stData.stats.ytd_ride_totals.count}</p>
            <p><span className="pSpan">RR Distance: </span>{parseFloat(stData.stats.ytd_ride_totals.distance * 0.000621371).toFixed(2)} miles</p>
            <p><span className="pSpan">RR Moving Time: </span>{parseFloat(stData.stats.ytd_ride_totals.moving_time * 0.000277778).toFixed(2)} hours</p>
            <hr/>
            <h3>All Ride Totals(AR)</h3>
            
            <p><span className="pSpan">AR Count: </span>{stData.stats.all_ride_totals.count}</p>
            <p><span className="pSpan">AR Distance: </span>{parseFloat(stData.stats.all_ride_totals.distance * 0.000621371).toFixed(2)} miles</p>
            <p><span className="pSpan">AR Moving Time: </span>{parseFloat(stData.stats.all_ride_totals.moving_time * 0.000277778).toFixed(2)} hours</p>
            <p><span className="pSpan">AR Longest Ride TD: </span>{parseFloat(stData.stats.biggest_ride_distance * 0.000621371).toFixed(2)} miles</p>
            <p><span className="pSpan">AR Longest Climb TD: </span>{parseFloat(stData.stats.biggest_climb_elevation_gain * 0.000621371).toFixed(2)} miles</p>
            {/* <p><span className="pSpan">Avg Watts: </span> avgWatts</p>
            <p><span className="pSpan">Avg Distance: </span> avgDistance</p> */}
        </div>
        <div className="col col1 right">
            <h2>Strava Recent Activities</h2>
            <hr/>
            <div className="act-div">
            <p><span>Name</span><span> | </span><span>Date</span><span> | </span><span>AvgWatts</span><span> | </span><span>AvgSpeed</span><span> | </span><span>AvgHR</span></p>
            </div>
            {stData.act && 
            
                stData.act.slice(0,5).map(activity => (
                     
                        <div className="activity-list">
                            <p>{activity.name}</p>
                            <p>{ activity.start_date }</p>
                            <p>{activity.average_watts}</p>
                            <p>{activity.average_speed}</p>
                            <p>{activity.average_heartrate}</p>
                        </div>
                    
                ))}
            </div>
        
    </div>
  </>
    }
</>
}