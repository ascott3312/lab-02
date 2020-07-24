'use strict';
function handleFilters() { 
  // Handles nationality filter
  $('#nationality-filter').on('change', function () {
    if ($(this).val() !== '') {
      $(this).parent().siblings().css('visibility', 'hidden');
      $('.person').hide();
      $(`.person[data-nationality*="${$(this).val()}"]`).fadeIn();
    } else {
      $('#page-filter').val(1);
      $(this).parent().siblings().css('visibility', 'visible');
      showPeople(1);
    }
  });
 
  // Handles page filter
  $('#page-filter').on('change', function () {
    $('#nationality-filter').val('');
    showPeople($(this).val());
  });
}
 
function showPeople(page) {
  $('.person').hide();
  let startAt = Person.peoplePerPage * (page - 1);
  let endAt = startAt + Person.peoplePerPage > Person.all.length ? Person.all.length : startAt + Person.peoplePerPage;
 
  //Setup viewing
  $('#firstShowing').text(startAt + 1);
  $('#lastShowing').text(endAt);
 
  let subset =  $('.person').slice(startAt, endAt);
  subset.fadeIn();
}