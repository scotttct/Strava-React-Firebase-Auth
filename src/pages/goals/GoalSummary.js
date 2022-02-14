import daysLeft from 'daysleft'
export default function GoalSummary({ goal }) {
 console.log(goal)
    
 const dayTill = goal.goalDate
 
 console.log(daysLeft(dayTill))
 const days = daysLeft(dayTill)
 
    return (
      <>
        <div className="goal-summary">
          <h2 className="page-title">{goal.name}</h2>
          <p className="created-date">
            <span className="gspan">Goal Set on: </span>{goal.today}
          </p>
          <p className="details">
            <span class="gspan">Goal Date:</span> {goal.goalDate}
          </p>
          <p className="details">
            <span class="gspan">Days Left: </span> {days} days
          </p>
          <div className="row">
            <div class="col-5"></div>
            <div className="col-1  m-0 pr-5 gcol1">
                <p>{goal.goalAmount}</p>
            </div>
            <div class="col-1 m-0 p-0 gcol2"><span className="gspan">{goal.goalSuffix}</span></div>
            <div class="col-5"></div>
          </div> 
        </div>
        
      </>
    )
}
            
