const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};


SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-families-ready', (event) => {
    const allInstrumentFamilies = event.detail;
    this.populate(allInstrumentFamilies);
  });
};


module.exports = SelectView;
