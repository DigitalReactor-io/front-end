import Ember from 'ember';

const MIN_PASSWORD_LENGTH = 5;
const USER_REGEXP_CONDITION = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var isValidPassword = function (password) {
    return password !== undefined && password.length > MIN_PASSWORD_LENGTH;
};
var isValidEmail = function (email) {
    return USER_REGEXP_CONDITION.test(email);
};

export default Ember.Component.extend({
    sending: false,
    warning: {
        invalidEmail: false,
        invalidPassword: false
    },
    actions: {
        validationAndHandle(user) {
            if (isValidEmail(user.email)) {
                this.set('warning.invalidEmail', false);
            } else {
                this.set('warning.invalidEmail', true);
            }
            if (isValidPassword(user.password)) {
                this.set('warning.invalidPassword', false);
            } else {
                this.set('warning.invalidPassword', true);
            }
            if (!this.warning.invalidEmail && !this.warning.invalidPassword) {
                this.set('sending', true);
                this.sendAction('handlerUser', user)
            }
        }
    }
});
