(function () {
    app.controller('AuthController', [
        '$location',
        'msgs',
        'auth',
        AuthController
    ])

    function AuthController($location, msgs, auth) {
        const self = this;

        self.loginMode = true;

        self.changeMode = () => self.loginMode = !self.loginMode;

        self.login = () => {
            console.log(`Login... ${self.user.email}`);

            auth.login(self.user, err => err ? msgs.addError(err) : $location.path('/'));
        }

        self.signup = () => {
            console.log(`Login... ${self.user.email}`);

            auth.signup(self.user, err => err ? msgs.addError(err) : $location.path('/'));
        }

        self.getUser = () => auth.getUser();

        self.logout = function() {
            auth.logout(() => $location.path('/'));
        }
    }
    
})();