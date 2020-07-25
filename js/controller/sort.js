'use strict';
 
function handleSort() {
  $('#sort-by').on('change', function () {
    let sortBy = $(this).val();
    if (sortBy === 'alpha') {
      sortAlphabetical();
    }
    else if (sortBy === 'alpha-rev') {
      sortReverseAlphabetical();
    }
    else if (sortBy === 'age') {
      sortNumerical($('.person'));
    }
    else if (sortBy === 'age-rev') {
      sortReverseNumerical($('.person'));
    }
  //   showPeople(1);
  // });
}
}
function sortAlphabetical() {
  $('.person').sort((a, b) => {
    let result;
    if (($(b).data('lastname').toLowerCase()) < ($(a).data('lastname').toLowerCase())) {
      result = 1;
    }
    else if (($(b).data('lastname').toLowerCase()) > ($(a).data('lastname').toLowerCase())) {
      result = -1;
    }
    else {
      if (($(b).data('firstname').toLowerCase()) < ($(a).data('firstname').toLowerCase())) {
        result = 1;
      }
      else if (($(b).data('firstname').toLowerCase()) > ($(a).data('firstname').toLowerCase())) {
        result = -1;
      }
      else {
        result = 0;
      }
    }
    return result;
}};
function sortReverseAlphabetical() {
  $('.person').sort((a, b) => {
    let result;
    if (($(b).data('lastname').toLowerCase()) < ($(a).data('lastname').toLowerCase())) {
      result = -1;
    }
    else if (($(b).data('lastname').toLowerCase()) > ($(a).data('lastname').toLowerCase())) {
      result = 1;
    }
    else {
      if (($(b).data('firstname').toLowerCase()) < ($(a).data('firstname').toLowerCase())) {
        result = -1;
      }
      else if (($(b).data('firstname').toLowerCase()) > ($(a).data('firstname').toLowerCase())) {
        result = 1;
      }
      else {
        result = 0;
      }
    }
    return result;
}};
function sortNumerical(arr) {
  $('.person').sort((a, b) => {
    return ($(b).data('age')) < ($(a).data('age')) ? 1 : -1;
  }).appendTo('#photo-gallery');
}	
function sortReverseNumerical(arr) {
  $('.person').sort((a, b) => {
    return ($(b).data('age')) > ($(a).data('age')) ? 1 : -1;
  }).appendTo('#photo-gallery');
}