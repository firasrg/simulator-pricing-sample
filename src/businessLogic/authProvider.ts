function executeAsync(callback: VoidFunction) {
    setTimeout(callback, 200);
}

const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = true;
        executeAsync(callback); // fake async
    },
    signout(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = false;
        executeAsync(callback);
    },
};

export { fakeAuthProvider };