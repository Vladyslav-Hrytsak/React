export interface IUserWithToken {
    id: number
    username: string
    password: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    accessToken: string
    refreshToken: string
}
