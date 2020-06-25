'use strict';

document.querySelector('.map').classList.remove('map--faded');

var mapPinBlock = document.querySelector('.map__pins');
var mapPinTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

var PINS_QUANTITY = 8;
var AVATAR = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];
var TITLE_OFFER = ['Offer1', 'Offer2', 'Offer3', 'Offer4', 'Offer5', 'Offer6', 'Offer7', 'Offer8'];
var ADDRESS_OFFER = ['400, 350', '500, 180', '700, 230', '900, 240', '560, 305', '640, 330', '620, 205', '230, 195'];
var PRICE_OFFER = [150024, 340054, 280040, 190000, 525000, 198200, 928399, 262726];
var TYPE_OFFER = ['palace', 'flat', 'house', 'bungalo'];
var ROOMS_OFFER = [1, 2, 3, 4];
var GUESTS_OFFER = [1, 2, 3, 4];
var CHECKIN = ['12:00', '13:00', '14:00'];
var CHECKOUT = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var DESCRIPTION_OFFER = ['Description Offer1', 'Description Offer2', 'Description Offer3', 'Description Offer4', 'Description Offer5', 'Description Offer6', 'Description Offer7', 'Description Offer8'];
var PHOTOS_OFFER = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var LOCATION_X = [134, 223, 391, 202, 384, 183, 673, 594];
var LOCATION_Y = [34, 23, 191, 202, 384, 183, 273, 494];

var randomData = function (arrayName) {
  return Math.floor(Math.random() * arrayName.length);
};

var createPin = function (avatar, title, address, price, type, rooms, guests, checkin, checkout, features, description, photos, x, y, randomFunc) {

  var newOffer = {
    author: {
      avatar: avatar[randomFunc(avatar)]
    },
    offer: {
      title: title[randomFunc(title)],
      address: address[randomFunc(address)],
      price: price[randomFunc(price)],
      type: type[randomFunc(type)],
      rooms: rooms[randomFunc(rooms)],
      guests: guests[randomFunc(guests)],
      checkin: checkin[randomFunc(checkin)],
      checkout: checkout[randomFunc(checkout)],
      features: features[randomFunc(features)],
      description: description[randomFunc(description)],
      photos: photos[randomFunc(photos)]
    },
    location: {
      x: x[randomFunc(x)],
      y: y[randomFunc(y)]
    }
  };

  return newOffer;
};

var createMapPinsArray = function (pinlength, avatar, title, address, price, type, rooms, guests, checkin, checkout, features, description, photos, x, y, randomFunc) {
  for (var i = 1, arr = []; i <= pinlength; i++) {
    arr.push(createPin(avatar, title, address, price, type, rooms, guests, checkin, checkout, features, description, photos, x, y, randomFunc));
  }
  return arr;
};

var mapPins = createMapPinsArray(PINS_QUANTITY, AVATAR, TITLE_OFFER, ADDRESS_OFFER, PRICE_OFFER, TYPE_OFFER, ROOMS_OFFER, GUESTS_OFFER, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION_OFFER, PHOTOS_OFFER, LOCATION_X, LOCATION_Y, randomData);

var fragmentMapPinBlock = document.createDocumentFragment();

for (var i = 0; i < mapPins.length; i++) {
  var pinElement = mapPinTemplate.cloneNode(true);
  pinElement.querySelector('img').alt = mapPins[i].offer.title;
  pinElement.querySelector('img').src = mapPins[i].author.avatar;
  pinElement.style.left = mapPins[i].location.x + 'px';
  pinElement.style.top = mapPins[i].location.y + 'px';

  fragmentMapPinBlock.appendChild(pinElement);
}

mapPinBlock.appendChild(fragmentMapPinBlock);
