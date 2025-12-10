import {coursesArray} from "../../data/data.ts";
import ModuleComponent from "../module-component/ModuleComponent.tsx";

export const CourseComponent = () => {
    return (
        <div>
            {
                coursesArray.map((course, index) => (
                    <div key={index} className='border-2 m-3.5 text-center bg-blue-100'>
                        <h2 className= 'font-mono font-extrabold text-4xl'>{course.title}</h2>
                        <p className= 'font-serif'>{course.monthDuration} month,  {course.hourDuration} hour</p>
                        <div>
                            {
                                <ModuleComponent item = {course} />
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};


export default CourseComponent;