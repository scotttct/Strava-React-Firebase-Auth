import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext'
import { projectFirestore } from '../../firebase/config';
//import { useFirestore } from '../../hooks/useFirestore'
import { useHistory } from 'react-router'
import {useLocation} from "react-router-dom";
import './stRedirect.css'
export default function StRedirect() {
   const { user } = useAuthContext()
  const search = useLocation().search;
  const code = new URLSearchParams(search).get('code');
  
  const history = useHistory()
  //const { addDocument, response } = useFirestore('stravaAuth')
 const email = user.email
  const id = user.uid

 

 try {
      projectFirestore.collection('stravaCode').doc(id).set({
        code
      })
      history.push("/stats")
  } catch(err) {
    console.log(err)
  }


 


  // addDocument({uid: user.uid, code: code})
  // if (!response.error) {
  // history.push('/stats')
  //  } 
  //   console.log(response.error)
  // }
  return <div className="main"><p>code: {code}</p> <p>for user with email: {email} </p><p>with the id of {id}</p></div>;
}
