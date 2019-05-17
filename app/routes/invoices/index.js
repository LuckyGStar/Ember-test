import Route from '@ember/routing/route';

export default Route.extend({

  queryParams: {
    limit: { refreshModel: true },
    letter: { refreshModel: true }
  },

  model(params) {

    if (params.limit === 'all') {
      //return this.store.findAll('invoice');
      return [{
        amount: 40,
        date: '2018-05-04'
      }]
    }

    return this.store.query('invoice', {
      orderBy: 'name',
      startAt: params.letter,
      endAt: params.letter+"\uf8ff"
    });
  },

  actions: {

    deleteInvoice(invoice) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        invoice.destroyRecord();
      }
    }
  }

});
