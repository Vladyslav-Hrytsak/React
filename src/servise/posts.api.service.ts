const baseUrl = import.meta.env.VITE_BASE_URL

export const getPost = async () => {
    return await fetch(`${baseUrl}/posts`, {})
        .then(res => res.json())
}