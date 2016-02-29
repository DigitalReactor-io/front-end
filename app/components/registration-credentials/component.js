import Ember from 'ember';

const MIN_PASSWORD_LENGTH = 5;
const MIN_USER_NAME = 3;
const USER_REGEXP_CONDITION = '[a-zA-Z0-9]+$';

var isValidPassword = function (password) {
    return password !== undefined && password.length > MIN_PASSWORD_LENGTH;
};
var isValidName = function (name) {
    let pattern = new RegExp(USER_REGEXP_CONDITION);
    return pattern.test(name) && name.length > MIN_USER_NAME;
};
var isNameFree = function (name) {
    //TODO должин быть внешним источником данных, а не захардкоженным путём
    let result = $.getJSON('http://localhost:8080/user/'+name);
};

export default Ember.Component.extend({
    sending: false,
    warning: {
        invalidLogin: false,
        invalidPassword: false,
        userAlreadyExist: false
    },
    actions: {
        sendCredentials(user) {
            if (isValidName(user.name)) {
                this.set('warning.invalidLogin', false);
            } else {
                this.set('warning.invalidLogin', this);
            }
            if (isValidPassword(user.password)) {
                this.set('warning.invalidPassword', false);
            } else {
                this.set('warning.invalidPassword', true);
            }
            if (isNameFree(user.name)) {
                this.set('warning.userAlreadyExist', false);
            } else {
                this.set('warning.userAlreadyExist', this);
            }

            if (!this.invalidLogin && !this.invalidPassword && !this.userAlreadyExist) {
                // this.set('sending', true);
            }
        }
    }
});
