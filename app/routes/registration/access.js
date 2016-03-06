import Ember from 'ember';

const APPLICATION_ID = 'b26e324d5a134168b090b3f23e77a0e7';

export default Ember.Route.extend({
    actions: {
        getAccess(model){
            window.location.replace("https://oauth.yandex.ru/authorize?response_type=code&client_id=" + APPLICATION_ID);
        }
    }
});
