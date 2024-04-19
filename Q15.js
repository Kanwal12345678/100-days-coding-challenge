"use strict";
let GuestLIst = ["Billgates", "Ameen alam", "Bilal khan", "Areeba memon"];
let WhoDontCome = GuestLIst[3];
console.log(WhoDontCome, "cant make it");
GuestLIst.splice(3, 4, "Ubaid");
GuestLIst.forEach(GUest => console.log(`Hello ${GUest}, Would you like to have dinner with me?`));
