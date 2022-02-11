import React from 'react'
import GoalsForm  from './GoalsForm'

import './Goals.css'

export default function Goals() {
  return (
    <div class="row">
    <div className="col">
        There will be a goals list here
    </div>
    <div className="col">
        <GoalsForm />
    </div>
    </div>
  )
}
