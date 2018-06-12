import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        if (!localStorage.getItem('token')) {
            this.transitionTo('login');
        }
        return this.get('store').findAll('tile');
    }
});
