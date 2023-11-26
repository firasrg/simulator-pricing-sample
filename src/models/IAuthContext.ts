export interface IAuthContext {
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}