import AuthResourcesComponent from "../components/form-component/AuthResourcesComponent.tsx";
import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

const AuthResourcesPage = () => {
    useEffect(() => {
        loadAuthProducts().then(products => console.log(products))
            .catch(reason => {
                console.log(reason)
                refresh().then(() => loadAuthProducts() )
            });
    }, []);
    return (
        <div>
            <AuthResourcesComponent/>
        </div>
    );
};

export default AuthResourcesPage;