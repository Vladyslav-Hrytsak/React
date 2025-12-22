import {useSearchParams} from "react-router";


const PaginationComponent = () => {

        const [query, setQuery] = useSearchParams({page:'1'})
        let currentPage = Number(query.get('page'))




    return (
            <div>

                <button onClick={()=>{
                    if(currentPage>1){
                        setQuery({page:(--currentPage).toString()})
                    }
                }}>PREV</button>

                <button onClick={()=>{
                    if(currentPage){
                        setQuery({page:(++currentPage).toString()})
                    }
                }} >NEXT</button>


            </div>
        );
};

export default PaginationComponent;