function executeAsync(callback: VoidFunction) {
    setTimeout(callback, 200);
}

const tempAuthProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
        tempAuthProvider.isAuthenticated = true;
        executeAsync(callback); // fake async
    },
    signout(callback: VoidFunction) {
        tempAuthProvider.isAuthenticated = false;
        executeAsync(callback);
    },
};

export { tempAuthProvider };