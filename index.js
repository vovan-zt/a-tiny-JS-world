// const dog = {
//    species: "dog",
//    name: "Rasti",
//    gender: "male",
//    legs: 4,
//    hands: 0,
//    saying: "woof-woof!",
// };
   
// const cat = {
//    species: "cat",
//    name: "Luna",
//    gender: "female",
//    legs: 4,
//    hands: 0,
//    saying: "mur",
// };
   
// const woman = {
//    species: "human",
//    name: "Lena",
//    lastName: 'Jons',
//    children: 2,
//    gender: "female",
//    legs: 2,
//    hands: 2,
//    saying: "Hello",
// };
   
// const man = {
//    species: "human",
//    name: "Alex",
//    gender: "male",
//    legs: 2,
//    hands: 2,
//    saying: "I want to sleep",
// };
   
// const catWoman = {
//    species: "catwoman",
//    name: "Selina",
//    gender: "female",
//    legs: 2,
//    hands: 2,
//    saying: cat.saying,
// };

// const WorldInhabitant = [dog, cat, woman, man, catWoman];

// const  WorldInhabitantKeys =  ['species', 'name', 'gender', 'legs', 'hands', 'saying'];

// const WorldInhabitantPrint = WorldInhabitant.map(inhabitant => WorldInhabitantKeys.map(meaning => inhabitant[meaning]));

// WorldInhabitantPrint.forEach(inhabitant => {
//    print(inhabitant.join('; '))
// });

class WorldInhabitant {
   constructor(species, name, gender, saying) {
      this.species = species;
      this.name = name;
      this.gender = gender;
      this.saying = saying;
      this.prop = [species, name, gender, saying];
   }

   getMeaning() {
      return this.prop.map(meaning => meaning);
   }    
}

class Human extends WorldInhabitant { 
   constructor(species, name, gender, saying, legs = 2, hands = 2, friends = '') {
      super(species, name, gender, saying);
      this.legs = legs;
      this.hands = hands;
      this.prop = [species, name, gender, saying, legs, hands, friends];
   }
}

class Animal extends WorldInhabitant { 
   constructor(species, name, gender, saying, paws = 4) {
      super(species, name, gender, saying);
      this.paws = paws;
      this.prop = [species, name, gender, saying, paws];
   }
}

 const man = new Human('human', 'Jon', 'male', 'I want to sleep');

 const woman = new Human('human', 'Lena', 'female', 'Hello', 2, 2, man.name );
 
 const cat = new Animal('cat', 'Luna', 'female','murrr');
  
 const dog = new Animal('dog','Rasti','male','woof-woof');

 const catWoman = new Human('catwoman','Selina', 'female', cat.saying);

 [man, woman, cat, dog, catWoman].forEach(inhabitant => print(inhabitant.getMeaning().join('; ')))
