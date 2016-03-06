import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function (transition) {
        $.ajax({
         url: 'http://localhost:8080/registration/token',
         type: 'post',
         headers: {
         code: transition.queryParams.code
         },
         dataType: 'json',
         success: function (data) {
         console.info(data);
         },
         xhrFields: {
         withCredentials: true
         }
         });
    },
    model(params) {
        console.log(params);
        return [
            {
                "name": 'site1.com',
                "id": 1234
            },
            {
                "name": 'site2.com',
                "id": 4321
            }
        ];
    }
});
