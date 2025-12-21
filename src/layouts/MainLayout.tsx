import PaginationComponent from "../component/PaginationComponent/PaginationComponent.tsx";
import SomeComponent from "../component/some-component/SomeComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            <SomeComponent/>
            some text
            <PaginationComponent/>
        </div>
    );
};

export default MainLayout;