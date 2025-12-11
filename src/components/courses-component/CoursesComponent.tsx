import {coursesArray} from "../../data/data.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";

const CoursesComponent = () => {
    return (
        <div className="p-4">
            {
                coursesArray.map(course => (
                    <CourseComponent key={course.title} course={course} />))
            }
    </div>
);
};

export default CoursesComponent;
