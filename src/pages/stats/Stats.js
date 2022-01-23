import React from 'react';
//import { useFirestore } from '../../hooks/useFirestore'
//import { useCollection } from '../../hooks/useCollection'
//import { useDocument } from '../../hooks/useDocument';
import { useAuthContext } from '../../hooks/useAuthContext'
//import { useStrava } from '../../hooks/useStrava';


import './Stats.module.css'
export default function Stats() {
    const { user } = useAuthContext()
    //const { Activities, useActivities } = useState<Activity>([])
    const uid = user.uid
    const email = user.email

    // const stCode = useCollection('stravaAuth', uid)
    // const res = stCode.code
    //const athleteId = res.athlete.id
    // const { data } = useStrava(res)
    
      return (
         <> 
            <div className="">
                <div>
                    <h2>{email}</h2>
                    <p>with userId of: {uid}</p>
                    {/* <h4>{res}</h4> */}
                </div>
            </div>
        </>
      )
  
}
