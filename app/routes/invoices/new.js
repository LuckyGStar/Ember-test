import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('invoice');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new invoice');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('invoices/form');
  },

  actions: {

    saveInvoice(newInvoice) {
      newInvoice.save().then(() => this.transitionTo('invoices'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
