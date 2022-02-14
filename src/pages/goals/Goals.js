import React from 'react'
import GoalsForm  from './GoalsForm'

import './Goals.css'
import { StStats } from '../../components/StStats'
import { GoalsList } from './GoalsList'

export default function Goals() {
  return (
    <div className="row ml-20">
    
    <div className="col">
      <StStats />
    </div>
    <div className="col">
        <GoalsList />
    </div>
    
    <div className="col">
        <GoalsForm />
    </div>
    </div>
  )
}
