const baseUrl = 'https://jsonplaceholder.typicode.com'

export const urls = {
    users:{
        usersUrl: `${baseUrl}/users`,

        userById: (id:number) =>{
            return `${baseUrl}/${id}`
        }
    },

    posts:{
        postsUrl: `${baseUrl}/posts`
    },

    comments:{
        commentsUrl: `${baseUrl}/comments`
    }

}