import React, { useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext'
import { projectFirestore } from '../../firebase/config';
import axios from 'axios'
//import { useFetch } from '../../hooks/useFetch'
//import { useHistory } from 'react-router'
import { useLocation } from "react-router-dom";
//import { StravaAuth } from "../../utils/functions"
//css for StRedirect
import './StRedirect.css'
//import { Athletes } from 'strava/dist/resources';


export default function StRedirect() {
  const { user } = useAuthContext()
  const search = useLocation().search; 

  //const history = useHistory()
  const code = new URLSearchParams(search).get('code');
  //const email = user.email
  const id = user.uid
  const codeRef = projectFirestore.collection("stravaCode").doc(id)
  codeRef.set({
          code
        })
  const clientId = process.env.REACT_APP_STRAVA_CLIENT_ID
  const stravaSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET
  const statUrl = `https://www.strava.com/api/v3/athlete`
  useEffect(() => {
    async function getTokens() {
      try {
        const res = await 
          axios.post(`https://www.strava.com/api/v3/oauth/token?client_id=${clientId}&client_secret=${stravaSecret}&code=${code}&grant_type=authorization_code`)

        
        
        // const statsRes = await axios.get(`${statUrl}/${res[0].data.athlete.id}/stats?access_token=${res[0].data.access_token}`)
        // console.log(statsRes)

        console.log(res);
        const strUser = res.data.athlete.username
        const strUserId = res.data.athlete.id
        const access_token = res.data.access_token
        const refresh_token = res.data.refresh_token
        const fullName = res.data.athlete.firstname + " " + res.data.athlete.lastname
        const picUrl = res.data.athlete.profile
        console.log(picUrl)
       console.log(fullName)

        const athleteUrl  = `${statUrl}?access_token=${access_token}`
        console.log(athleteUrl)
        const athlete = await axios.get(athleteUrl)
          console.log(athlete)
          const bikes = athlete.data.bikes
          // console.log(bikes)

        const actUrl = `https://www.strava.com/api/v3/athlete/activities?access_token=${access_token}`
        const act = await axios.get(actUrl)
        console.log(act)

        codeRef.update({ 
          stravaUsername: strUser,
          stravaUserId: strUserId,
          refresh_token,
          access_token,
          fullName,
          picUrl,
          bikes: bikes,
          act: act.data
        })
        
        //console.log("access_token = " + access_token, "refresh_token = " + refresh_token)
      
      } catch (error) {
        console.error(error);
      }
    }
   getTokens()
  
        
 }, [clientId, stravaSecret, code, codeRef, statUrl ])//history
  
//history.push('/stats')
  return <>
  <div className="container">
    <div><img className="loadingImg" src="./loading.gif" alt="loading"></img></div>
    {/* {athlete.data.bikes && bikes.map(bike => (
      <h2 key={bike.id}>{bike.name}</h2>
    ))} */}
  </div> 
  </>;
}
