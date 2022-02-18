import React from 'react'
import { Link } from 'react-router-dom' 

export const GoalsList = ({goals, error}) => {
   
  return (
    <>
        {error && <p className='error'>{error.message}</p>}
        {goals &&
        <>
            <div className="container">
                <h4>Goals List</h4>
                <ul className="goalsUl">
                {goals.map((goal) => (
                    <Link to={`/goaldetails/${goal.id}`} key={goal.id}>
                        <li className="goalsLi" >
                            <p className='name'>{goal.name}</p>
                            <p className='amount'>{goal.goalAmount} {goal.goalSuffix}</p>
                            <p className="name">{goal.goalDate}</p>
                        </li>
                    </Link>
                ))}
                </ul>
            </div>
        </>
         }
    </>
  )
}
