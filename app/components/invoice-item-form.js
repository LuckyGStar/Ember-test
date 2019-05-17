
import Component from '@ember/component';

export default Component.extend({

buttonLabel: 'Save',

actions: {

submitForm(param) {
  this.sendAction('action', param);
}

}
});
