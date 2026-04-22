import React from 'react'

export const monthFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const TodayDate = () => {
  const today = new Date();

  return (
    <> {today.getDate()} {monthFull[today.getMonth()]} {today.getFullYear()}</>
  )
}

export default TodayDate