import './CoursesComponent.css';
import { coursesAndDurationArray } from '../../array.ts';
import type { CourseModel } from "../../models/CourseModel.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";

const CoursesComponent = () => {
    return (
        <ul>
            {coursesAndDurationArray.map((course: CourseModel, index) => (
                <CourseComponent key={index} course={course} />
            ))}
        </ul>
    );
};

export default CoursesComponent;
