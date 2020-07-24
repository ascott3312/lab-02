'use strict';
 
function Person(person) {
  this.name = {
    first: person.name.first,
    last: person.name.last
  };
  this.image_url = person.picture.large;
  this.location = {
    city: person.location.city,
    state: person.location.state
  };
  this.fullName = () => `${this.name.first} ${this.name.last}`;
  this.nationality = person.nat;
  if(Person.allNationalities.indexOf(this.nationality) < 0) {
    Person.allNationalities.push(this.nationality);
  }
  this.age = person.dob.age;
}
 
Person.all = [];
Person.allNationalities = [];
Person.peoplePerPage = 12;
Person.numPages;
 
Person.prototype.render = function () {
  let $renderedPerson = $('.person-template').clone();
  $renderedPerson.removeClass('person-template');
  $renderedPerson.find('.fullName').text(this.fullName);
  $renderedPerson.find('.profileImage').attr('src', this.image_url);
  $renderedPerson.find('.profileImage').attr('alt', this.fullName);
  $renderedPerson.find('.location').text(`${this.location.city}, ${this.location.state}`);
  $renderedPerson.attr('data-nationality', this.nationality);
  $renderedPerson.attr('data-lastname', this.name.last);
  $renderedPerson.attr('data-first', this.name.first);
  $renderedPerson.attr('data-age', this.age);
  $renderedPerson.find('.age').text(this.age);
  return $renderedPerson;
};