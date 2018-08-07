const Instruments = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentDetailView = require('./views/instrument_detail_view.js');


document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const instrumentDiv = document.querySelector('div#instrument-info');
  const instrumentInfoDisplay = new InstrumentDetailView(instrumentDiv);
  instrumentInfoDisplay.bindEvents();

  const instrumentDataSource = new Instruments();
  instrumentDataSource.bindEvents();

});
