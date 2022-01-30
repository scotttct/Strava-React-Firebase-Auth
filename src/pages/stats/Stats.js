import React from 'react';

import { useDocument } from '../../hooks/useDocument';
//import {useFetch} from '../../hooks/useFetch'
import { useAuthContext } from '../../hooks/useAuthContext'

import styles from'./Stats.module.css'
export default function Stats() {
  
 
    const { user } = useAuthContext()
    const id = user.uid
    //const email = user.email
  
    const {document, error} = useDocument("stravaCode", id)
      
      //const client_secret = document.client_secret
      
      //const refresh_token = document.refresh_token
    console.log(document)
    
      
      //const accessToken = document.access_token
     
     
      // const strUserId = document.stravaUserId

      // const strUsername = document.stravaUsername
      //})
      //const auth_link = "https://www.strava.com/oauth/token"
      //const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`
      // const stat_link = `https://www.strava.com/api/v3/athlete/${strUserId}/stats?access_token=${accessToken}`
     
      // const {data, isPending, err} = useFetch(stat_link)
      // console.log(data)
    
      return (
        <>
        {error && <p className={styles['error']}>{error.message}</p>}
        {/* {err && <p className={styles['error']}>{err.message}</p>}

        {isPending  && <div><img className={styles['loadingImg']} src="./loading.gif" alt="loading"></img></div> }
        {data && <div className="container">
                <div>
                  <h3>Strava Stats</h3>
                    <div className={styles['card']} >
                     
                      <div className={styles['card-container']}>
                        
                        <h4><b>Welcome{strUsername}</b></h4> 
                         <h5>with Email: {email}</h5>
                        
                      </div>

                   </div>
                   
                </div>
           </div>           
        } */}
         </>)
}