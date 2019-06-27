
// loops need three pieces of info
// where do we start
// when  do we keep looping
// how do we update the value each time

// var lightColor = prompt('what color is the light?');

// while (lightColor ===  'red') { // when do we enter/stay in the loop
//   console.log('Stop');
//   lightColor = prompt('what color is the light?'); // give us a chance to update the value
// } 

//   console.log('gooooooo!!!!!!')

// var (numberOfRooms > 0){
//     console.log('vacuum');
//     console.log('dust');
//     console.log('put things away');
//     numberOfRooms--;
//   }

// console.log('I am done cleaning!');

var numberOfRooms = prompt('Hey there. How many rooms do you need to clean?')

for (numberOfRooms; numberOfRooms > 0; numberOfRooms--) {
  console.log('vacuum');
  console.log('dust');
  console.log('put things away');
}

console.log('I am done cleaning!')