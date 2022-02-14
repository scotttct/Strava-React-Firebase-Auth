import { useState, useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'

export default function GoalsForm() {
  const [name, setName] = useState('')
  const [goalAmount, setGoalAmount] = useState('')
  const [goalType, setGoalType] = useState('')
  const [goalSuffix, setGoalSuffix] = useState('')
  const { user } = useAuthContext()
  const id = user.uid 
  const { addDocument, response  } = useFirestore('goals')
  
  const timeElapsed = Date.now()
  const today = new Date(timeElapsed).toDateString()
  console.log(today)
  const date = new Date(timeElapsed)
  date.setDate(date.getDate()+ 30)
  const goalDate = date.toDateString()
  
  console.log(goalDate)
//   setEndDate(timeElapsed.setDate(timeElapsed.getDate()+30).toShortDate()) 
//   console.log(endDate)
  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({ 
      uid: id, 
      name, 
      goalAmount,
      goalType,
      goalSuffix,
      today,
      goalDate,  
    })
  }
 // reset the form fields
 useEffect(() => {
  if (response.success) {
    setName('')
    setGoalAmount('')
    setGoalType('')
    setGoalSuffix('')
  }
}, [response.success])
  return (
    <>
    
    <div className="container tleft">
      <h3>Add a Goal</h3>
      <form className="align-left" onSubmit={handleSubmit}>
        <label> 
          <span>Goal Name:</span>
          <input 
            
            type="text"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          />
        </label>
        <br/>
        <label>
          <span>Goal Type:</span>
        <select name="goalType" id="goalType" required onChange={(e) => setGoalType(e.target.value)} value={goalType}>
          <option value="">---Choose---</option>
            <option value="time">Time</option>
            <option value="speed">speed</option>
            <option value="watts">Watts</option>
            <option value="heart rate">Heart Rate</option>
            <option value="weight">Weight</option>
            
        </select>
         
        </label>
        <br/>
        <label>
          <span>Goal Amount:</span>
          <input
            min="1"
            max="1000"
            type="number"
            required
            onChange={(e) => setGoalAmount(e.target.value)} 
            value={goalAmount} 
          />
        </label>
        <br/>
        <label>
          <span>Goal Suffix:</span>
        <select name="goalSuffix" id="goalSuffix" required onChange={(e) => setGoalSuffix(e.target.value)} value={goalSuffix}>
            <option value="">---Choose---</option>
            <option value="minutes">Minutes</option>
            <option value="avgMPH">Avg Speed</option>
            <option value="avgWatts">Avg Watts</option>
            <option value="avgHR">Avg Heart Rate</option>
            <option value="lbs">Pounds</option>
        </select>
        </label>
        <br/>
        <div className="tright">
            <button className="btn-success">Add Goal</button>
        </div>
      </form>
      </div>
      
    </>
  )
}