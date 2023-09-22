const animalA = {
  name: "Woolly mammoth",
  age: 8,
  weight: 4000,
  species: "Elephas primigenius",
  exctinctionDate: -2000,
};
const animalB = {
  name: "Pteranodon",
  age: 4,
  wight: 50,
  species: "Pteranodon longiceps",
  exctinctionDate: -100000,
};

const getAnimalSpecies = (animal) => {
  return animal.species;
};

// refactorizado: const getAnimalSpecies = (animal) => animal.species

const isExctinct = (animal) => {
  return animal.hasOwnProperty("exctinctionDate");
};

// console.log(isExctinct(animalA))

