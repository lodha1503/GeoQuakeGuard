import Header from './Header/Header';
import CourseList from './CoursesList/CoursesList';



export default function CourseSection({ classPrefix, header, summary, courses }) {
    return (
      <div className={classPrefix}>
        <Header class={`${classPrefix}-header`} header={header} />
        <div className={`${classPrefix}-description`}>
          <div className={`${classPrefix}-summary`}>{summary}</div>
          <CourseList class={`${classPrefix}-list`} type={courses} />
        </div>
      </div>
    );
  }
  