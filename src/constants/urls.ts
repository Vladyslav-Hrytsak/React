const baseUrl = 'https://jsonplaceholder.typicode.com'

export const urls = {
    users: {
        usersUrl: `${baseUrl}/users`,
        userById: (id: string) => `${baseUrl}/users/${id}`
    },

    posts: {
        postsUrl: `${baseUrl}/posts`,
        postById: (id: number) => `${baseUrl}/posts/${id}`,
        userPostbyId: (id: number) => `${baseUrl}/posts?userId=${id}`
    },

    comments: {
        commentsUrl: `${baseUrl}/comments`
    }
}
