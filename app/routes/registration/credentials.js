import Ember from 'ember';

var isNameFree = function (name) {
    //TODO должин быть внешним источником данных, а не захардкоженным путём
    let result = $.getJSON('http://localhost:8080/user/' + name);

    return true;
};

export default Ember.Route.extend({
    model: function () {
        return {};
    },
    actions: {
        handlerUser(user){
            //TODO добавить проверку на существования пользователя
            $.ajax({
                url: 'http://localhost:8080/registration/credentials',
                type: 'post',
                headers: {
                    email: user.email,
                    password: user.password
                },
                dataType: 'json',
                success: function (data) {
                    console.info(data);
                },
                xhrFields: {
                    withCredentials: true
                }
            });

            this.transitionTo('registration.access');
        }
    }
});
