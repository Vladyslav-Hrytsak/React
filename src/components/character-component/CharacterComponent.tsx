import type {CharacterType} from "../../models/Character.ts";
import type {ReactNode} from "react";
import './CharacterComponent.css'

interface CharacterComponentProps {
    item: CharacterType,
    children: ReactNode
}

const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className='my-5 bottom-2.5 border'>
            <h3 className= 'p-8'>{item.name}, {item.surname}</h3>
            <img src = {item.photo} alt = {item.name}/>
            <p className= 'p-8'>{children}</p>
        </div>
    );
};

export default CharacterComponent;


// <div key={index}>
//     <h2>{simpson.name} {simpson.surname} - {simpson.age} years old</h2>
//     <p>{simpson.info}</p>
//     <img src={simpson.photo} alt={simpson.name} />
// </div>
