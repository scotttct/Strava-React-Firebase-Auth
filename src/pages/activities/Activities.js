import React from 'react'
import  ActivitiesList  from '../../components/ActivitiesList'

export default function Activities() {
  return (
    <>
      <div className="container">
        <h2>Strava Activities List</h2>
        <hr/>
        <ActivitiesList perPage={30}/>
      </div>
    </>
  )
}
