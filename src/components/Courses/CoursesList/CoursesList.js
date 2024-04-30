import React from 'react';
import './CoursesList.css';

function CoursesList(props) {
    console.log(props.type.courses);
  return (
    
    <div className={props.class}>
        <ol>
            {
            props.type.map((course,index)=>(
                <li key={index}>
                {course}
                </li>
            )

            )
            }
        </ol>
    </div>
  )
}

export default CoursesList
