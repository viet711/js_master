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
const arr =[1,2,3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// const [x,y,Z] = arr;
// console.log(x,y,Z);
// console.log (arr);
// const [first, second] = restaurant. categories; 
// console.log(first, second);


 const [starter , main ] = restaurant.order(0,1);
 console.log(starter ,main);

 
 
