import React from 'react';

import { useDocument } from '../../hooks/useDocument';

import { useAuthContext } from '../../hooks/useAuthContext'

import styles from'./Stats.module.css'
export default function Stats() {
  
  const { user } = useAuthContext()
  const id = user.uid
  

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
      
     
  
    return (
        <>
        {error && <p className={styles['error']}>{error.message}</p>}
        <div className="container">
        
       
          
       
        </div>
         </>
         )
    }