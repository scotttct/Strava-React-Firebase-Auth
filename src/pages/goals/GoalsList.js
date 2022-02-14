import React from 'react'
import { Link } from 'react-router-dom' 
//import {projectFirestore} from "../../firebase/config"
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import daysLeft from 'daysleft'
//import Goals from './Goals'
export const GoalsList = () => {
    
    // const db = projectFirestore
    const { user } = useAuthContext()
    // var docRef = db.collection("goals").doc();
    // var goals = [];
    // try {
    //     db.collection("goals").where("uid", "==", user.uid)
    //     .onSnapshot((querySnapshot) => {
            
    //         querySnapshot.forEach((doc) => {
    //             goals.push(doc.data());
    //             // goals.push((doc.data().goalAmount) + goals.push(doc.data().goalType))
    //         });
    //         console.log("goals: ", goals);
    //     });
    //   } catch (error) {
    //     console.error(error);
    //     // expected output: ReferenceError: nonExistentFunction is not defined
    //     // Note - error messages will vary depending on browser
    //   }
   
    const query = ["uid", "==", user.uid]
   const {documents, error} = useCollection("goals", query )//
//    if (documents == null) {
//        console.log('No data')
//    }
     const goals = documents
     console.log(goals)

     //to limit goals to those that have not expired I need to run a foreach loop and += to a List
    //  documents.forEach(goal => {
    //      const days = daysLeft(goal.goalDate)
    //      if (days > 0) {
    //      return goal += goals
    //         }
    //  });

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
                            <p class="date">{goal.goalDate}</p>
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
