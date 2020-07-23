'use strict';

$(() => {
  const ajaxSettings = { method: 'get', dataType: 'json' };
  $.ajax('./datafiles/page-1.json', ajaxSettings)
    .then((data) => {
      const arrayOfCreatures = data;
      arrayOfCreatures.forEach((creature) => {
        Creature.all.push(new Creature(creature));
      });
    })
    .then(() => {
      renderCreature();
    });
});
function Creature(creature) {
    this.imgURL = creature.image_url;
    this.getTitle = creature.title;
    this.getDescription= creature.description;
}

Creature.all = [];

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
  var keywordList = document.getElementById('keyword-select')
  
  for(var i = 0; i < all.length;i++){
    var keyword = document.createElement('option');
    keyword.textContent = all.[i].keyword;
    keywordList.appendChild(keyword);
  }
}
fillKeywordDropdown();