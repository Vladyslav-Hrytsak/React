const baseUrl = 'https://jsonplaceholder.typicode.com'

export const urls = {
    users:{
        usersUrl: `${baseUrl}/users`,

        userById: (id:number) =>{
            return `${baseUrl}/${id}`
        }
    },

    posts:{
        postsUrl: `${baseUrl}/posts`,
        postById: (id:number) =>{return `${baseUrl}/${id}`},
        userPostbyId: (id:number) =>{return `${baseUrl}/posts?гserId=${id}`}
    },

    comments:{
        commentsUrl: `${baseUrl}/comments`
    }

}