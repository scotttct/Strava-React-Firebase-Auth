import React from "react-router-dom"

// styles
import styles from './Home.module.css'

export default function Home() {
 
  const CLIENT_ID = process.env.REACT_APP_STRAVA_CLIENT_ID
  const redirectURL = "http://localhost:3000/stRedirect"
  const url = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${redirectURL}&approval_prompt=force&scope=read,read_all,activity:read_all`
    
  
   
    

  return (
    <>
    <div className={styles.main}>
      Home
      <div className={styles.container}>
     
        <a href={url}>Connect with Strava</a>
      
      </div>
    </div>
    
    </>
  )
}

