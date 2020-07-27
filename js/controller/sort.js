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
    else if (sortBy === 'horns') {
      sortNumerical($('.person'));
    }
    else if (sortBy === 'horns-rev') {
      sortReverseNumerical($('.person'));
    }
  //   showPeople(1);
  // });
}
}
function sortAlphabetical() {
  $('#sort-by').sort((a, b) => {
    let result;
    if (($(b).data('title').toLowerCase()) < ($(a).data('title').toLowerCase())) {
      result = 1;
    }
    else if (($(b).data('title').toLowerCase()) > ($(a).data('title').toLowerCase())) {
      result = -1;
    }
    else {
      if (($(b).data('title').toLowerCase()) < ($(a).data('title').toLowerCase())) {
        result = 1;
      }
      else if (($(b).data('title').toLowerCase()) > ($(a).data('title').toLowerCase())) {
        result = -1;
      }
      else {
        result = 0;
      }
    }
    return result;
}};
function sortReverseAlphabetical() {
  $('#sort-by').sort((a, b) => {
    let result;
    if (($(b).data('title').toLowerCase()) < ($(a).data('title').toLowerCase())) {
      result = -1;
    }
    else if (($(b).data('title').toLowerCase()) > ($(a).data('title').toLowerCase())) {
      result = 1;
    }
    else {
      if (($(b).data('keyword').toLowerCase()) < ($(a).data('keyword').toLowerCase())) {
        result = -1;
      }
      else if (($(b).data('keywprd').toLowerCase()) > ($(a).data('keyword').toLowerCase())) {
        result = 1;
      }
      else {
        result = 0;
      }
    }
    return result;
}};
function sortNumerical(arr) {
  $('#sort-by').sort((a, b) => {
    return ($(b).data('horns')) < ($(a).data('horns')) ? 1 : -1;
  }).appendTo('#photo-gallery');
}	
function sortReverseNumerical(arr) {
  $('#sort-by').sort((a, b) => {
    return ($(b).data('horns')) > ($(a).data('horns')) ? 1 : -1;
  }).appendTo('#photo-gallery');
}