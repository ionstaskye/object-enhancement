const createInstructor = function(firstName, lastName)  {
    return{
        firstName,
        lastName
    }
}
let favoriteNumber = 42
//let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}
let instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!"},
      sayBye: function(){
        return this.firstName + " says bye!";
      }
    }
const createAnimal = function(species, verb, noise) {
    return{
    species,
    [verb](){
        return noise
    } 
}
}
