'use strict';
$(() => {
  $('#photo-gallery').hide();
  const ajaxSettings = { method: 'get', dataType: 'json' };
  $(this).parent().siblings().css('visibility', 'hidden');
  $.ajax('./datafiles/page-1.json', ajaxSettings)
    .then((data) => {
      const arrayOfCreatures = data;
      $('#page-filter').val(1);
      $(this).parent().siblings().css('visibility', 'visible');
      showPeople(1);
  $.ajax('./datafiles/page-1.json', ajaxSettings)
      arrayOfCreatures.forEach((creature) => {
        Creature.all.push(new Creature(creature));
        $('#pageCount').text(Person.numPages);
        for (let i = 1; i <= Person.numPages; i++) {
          $('#page-filter').on('change', function () {
          showPeople($(this).val());
          });
          const $option = $('<option>').text(i).attr('value', i);
          $('#page-filter').append($option);	
          handleSort();
        }        	
  $.ajax('./data/dataSet.json', ajaxSettings)
  .then((data) => {
    const arrayOfNeighborhoods = data.neighborhoods;
    // console.log(arrayOfNeighborhoods);
    arrayOfNeighborhoods.forEach(neighborhoodObj => {
      Neighborhood.all.push(new Neighborhood(neighborhoodObj));
    });
    console.log(Neighborhood.all);
  });
});
  function Neighborhood(obj) {
    for(let key in obj) {
    this[key] = obj[key];
    }
    this.url = `https://www.google.com/maps/place/${this.name}+Neighborhood,${this.city}`;
    this.stars = function() {
    let result ='';
    let fullStar = '<i class="fa fa-star"></i>';
    let emptyStar = '<i class="fa fa-star-o"></i>';
    let halfStar = '<i class="fa fa-star-half-o"></i>';
    result += fullStar.repeat(this.rating);
    result += this.rating % 1 !== 0 ? halfStar : '';
    result += emptyStar.repeat(5-this.rating);
    return result + ' (' + this.rating + ')';
  };
}
Neighborhood.all = [];
Neighborhood.prototype.render = function() {
  const templateHTML = $('#neighborhood-template').html();
  const renderedHTML = Mustache.render(templateHTML, this);
  return renderedHTML;
};
function renderNeighborhoods() {
  Neighborhood.all.forEach(neighborhood => $('#neighborhoods').append(neighborhood.render()));
}
.then(
    $.ajax('./datafiles/page-2.json', ajaxSettings) 
      .then(data => { 
        const arrayOfPeople = data.results; 
        arrayOfPeople.forEach(person => { 
          const actualPerson = new Person(person); 
          Person.all.push(actualPerson); 
          Person.peoplePerPage = 12;
          Person.numPages;  
        }); 
      })
  )
  .then(() => { 
      Person.numPages = Math.ceil(Person.all.length / Person.peoplePerPage);
      renderPeople();
      renderCreature();
      $('.spinner').fadeOut();
      $('#photo-gallery').fadeIn();
      fillKeywordDropdown();
    });
});
function Creature(creature) {
    this.imgURL = creature.image_url;
    this.getTitle = creature.title;
    this.getDescription= creature.description;
    this.keyword = creature.keyword;
    if(Creature.keyword.indexOf(this.keyword) < 0) {
      Creature.keyword.push(this.keyword);
    }
}
Creature.all = [];
Creature.keyword = [];
Creature.prototype.render = function () {
  const templateHTML = $('#photo-template').html();
  const renderedHTML = Mustache.render(templateHTML, this);
  return renderedHTML;
};

function renderCreature() {
  Creature.all.forEach(creature => {
    $('#photo-gallary').append(creature.render());
    });
    $('.photo-template').remove();
}
function fillKeywordDropdown(){
  Creature.keyword.forEach(keyword => {
    const $option = $('<option>').text(keyword).attr('value', keyword);
    $('#keyword-select').append($option);
  });
}
