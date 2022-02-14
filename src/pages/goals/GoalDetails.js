import { useParams } from "react-router-dom"
import { useDocument } from '../../hooks/useDocument'

// styles
import './Goals.css'

import GoalSummary from "./GoalSummary"

export default function Project() {
  const { id } = useParams()
  const { document, error } = useDocument('goals', id)
  

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }
  
    //   const createdAt= new Date(document.createdAt)
    //   createdAt.toLocaleDateString('en-US'); // "en-US" gives date in US Format - mm/dd/yy
      

  return (
    
        <div className="dcontainer">
            <GoalSummary goal={document} />
           
        </div>
   
  )
}