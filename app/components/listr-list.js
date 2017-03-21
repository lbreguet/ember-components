import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: true,
  actions: {
    toggleListDetail() {
      return this.toggleProperty('listDetailHidden');
    }
  }
});
