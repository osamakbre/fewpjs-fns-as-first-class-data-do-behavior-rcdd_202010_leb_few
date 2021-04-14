// wakeDog("Skippy","Welsh Corgi");
// leashDog("Boo Radley","Pibble" );
// walkToPark("Bunny","Labrador");
// walkHome("Santa Paws","Husky");
// throwFrisbee("Mary J. Blige", "Papillon");
// unleashDog("Lauren","Golden Retriever" );
// let routine =["Skippy","Welsh Corgi", "Lauren","Pibble","Bunny","Labrador", "Santa Paws", "Husky" , "Mary J. Blige", "Papillon","Lauren","dfas"  ];
function wakeDog(dogName, dogBreed) {
  let s= "Wake "+ dogName +" the "+ dogBreed;
  return s;}
function leashDog(dogName, dogBreed) {
  let s= "Leash "+ dogName +" the "+ dogBreed;
  return s;
}
function walkToPark(dogName, dogBreed) {
  let s= "Walk to the park with " +dogName+ " the " +dogBreed ;
  return s;
}
function throwFrisbee(dogName, dogBreed) {
  let s= "Throw the frisbee for "+ dogName+" the " +dogBreed;
  return s;
}
function walkHome(dogName, dogBreed) {
  let s= "Walk home with "+dogName +" the "+dogBreed;
  return s;
}
function unleashDog(dogName, dogBreed) {
  let s= "Unleash "+dogName+ " the " + dogBreed;
  return s;
}
// let array_of_function =
let routine =[
    wakeDog(dogName, dogBreed)
      {let s= 'Wake + $[dogName] + the + $[dogBreed]';
      return s;}
    ,
     function leashDog(dogName, dogBreed) {
    var s = 'Leash  + $[dogName] + the  + $[dogBreed]';
    return s;
      }
    ,
    function  walkToPark(dogName, dogBreed) {
      let s= 'Walk to the park with  +$[dogName]+  the  +$[dogBreed]' ;
      return s;
      }
    ,
    function throwFrisbee(dogName, dogBreed) {
      let s='Throw the frisbee for + $[dogName]+ the  +$[dogBreed]';
      return s;
      }
    ,
    function  walkHome(dogName, dogBreed) {
    let s= 'Walk home with +$[dogName] + the +$[dogBreed]';
    return s;
    }
    ,
    function unleashDog(dogName, dogBreed) {
      cponsole.log( 'Unleash + $[dogName]+  the  + $[dogBreed]');
      }
    ];