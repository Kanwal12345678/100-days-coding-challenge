// created a guest list array //
let guestLIst = ["Billgates", "Ameen alam", "Bilal khan", "Areeba memon"];

// variables for those who dont come //
let WhoDontCOme = guestLIst[3];

// printing the name of guest who cant make it //
console.log(WhoDontCOme, "cant make it");

// modified the array (add/remove values) //
guestLIst.splice(3, 1, "Ubaid");

// printing the message for bigger table //
console.log("Good News! we have found a bigger table for Dinner.");

// added a new name on the beginning of the array //
guestLIst.unshift("Ali");

// added a new name on the ending of the array //
guestLIst.push("Hamza");

// getting a middle index for the guest list array //
let middleName = Math.floor(guestLIst.length / 2);

// added a new name on the middle of the array //
guestLIst.splice(middleName, 0, "Samina");

// printing message of updated list //
console.log("Updated list of our Guests:");

// Sending a invitation message to the guests one by one with their names //
guestLIst.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to have dinner with me? `));