
export interface IUserInfo {
    firstName: string;
    lastName: string;
    jobTitle: string;
    avatar: string;
    phoneNumber: string;
}

export interface IUserModel {
    id: number;
    username: string;
    email: string;
    info: IUserInfo;
}
        