import React from 'react'
import './index.css';
import courseInfo from '../../constants/Courses/coursesInfo.json';
import CourseSection from '../../components/Courses/CourseSection'

function Courses() {

  const {  ugCourses, pgCourses, shortTermCourses } = courseInfo;

  const sections = [
    {
      classPrefix: 'ug-courses',
      header: ugCourses.header,
      summary: ugCourses.summary,
      courses: ugCourses.courses,
    },
    {
      classPrefix: 'pg-courses',
      header: pgCourses.header,
      summary: pgCourses.summary,
      courses: pgCourses.courses,
    },
    {
      classPrefix: 'short-term-courses',
      header: shortTermCourses.header,
      summary: shortTermCourses.summary,
      courses: shortTermCourses.courses,
    },
  ];

  return (
    <div className="courses_main">
      
      {sections.map((section, index) => (
        <div key={index} className="courses-section">
          <CourseSection {...section} />
          <hr className="stroke-courses" />
        </div>
      ))}
    </div>
  );
}

export default Courses
