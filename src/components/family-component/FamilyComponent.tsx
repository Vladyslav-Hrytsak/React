import { simpsons } from "../../data/data.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";
import type {CharacterType} from "../../models/Character.ts";

const FamilyComponent = () => {
    return (
        <>
            {simpsons.map((simpson:CharacterType, index) => <CharacterComponent key = {index} item = {simpson}>
                {simpson.info}
            </CharacterComponent>)}
        </>
    );
};

export default FamilyComponent;
