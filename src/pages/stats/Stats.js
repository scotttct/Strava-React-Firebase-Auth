import React from 'react';
//import { useFetch } from '../../hooks/useFetch';
import { useDocument } from '../../hooks/useDocument';
import { Strava } from 'strava'
import { useAuthContext } from '../../hooks/useAuthContext'

import './Stats.module.css'
export default function Stats() {
    const { user } = useAuthContext()
    // const { data, err } = useFetch()
    const id = user.uid
    const email = user.email

    const {error, document} = useDocument("stravaCode", id)

    const strava = new Strava({
        client_id: process.env.REACT_APP_STRAVA_CLIENT_ID,
        client_secret: process.env.REACT_APP_STRAVA_CLIENT_SECRET,
        refresh_token: process.env.REACT_APP_STRAVA_REFRESH_TOKEN,
      })
      ;(async () => {
        try {
          const activities = await strava.activities.getLoggedInAthleteActivities()
          console.log(activities)
        } catch (error) {
          console.log(error)
        }
      })()

    if (error) {
        return <div className='error'>{error.message}</div>
    }
    if (!document) {
        return <div className="loading"><img className="loadingImg" src="./loading.gif" alt="Loading..."/></div>
    }

      return (
         <> 
            <div className="container">
                <div>
                    <h2>{email}</h2>
                    <p>with userId of: {id}</p>
                    <p>code for user = {document.code}</p>
                   <div><img className="loadingImg" src="./loading.gif" alt="loading"></img></div> 
                   <div><h2>Strava Acitivities</h2></div>
                </div>
            </div>
        </>
      )
  
}
