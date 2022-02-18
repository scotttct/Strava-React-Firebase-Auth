import React from 'react'
import GoalsForm  from './GoalsForm'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import './Goals.css'
import { StStats } from '../../components/StStats'
import { GoalsList } from './GoalsList'

export default function Goals() {
  const { user } = useAuthContext()
  const query = ["uid", "==", user.uid]
    const {documents, error} = useCollection("goals", query )//
    const goals = documents

  return (
    
    <div className="row ml-20">
    
    <div className="col">
      <StStats />
    </div>
    <div className="col">
        <GoalsList goals={goals} error={error}/>
    </div>
    
    <div className="col">
        <GoalsForm />
    </div>
    </div>
  )
}
