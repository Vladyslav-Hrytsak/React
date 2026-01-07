import type {IUser} from "../../model/IUser.ts";
import type {IPost} from "../../model/IPost.ts";
import type {IComments} from "../../model/IComments.ts";
import {type FC, useMemo} from "react";

interface ComplexComponentProps {
    users: IUser[],
    posts: IPost[],
    comments: IComments[]
}

const ComplexComponent: FC<ComplexComponentProps> = ({ users, posts, comments }) => {

    const complexData = useMemo(() => {

        return users.map(user => {

            const userPosts = posts.filter(post => post.userId === user.id);

            const postsWithComments = userPosts.map(post => {
                const postComments = comments.filter(
                    comment => comment.postId === post.id
                );

                return {
                    ...post,
                    comments: postComments
                };
            });

            return {
                ...user,
                posts: postsWithComments
            };
        });

    }, [users, posts, comments]);

    return (
        <div>
            {complexData.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>

                    {user.posts.map(post => (
                        <div key={post.id}>
                            <h4>{post.title}</h4>

                            {post.comments.map(comment => (
                                <p key={comment.id}>{comment.body}</p>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};


export default ComplexComponent;