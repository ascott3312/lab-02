'use strict';
 
function renderFilters() {
  // Setup nationality filter
  Person.allNationalities.sort();
  Person.allNationalities.forEach(nationality => {
    const $option = $('<option>').text(nationality).attr('value', nationality);
    $('#nationality-filter').append($option);
  });
 
  // Setup page filter
  $('#pageCount').text(Person.numPages);
  for (let i = 1; i <= Person.numPages; i++) {
    const $option = $('<option>').text(i).attr('value', i);
    $('#page-filter').append($option);
  }
}