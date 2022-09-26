const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  const sorted = people.sort((a, b) => {
    // a.life = a.yearOfDeath - a.yearOfBirth;
    // b.life = b.yearOfDeath - b.yearOfBirth;

    // return a.life < b.life ? 1 : -1;
    // });
    // return console.log(people);
    // console.table(sorted);
    // };

    // const aLife = () => {
    // if (!a.yearOfDeath) {
    //   return currentYear - a.yearOfBirth;
    // }
    // return a.yearOfDeath - a.yearOfBirth;
    // };

    // const bLife = () => {
    // if (!b.yearOfDeath) {
    //   return currentYear - b.yearOfBirth;
    // }
    // return b.yearOfDeath - b.yearOfBirth;
    // };
    //
    //
    // if (!a.yearOfDeath) {
    //   const a.lived = currentYear - a.yearOfBirth;
    // } else {
    // const a.lived = a.yearOfDeath - a.yearOfBirth;
    // }

    // if (!b.yearOfDeath) {
    //   const b.lived = currentYear - b.yearOfBirth;
    // } else {
    // const b.lived = b.yearOfDeath - b.yearOfBirth;
    // }
    //
    // return aLife > bLife;

    const life = function (person) {
      if (!person.yearOfDeath) {
        return currentYear - person.yearOfBirth;
      }
      return person.yearOfDeath - person.yearOfBirth;
    };

    a.lived = life(a);
    b.lived = life(b);

    return a.lived < b.lived ? 1 : -1;
  });
  return sorted[0];
  // return console.log(currentYear);
  // return console.log()
};

// Do not edit below this line
module.exports = findTheOldest;
