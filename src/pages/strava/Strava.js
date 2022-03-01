import React from 'react';
import { Link } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'
//import ActivitiesList from '../../components/ActivitiesList'
import './Strava.css'
//import { useHistory } from 'react-router'


export default function Strava() {
    //let history = useHistory()
    
    const { user } = useAuthContext()
        const id = user.uid
       
    const {document, error} = useDocument("stravaCode", id)
    const stData = document

    
  

    

    // const goToAct = () => {
    //     history.push('/Activities')
    // }

  return <>
   {error && <p className='error'>{error.message}</p>}
 
   {stData && <>
  <div className="container c1">
    <div className="row">
        <div className="col flex">
            <h1>Cycling Data from Strava</h1><span className="banner-span"><img src="./strava-logo-img.png" width="60" alt=""/></span>
            
        </div>
    </div>
  </div>
  
    <div className="row row1">
        <div className="col col1 left">
            <h2>Strava Profile</h2>
            
            <div className="pDiv">
            <span><img src={stData.picUrl} width="50px" height="auto" alt="strava profile pic" className="img1"/></span><h4 className="h3Profile">{stData.fullName}</h4>
            </div>
            <hr/>
            <p><span className="pSpan">Strava Username: </span>{stData.stravaUsername}</p>
            <hr/>
            <h3>Bikes</h3>
           
                {stData.bikes && 
                stData.bikes.map(bike => (
                    <p key={bike.name}>{bike.name}</p>
                ))}
            
        </div>
        {stData && <><div className="col col1 middle">
            <h2>Strava Ride Stats</h2>
            <hr/>
            <h4>Recent Ride Totals(RR)</h4>
             
            <p><span className="pSpan">RR Count: </span>{stData.stats.recent_ride_totals.count}</p>
            <p><span className="pSpan">RR Distance: </span>{parseFloat(stData.stats.recent_ride_totals.distance * 0.000621371).toFixed(2)} miles</p>
            <p><span className="pSpan">RR Moving Time: </span>{parseFloat(stData.stats.recent_ride_totals.moving_time * 0.000277778).toFixed(2)} hours</p>
            <hr/>
            <h4>Year To Date Totals(YTD)</h4>
            <p><span className="pSpan">YTD Count: </span>{stData.stats.ytd_ride_totals.count}</p>
            <p><span className="pSpan">YTD Distance: </span>{parseFloat(stData.stats.ytd_ride_totals.distance * 0.000621371).toFixed(2)} miles</p>
            <p><span className="pSpan">YTD Moving Time: </span>{parseFloat(stData.stats.ytd_ride_totals.moving_time * 0.000277778).toFixed(2)} hours</p>
            <hr/>
            <h4>All Ride Totals(AR)</h4>
            
            <p><span className="pSpan">AR Count: </span>{stData.stats.all_ride_totals.count}</p>
            <p><span className="pSpan">AR Distance: </span>{parseFloat(stData.stats.all_ride_totals.distance * 0.000621371).toFixed(2)} miles</p>
            <p><span className="pSpan">AR Moving Time: </span>{parseFloat(stData.stats.all_ride_totals.moving_time * 0.000277778).toFixed(2)} hours</p>
            <p><span className="pSpan">AR Longest Ride TD: </span>{parseFloat(stData.stats.biggest_ride_distance * 0.000621371).toFixed(2)} miles</p>
            <p><span className="pSpan">AR Longest Climb TD: </span>{parseFloat(stData.stats.biggest_climb_elevation_gain * 0.000621371).toFixed(2)} miles</p>
        
        </div></>}
        <div className="col col1 right">
            <div className="act-header">
                <h3>Recent Strava Activities - Last 5</h3> <Link to={`/activities`}><button className="btn">All Activities</button></Link>
            </div>

            <hr/>
            <div className="act-div">
            <p><span>Name</span><span>|</span><span>Date</span><span>|</span><span>AvgWatts</span><span>|</span><span>AvgSpeed</span><span> | </span><span>AvgHR</span></p>
            </div>
            {stData.act && 
            
                stData.act.slice(0,5).map(activity => (
                      
                        <div className="activity-list" key={activity.id}>
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