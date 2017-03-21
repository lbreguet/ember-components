import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: false,
  actions: {
    toggleListItem() {
      return this.toggleProperty('listItemCompleted');
    }
  }
});
