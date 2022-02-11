import React from 'react'

export default function Test() {
    const date = Date.now()
    console.log(date)
    const today = new Date(date).toDateString()
    console.log(today)
  return (

    
    <div>Test</div>
  )
}