const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};


SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-families-ready', (event) => {
    const allInstrumentFamilies = event.detail;
    this.populate(allInstrumentFamilies);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectedView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function(instrumentsData){
  instrumentsData.forEach((instrumentFamily, index) => {
    const option = document.createElement('option');
    option.textContent = instrumentFamily.name;
    option.value = index;
    this.element.appendChild(option);
  });
};



module.exports = SelectView;
