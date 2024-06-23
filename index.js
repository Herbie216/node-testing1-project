function trimProperties(obj) {
  let result = {}
  for (let prop in obj) {
    result[prop] = obj[prop].trim()
  }
  return result
}

function trimPropertiesMutation(obj) {
  for (let prop in obj) {
    obj[prop] = obj[prop].trim()
  }
  return obj
}

function findLargestInteger(integers) {
  let result = integers[0].integer;
  for (let i = 1; i < integers.length; i++) {
    if (integers[i].integer > result) {
      result = integers[i].integer;
    }
  }
  return result;
}

class Counter {

  constructor(initialNumber) {
    this.count = initialNumber
  }
  countDown() {
    return this.count > 0 ? this.count-- : 0
  }
}

class Seasons {
  constructor() {
    this.seasons = ['summer', 'fall', 'winter', 'spring'];
    this.currentSeason = 0;
  }

  next() {
    const result = this.seasons[this.currentSeason];
    this.currentSeason = (this.currentSeason + 1) % this.seasons.length;
    return result;
  }
}


class Car {
  constructor(name, tankSize, mpg) {
    this.name = name;
    this.odometer = 0;
    this.tankSize = tankSize;
    this.tank = tankSize;
    this.mpg = mpg;
  }

  drive(distance) {
    const maxDistance = this.tank * this.mpg;
    if (distance <= maxDistance) {
      this.odometer += distance;
      this.tank -= distance / this.mpg;
    } else {
      this.odometer += maxDistance;
      this.tank = 0;
    }
    return this.odometer;
  }

  refuel(gallons) {
    const roomInTank = this.tankSize - this.tank;
    this.tank += Math.min(gallons, roomInTank);
    return this.tank * this.mpg;
  }
}

async function isEvenNumberAsync(number) {
  return number % 2 === 0;
}


module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
