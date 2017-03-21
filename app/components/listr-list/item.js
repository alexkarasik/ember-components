import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['itemDetailHidden'],
  itemDetailHidden: false,
  actions: {
    toggleItemDetail() {
      return this.toggleProperty('itemDetailHidden');
    },
  },
});
