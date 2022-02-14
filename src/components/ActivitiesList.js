
import { useDocument } from '../hooks/useDocument'
import { useAuthContext } from '../hooks/useAuthContext';
//import { format } from "date-fns"
//import { Link } from "react-router-dom"
import './ActivitiesList.css'



import React from 'react'

function ActivitiesList(props) {
  const { user } = useAuthContext()
  const id = user.uid 
  
  const {document, error} = useDocument("stravaCode", id)
    

  return (
    <>
       {error && <p>{error}</p>}
  
    <div>
      <table className="table table-dark table-striped">
        <thead className="t-head">
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Avg Watts</th>
            <th>Wtd Avg Watts</th>
            <th>Max Watts</th>
            <th>Avg Speed</th>
            <th>Max Speed</th>
            <th>Avg HR</th>
            <th>Avg Cadence</th>
          </tr>
        </thead>
        <tbody>
         
          {document && 
          document.act.slice(0,30).map(activity => (
           
                      <tr key={activity.id}>
                      
                         <td>{activity.name}</td>
                         <td>{ activity.start_date}</td>
                         <td>{activity.average_watts}</td>
                         <td>{activity.weighted_average_watts}</td>
                         <td>{activity.max_watts}</td>
                         <td>{parseFloat(activity.average_speed).toFixed(2)}</td>
                         <th>{parseFloat(activity.max_speed).toFixed(2)}</th>
                         <td>{activity.average_heartrate}</td>
                         <td>{activity.average_cadence}</td>
                        
                     </tr>
                     
             ))}
          
        </tbody>
      </table>
    </div>
   
    
    </>
  )
}

export default ActivitiesList
 

 

 




