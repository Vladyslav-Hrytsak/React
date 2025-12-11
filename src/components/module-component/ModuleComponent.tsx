import type {FC} from "react";

type ModuleProps = {
    modules: string[];
}

const ModuleComponent: FC<ModuleProps> = ({modules}) => {
    return (
        <div className="border p-3 mt-3 rounded">
            {modules.map((module, index) => (
                <p key={index} className="font-extrabold">
                    {module}
                </p>
            ))}
        </div>
    );
};

export default ModuleComponent;
