var username;
console.log(username);

// username = "Adrian";

var username = prompt("What is your name?");

console.log(username);
document.write("<p>Hi, " + username + ". Welcome to Bee Conscious!</p>");

var wantsToKnow = prompt("Did you know our worlds bee's are dying off?");

if (wantsToKnow === "Yes" || wantsToKnow === "Okay" || wantsToKnow === "Ok") {
document.write("<p>Find resources how you can get more envolved!</p>")
} else  {
document.write("<p>Check our education and resource section to see what is happening and how you can help!</p>")
}

var wantToDonate = prompt("Would you like to Donate to save countless lives of Bees?");

if (wantToDonate === 'Yes' || wantToDonate === 'yes' || wantToDonate === 'Ok' || wantToDonate === 'Okay' || wantToDonate === 'okay' || wantToDonate === 'ok') {
  document.write("<p>Thank you for being so amazing!</p>")
}  else  { 
  document.write("<p>You must really not like flowers 80% of flowers rely on bees, 70 of 100 top produce relies on bees! What is your problem? </p>")
}

var wantsrandomFact = prompt("Do you want to know a random bee fact?");

if (wantsrandomFact === 'Yes' || wantsrandomFact === 'yes' || wantsrandomFact === 'Ok' || wantsrandomFact === 'Okay' || wantsrandomFact === 'okay' || wantsrandomFact === 'ok') {
document.write("<p>Honey Bee hives will fly 90,000 miles, equivalent of three orbits around the earth, to collect 2.2 pounds of nectar to produce honey</p>")

}  else { document.write("<p>Honeybees communicate with each other by dancing</p>")
}