import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {};
    },
    actions: {
        sendCredentials(model){
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
