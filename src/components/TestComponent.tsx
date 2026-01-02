import {useFetch} from "../hooks/useFetch.tsx";

const TestComponent = () => {

    const posts = useFetch<{id:number, title: string}[]>('https://jsonplaceholder.typicode.com/posts',[])
    return (
        <div>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        {post.id}: {post.title}
                    </div>
                ))
            }
        </div>
    );
};

export default TestComponent;