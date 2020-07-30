import React from 'react';
 
function ShowMonth(props) {
      return (
      <div className={"month" + " " + props.color} onMouseEnter ={props.handleMove}>
        {props.months}
      </div>
    );
  }

  export default ShowMonth;