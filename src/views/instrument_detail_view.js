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
  const listContainer = document.createElement('ul');
  header.textContent = `The family is ${instrumentFamily.name}`;
  paragraph.textContent = `${instrumentFamily.description}`;
  list.textContent = `${instrumentFamily.instruments}`;
  this.container.innerHTML = '';
  this.container.appendChild(header);
  this.container.appendChild(paragraph);
  this.container.appendChild(listContainer);

  instrumentFamily.instruments.forEach(element => {
    const instrumentItem = document.createElement('li');
    instrumentItem.textContent = element;
    listContainer.appendChild(instrumentItem);
  });
};

const list = document.createElement('ul');


module.exports = InstrumentDetailView;
