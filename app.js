let superheroData = [
  {name: 'Superman', phone_num: '1-800-IMSUPER', comic_affil: 'DC Comics', photo_url: 'http://static.comicvine.com/uploads/original/11111/111113523/3605753-1936874063-31646.png'},
  {name: 'Batman', phone_num: '1-800-BATCALL', comic_affil: 'DC Comics', photo_url: 'http://cartoonbros.com/wp-content/uploads/2016/05/Batman-4.jpg'},
  {name: 'Spiderman', phone_num: '1-800-SPIDERS', comic_affil: 'Marvel', photo_url: 'http://static.srcdn.com/wp-content/uploads/Spider-Man-MCU-Rumors.jpg'},
  {name: 'The Flash', phone_num: '1-800-TOOFAST', comic_affil: 'DC Comics', photo_url: 'http://sectordefinition.com/wp-content/uploads/2015/09/barry-allen.jpg'},
  {name: 'Wonder Woman', phone_num: '1-800-WOMANLY', comic_affil: 'DC Comics', photo_url: 'https://upload.wikimedia.org/wikipedia/en/b/b5/WonderWomanNew52.jpg'},
  {name: 'Thor', phone_num: '1-800-AAARGHH', comic_affil: 'Marvel', photo_url: 'https://s-media-cache-ak0.pinimg.com/originals/5a/44/d6/5a44d6529f78b2c0a3459983d5c3bfef.jpg'},
  {name: 'Captain America', phone_num: '1-800-AMERICA', comic_affil: 'Marvel', photo_url: 'http://www.dailywire.com/sites/default/files/uploads/2016/05/4600115-4965840965-45196.jpg'}
]

angular
  .module('superheroApp', [])
  .controller('superheroCtrl', [superheroController])

  function superheroController () {
    this.superheroes = superheroData;
  }
