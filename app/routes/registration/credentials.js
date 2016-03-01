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

           /* $.ajax({
                url: 'http://localhost:8080/registration/credentials',
                type: 'post',
                headers: {
                    name: 'tom',
                    password: 'bob'
                },
                dataType: 'json',
                success: function (data) {
                    console.info(data);
                }
            });*/
            debugger;
        }
    }
});
