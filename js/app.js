'use strict';

$(() => {
  const ajaxSettings = { method: 'get', dataType: 'json' };
  $.ajax('./data/page-1.json', ajaxSettings)
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
  $template.find('.creatureImage').attr('src', this.imageURL);
  $template.find('.creatureImage').attr('alt', this.getTitle);
  $template.find('.description').text(this.getDescription);
  return $template;
};

function renderCreature() {
  Creature.all.forEach(creature => {
      $('#photo-gallery').append(creature.render());
  });
  $('.photo-template').remove();
}