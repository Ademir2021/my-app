export type TUser = {
    id?:number
    login:string | any
    password:string
    role:UserRole
}

export enum UserRole  {
    ADMIN = "admin",
    USER ="user"
 }

export type TUserGithub = {
    user:{
        name:string
        image:string
    }
}