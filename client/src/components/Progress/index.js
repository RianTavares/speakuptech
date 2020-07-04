import React from "react";

const Progress = (props) => {
  const progressValue = props.width;
  const goal = props.goal;

  return (
    <div className="progress-bar">
      <span 
        className="progress-bar__value"
        style={{ width: `${progressValue}%`}}>

          {`${progressValue}%`}

      </span>
      <p>{goal}</p>
    </div>
  )
}

export default Progress;