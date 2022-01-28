import React, { useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext'
import { projectFirestore } from '../../firebase/config';
import axios from 'axios'
import { useHistory } from 'react-router'
import { useLocation } from "react-router-dom";
//import { StravaAuth } from "../../utils/functions"
//css for StRedirect
import './StRedirect.css'
//import { Athletes } from 'strava/dist/resources';


export default function StRedirect() {
  const { user } = useAuthContext()
  const search = useLocation().search; 
  
  const history = useHistory()
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
        const strUser = res.data.athlete.username
        const strUserId = res.data.athlete.id
        const access_token = res.data.access_token
        const refresh_token = res.data.refresh_token
        codeRef.update({ 
          stravaUsername: strUser,
          stravaUserId: strUserId,
          refresh_token,
          access_token,

        })
        console.log("access_token = " + access_token, "refresh_token = " + refresh_token)
      
      } catch (error) {
        console.error(error);
      }
    }
   getTokens()
        
 }, [clientId, stravaSecret, code, codeRef, history])
  
history.push('/stats')
  return <>
    <div><img className="loadingImg" src="./loading.gif" alt="loading"></img></div>
    <div></div>

  </>;
}
