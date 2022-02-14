import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useDocument } from '../hooks/useDocument'
export const StStats = () => {

    const { user } = useAuthContext()
    const id = user.uid 

    const {document, error} = useDocument("stravaCode", id)
    const stData = document

  return (
    <>
        {error && <p className='error'>{error.message}</p>}
        {stData && <> 
            <div className="container">
            <h4>Strava Ride Stats</h4>
            <hr/>
            <h5>Recent Ride Totals(RR)</h5>
            <p><span className="pSpan">RR Count: </span>{stData.stats.recent_ride_totals.count}</p>
            <p><span className="pSpan">RR Distance: </span>{parseFloat(stData.stats.recent_ride_totals.distance * 0.000621371).toFixed(2)} miles</p>
            <p><span className="pSpan">RR Moving Time: </span>{parseFloat(stData.stats.recent_ride_totals.moving_time * 0.000277778).toFixed(2)} hours</p>
            <hr/>
            <h5>Year To Date Totals(YTD)</h5>
            <p><span className="pSpan">YTD Count: </span>{stData.stats.ytd_ride_totals.count}</p>
            <p><span className="pSpan">YTD Distance: </span>{parseFloat(stData.stats.ytd_ride_totals.distance * 0.000621371).toFixed(2)} miles</p>
            <p><span className="pSpan">YTD Moving Time: </span>{parseFloat(stData.stats.ytd_ride_totals.moving_time * 0.000277778).toFixed(2)} hours</p>
            <hr/>
            {/* <h4>All Ride Totals(AR)</h4>
            
            <p><span className="pSpan">AR Count: </span>{stData.stats.all_ride_totals.count}</p>
            <p><span className="pSpan">AR Distance: </span>{parseFloat(stData.stats.all_ride_totals.distance * 0.000621371).toFixed(2)} miles</p>
            <p><span className="pSpan">AR Moving Time: </span>{parseFloat(stData.stats.all_ride_totals.moving_time * 0.000277778).toFixed(2)} hours</p>
            <p><span className="pSpan">AR Longest Ride TD: </span>{parseFloat(stData.stats.biggest_ride_distance * 0.000621371).toFixed(2)} miles</p>
            <p><span className="pSpan">AR Longest Climb TD: </span>{parseFloat(stData.stats.biggest_climb_elevation_gain * 0.000621371).toFixed(2)} miles</p>
            {/* <p><span className="pSpan">Avg Watts: </span> avgWatts</p>
            <p><span className="pSpan">Avg Distance: </span> avgDistance</p> */} 
        </div>
        </>}

    </>
  )
}
