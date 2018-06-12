import Component from '@ember/component';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
    router: service(),
    actions: {
        login() {
            var route = this.get('router');

            $.ajax({
                url: 'http://localhost:4000/authenticate',
                type: "POST",
                data: JSON.stringify({
                    username: this.get('username'),
                    password: this.get('password')
                }),
                beforeSend: function(request) {
                    request.setRequestHeader('content-type', 'application/json; charset=UTF-8');
                }
            }).then(function (resp) {
                localStorage.setItem('token', resp.token);
                route.transitionTo('index');
            }).catch(function () {
                // handle errors here
            });
        }
    }
});
