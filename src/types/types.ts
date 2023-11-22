export interface UserBaseI {
    email: string
    username: string
    isAdmin: boolean
    bannersIDs: string[]
}

export interface NewUserReqI extends UserBaseI {
    password: string
}

export interface NewUserDBI extends UserBaseI {
    passwordHash: string
}

export interface UserI extends NewUserDBI {
    _id: string
}

export interface NewBannerReqI {
    productID: string
    title: string
    description: string
    imageURL: string
    productURL: string
    note: string
}

export interface NewBannerI extends NewBannerReqI {
    authorID: string
}

export interface BannerI extends NewBannerI {
    _id: string
}