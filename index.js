/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
class Resident {
   constructor(species, name, gender, legs, hands, paws, saying, friends) {
      this.species = species;
      this.name = name;
      this.gender = gender;
      this.legs = legs; 
      this.hands = hands;
      this.paws = paws;
      this.saying = saying;
      this.friends = friends; 
   }
   representing() {
      let speciesDiff;
      if(this.paws > 0) speciesDiff = `<b>${this.paws}</b> paws`;
      else speciesDiff = `<b>${this.legs}</b> legs and <b>${this.hands}</b> hands`;
      return `Wonderful creature - <b>${this.species}</b>, whose name is <b>${this.name}</b>! This member is the owner of ${speciesDiff}, usually the greeting is <i style="text-decoration:underline;"><b>${this.saying}</b></i> and friends of this inhabitant are <b>${this.friends.join(', ')}</b>.`;
   }
}

class CatWoman extends Resident {
   constructor(species, name, gender, legs, hands, paws, saying, friends, cat) {
      super(species, name, gender, legs, hands, paws, saying, friends);
      this.saying = cat.saying;
   }
}

const man = new Resident('human', 'Tom', 'male', 2, 2, 0, 'Hello Jenny!', ['Tom', 'Jenny', 'Rex', 'Selina']),
      women = new Resident('human', 'Jenny', 'female', 2, 2, 0, 'Hello Tom!', ['Tom', 'Rex', 'Felix']),
      dog = new Resident('dog', 'Rex', 'male', 0, 0, 4, 'woof-woof!', ['Tom', 'Jenny']),
      cat = new Resident('cat', 'Felix', 'male', 0, 0, 4, 'meow!', ['Tom', 'Jenny', 'Selina']),
      catWoman = new CatWoman('human', 'Selina', 'female', 2, 2, 0, cat, ['Tom', 'Felix'], cat),
      residents = [man, women, cat, dog, catWoman];
// ======== OUTPUT ========
/* Use print(message) for output.
Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

Message can contain HTML markup. You may also tweak index.html and/or styles.css.
However, please, REFRAIN from improving visuals at least until your code is reviewed
so code reviewers might focus on a single file that is index.js.
*/
residents.map(resident => print(resident.representing(), 'p'));
/* Print examples:
print('ABC');
print('<strong>ABC</strong>');
print('<strong>ABC</strong>', 'div');

print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
*/

