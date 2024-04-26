// created a guest list array //
let guestLISt = ["Billgates", "Ameen alam", "Bilal khan", "Areeba memon"];

// variables for those who dont come //
let WhoDOntCOme = guestLISt[3];

// printing the name of guest who cant make it //
console.log(WhoDOntCOme, "cant make it");

// modified the array (add/remove values) //
guestLISt.splice(3, 1, "Ubaid");

// printing the message for bigger table //
console.log("Good News! we have found a bigger table for Dinner.");

// added a new name on the beginning of the array //
guestLISt.unshift("Ali");

// added a new name on the ending of the array //
guestLISt.push("Hamza");

// getting a middle index for the guest list array //
let middleNAme = Math.floor(guestLISt.length / 2);

// added a new name on the middle of the array //
guestLISt.splice(middleNAme, 0, "Samina");

// printing message of updated list //
console.log("Updated list of our Guests:");

// Sending a invitation message to the guests one by one with their names //
guestLISt.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to have dinner with me? `));

//information of guests
console.log("unfortunately, the new table wont arrive on time, so i can invite only two guests to dinner with me");

// removing guests from the list one by one until only two guests remain in the list //
while(guestLISt.length > 2) {
    let removedGuest = guestLISt.pop();
    console.log(`Sorry, ${removedGuest} i cant invite you to dinner`);
}

// printing updated list of guests //
console.log("Updated list of our last two Guests");
guestLISt.forEach(oneguest => console.log(`Luckily!! ${oneguest}, you are still invited to the dinner. `));

// removing last two guests from the list //
guestLISt.pop();
guestLISt.pop();

console.log("The list is empty:", guestLISt);