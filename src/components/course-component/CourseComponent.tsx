import type {FC} from "react";
import type {CoursesType} from "../../models/CoursesModel.ts";
import ModuleComponent from "../module-component/ModuleComponent.tsx";

type CourseProps = {
    course: CoursesType
}

const CourseComponent: FC<CourseProps> = ({course}) => {
    return (
        <div className="border-2 m-4 p-4 text-center bg-blue-100 rounded-lg">
            <h2 className="font-mono font-extrabold text-4xl">{course.title}</h2>

            <p className="font-serif">
                {course.monthDuration} month, {course.hourDuration} hour
            </p>
            <ModuleComponent modules={course.modules} />
        </div>
    );
};

export default CourseComponent;
