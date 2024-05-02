import React from 'react';
import './CoursesList.css';

function CoursesList(props) {
    console.log(props.type.courses);
  return (
    
    <div className={props.class}>
        <ul>
            {
            props.type.map((course,index)=>(
                <li key={index}>
                {course}
                </li>
            )

            )
            }
        </ul>
    </div>
  )
}

export default CoursesList
