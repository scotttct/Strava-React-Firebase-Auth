import React from 'react';

import { useDocument } from '../../hooks/useDocument';
//import {useFetch} from '../../hooks/useFetch'
import { useAuthContext } from '../../hooks/useAuthContext'

import styles from'./Stats.module.css'
export default function Stats() {
  //set state
  //const [ strData, setStrData ]  =  useState([])
  //const [ accessToken, setAccessToken ] = useState('')
  // const { stravaUserId, setStravaUserId} = useState('')
  // const { stravaUsername, setStravaUsername } = useState('')
  const { user } = useAuthContext()
  const id = user.uid
  const email = user.email

  const {document, error} = useDocument("stravaCode", id)
    // const strData = React.memo(props => {
    
    //   return sData
    // })
      const sData = [document]
      //setStrData(sData)
      console.log("sData: ",sData[0])
      if (sData[0] != null) {
        let accessToken = sData[0].access_token
        console.log(accessToken)
      }
      
      // if (document != null) {
      //   const access_token = strData.access_token
      //   console.log(access_token)
        
        
      // }
      
      
      // if (sData!=null) {
      //   setStrData(sData)
        
      // } else {
      //   console.log("error")
      // }

      // const strUserId = strData.strUserId
      // const access_token = strData.access_token
      // const stat_link = `https://www.strava.com/api/v3/athlete/${strUserId}/stats?access_token=${access_token}`
      // const {data, isPending, err} = useFetch(stat_link)
      // console.log("data: ",data)
    // if (document != null) {
      //set the accessToken in State
      //const accessToken = document.access_token
      //console.log("access_token: ", accessToken)
      //setAccess_token(accessToken)
      //set the strava userId in state
      
      //console.log('strava userId: ', strUserId)
      // setStravaUserId(strUserId)
      //set stravausername in state
      // const strUsername = document.stravaUsername
      //console.log('strava username: ', strUsername)
      // setStravaUsername(strUsername)
      
      
    // } else {
    //   console.log("error: no document present at this time...")
    // }

  //  
  //     console.log(data)
    //const auth_link = "https://www.strava.com/oauth/token"
    //const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`
    // const stat_link = `https://www.strava.com/api/v3/athlete/${stravaUserId}/stats?access_token=${access_token}`
    // const {data, isPending, err} = useFetch(stat_link)
    // console.log("data: ",data)
  
    return (
        <>
        {error && <p className={styles['error']}>{error.message}</p>}
        <div className="container">
        <div>{email}</div>
        {document && <>
       
          <div>Hello Strava User: {sData[0].stravaUsername}</div>
          <div>your StravaId = {sData[0].stravaUserId}</div></>
          }
          
       
        
        {/* {err && <p className={styles['error']}>{err.message}</p>}

        {isPending  && <div><img className={styles['loadingImg']} src="./loading.gif" alt="loading"></img></div> } 
        {data && <div className="container"> 
                <div>
                  
                    <div className={styles['card']} >
                     <h3>Strava Stats</h3>
                      <div className={styles['card-container']}>
                        
                       <h4><b>Welcome{strData.strUsername}</b></h4> 
                         <h5>with Email: {email}</h5>
                        
                      </div>

                   </div>
                   
                </div> 
          </div>         
          }      */}
       </div>
         </>)
}