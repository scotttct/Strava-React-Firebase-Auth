import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext'
import { projectFirestore } from '../../firebase/config';
import axios from 'axios'
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
 
  useEffect(() => {
    async function getTokens() {
      try {
        const res = await axios.post(`https://www.strava.com/api/v3/oauth/token?client_id=${clientId}&client_secret=${stravaSecret}&code=${code}&grant_type=authorization_code`);
        console.log(res);
       
        const access_token = res.data.access_token
        const refresh_token = res.data.refresh_token
        console.log("access_token = " + access_token, "refresh_token = " + refresh_token)
      } catch (error) {
        console.error(error);
      }
    }
   getTokens()
        
 }, [clientId, stravaSecret, code])
  
    //  const athleteId = data.athlete.id

  return <>
    <div>Code for {}</div>
    <div></div>

  </>;
}

      
       
        
      // console.log(tokens)
      // if (!codeRef.exists) {
      //   codeRef.update({
      //     accessToken:tokens.access_token,
      //     athleteId: tokens.athelte.Id,

      //   })
      // } else {
      //   console.log('Did not upload data to firestore')
      // }


      //  useEffect(() => {
      //     if(!hasFetchedData.current) {
      //       async function fetchData() {
      //         const stravaAuthResponse = await axios.all([
      //           axios.post(getTokens)
      //         ]);
              
      //         console.log(stravaAuthResponse)
      //       //   const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
      //       //   console.log(stravaActivityResponse.data[0]);
      //       //   const activities = []
      //       //   for (let i = 0; i < stravaActivityResponse.data.length; i += 1) {
      //       //     const activity_id = stravaActivityResponse.data[i].id
      //       //     const activity_name = stravaActivityResponse.data[i].name
      //       //     const activity_moving_time = stravaActivityResponse.data[i].moving_time
      //       //     const activity_type = stravaActivityResponse.data[i].type
      //       //     activities.push({
      //       //       activityId: activity_id, 
      //       //       activityName: activity_name, 
      //       //       movingTime: activity_moving_time, 
      //       //       type: activity_type
      //       //     }) 
      //       //   }
      //       // console.log(activities)
            
      //       }
      //       hasFetchedData.current = true;
      //       fetchData()
      //     }
      // }, [getTokens]);
    

      

    
    
  // history.push('/stats')
 
 


