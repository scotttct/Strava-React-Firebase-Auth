import { useParams } from "react-router-dom"
import { useDocument } from '../../hooks/useDocument'

// styles
import './Goals.css'

import GoalSummary from "./GoalSummary"
import GoalChart from './GoalChart'

export default function Project() {
  const { id } = useParams()
  const { document, error } = useDocument('goals', id)
  

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }

return (
      <div className="dcontainer">
        <div className="row  ">
            <div className="col ">
              <GoalSummary goal={document} />
            </div>
            <hr className="mt-40"/>
            <div className="col ">
              <GoalChart goal={document} />
            </div>
          </div>
        </div>
   
  )
}