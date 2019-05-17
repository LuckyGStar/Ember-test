import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('invoice', params.invoice_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit invoice');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('invoices/form');
  },

  actions: {

    saveInvoice(invoice) {
      invoice.save().then(() => this.transitionTo('invoices'));
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
