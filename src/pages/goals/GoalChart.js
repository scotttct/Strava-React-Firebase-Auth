//import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useDocument } from '../../hooks/useDocument'
import {  Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,} from 'chart.js'

//import { Line } from 'react-chartjs-2'

ChartJS.register(
    
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
     
)
export default function GoalChart({goal}) {

    const {user} = useAuthContext()
    const id = user.uid
    const {document, error } = useDocument("stravaCode", id)
    console.log(document)
    console.log(error)
    console.log(goal)
    
// const stAct = document
  return (
      <>
        {/* {error && <p></p>} */}
    

      
    </>
  )
}
