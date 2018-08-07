const PubSub = require('../helpers/pub_sub.js');

const InstrumentDetailView = function(container){
  this.container = container;
};

InstrumentDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentsFamilies:selected-instrument-ready', (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  });
};

InstrumentDetailView.prototype.render = function(instrumentFamily) {
  const header = document.createElement('h1');
  const paragraph = document.createElement('p');
  header.textContent = `The family is ${instrumentFamily.name}`;
  paragraph.textContent = `${instrumentFamily.description} ${instrumentFamily.instruments}`;
  this.container.innerHTML = '';
  this.container.appendChild(header);
  this.container.appendChild(paragraph);
};

module.exports = InstrumentDetailView;
