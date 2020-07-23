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
  let $template = $('.photo-template').clone();
  $template.removeClass('photo-template');
  $template.find('.title').text(this.getTitle);
  $template.find('.creatureImage').attr('src', this.imgURL);
  $template.find('.creatureImage').attr('alt', this.getTitle);
  $template.find('.description').text(this.getDescription);
  return $template;
};

function renderCreature() {
  Creature.all.forEach(creature => {
      $('#photo-gallary').append(creature.render());
  });
  $('.photo-template').remove();
}

function fillKeywordDropdown(){
  var keywordList = document.getElementById('keyword-select')
  
  for(var i = 0; i < Creature.length;i++){
    var keyword = document.createElement('option');
    keyword.textContent = Creature[i].keyword;
    keywordList.appendChild(keyword);
  }
}
fillKeywordDropdown();