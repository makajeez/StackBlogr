export interface PostData {
    id: string,
    text: string,
    image: string,
    likes: number,
    link?: string,
    tags: string | string[] | undefined,
    publishDate: string,
    owner: IUser
}

export interface IUser {
    id?: string,
    title?: string,
    firstName?: string,
    lastName?: string,
    picture?: string,
}

export interface IComment {
    message: string,
    owner: IUser,
    post: string,
    publishDate: string,
}

export interface ReturnedData {
    data: Array<PostData>,
    total: number,
    page: number,
    limit: number
}
