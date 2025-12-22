import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";
import {Outlet} from "react-router";

const PaginationLayout = () => {
    return (
        <div>
            <Outlet/>
            <PaginationComponent/>
        </div>
    );
};

export default PaginationLayout;