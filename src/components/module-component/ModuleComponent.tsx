import type { CoursesType } from "../../models/CoursesModel.ts";

interface ModuleComponentProps {
    item: CoursesType
}

export const ModuleComponent = ({ item }: ModuleComponentProps) => {
    return (
        <div className='border'>
            {
                item.modules.map((module, index) => (
                    <div key={index} >
                        <p className= 'font-extrabold'>{module}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default ModuleComponent;
