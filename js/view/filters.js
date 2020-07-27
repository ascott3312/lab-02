'use strict';
 
function renderFilters() {
  // Setup Creature filter
  Creature.keyword.sort();
  Creature.keyword.forEach(Creature => {
    const $option = $('<option>').text(Creature).attr('value',Creature);
    $('keyword-select').append($option);
  });
 
  // Setup page filter
  $('#pageCount').text(Creature.numPages);
  for (let i = 1; i <= Creature.numPages; i++) {
    const $option = $('<option>').text(i).attr('value', i);
    $('page-filter').append($option);
  }
}