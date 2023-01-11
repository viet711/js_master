'use strict';
const restaurant = {
    name : 'Nguyễn Tiến Việt',
    location : 'abcdef  , cde , xyz',
    categories : [ 'catalog', 'food', 'zip'],
    menu : ['abc ', 'bò', 'lợn'],
    mainmenu : [ 'rau', 'thị','cá'],
    openingHours:{
      thu :{
         open : 12,
         close : 22,

      },
      fri :{
         open : 11,
         close : 23,


      },
      sat:{
         open : 0,
         close : 24,
      },
    },
 order : function (starterIndex, mainIndex ){
    return [this.menu[mainIndex],  this.mainmenu] [mainIndex];

 },

};
