const { nanoid } = require('nanoid')
const carCollection = require('../data/carCollection.json')



function create(cars, carName){
    const car = { 
        name: carName,
        id: nanoid(4),
        points: carCollection[carName] || 112233,
     }
    cars.push(car)
    return cars
}



function index(cars){
    return cars.map((car) => car.id + ' ' + car.name).join('\n')
  }
  


  function show(cars, carId){
    const car = cars.find((car) => car.id === carId);
    return car.id + ' ' + car.name + ' ' + car.points + ' points'
  }



const inform = console.log



function destroy(cars, carId){
    const index = cars.findIndex((car) => car.id === carId);
    if(index > -1){
      cars.splice(index, 1);
      inform('Car successfully removed from this collection');
      return cars;
    }else{
      inform('Car not found. No action taken');
      return cars;
    }
  }


  function edit(cars, carId, updatedCar) {
    const index = cars.findIndex((car) => car.id === carId);
    if (index > -1) {
      cars[index].id = carId;
      cars[index].name = updatedCar;
      cars[index].points = carCollection[updatedCar] || 112233;
      inform('Car successfully updated');
      return cars;
    } else {
      inform('Car not found. No action taken');
      return cars;
    }
  }

  function score(cars) {
    return cars.reduce((acc, current) => acc + current.points, 0);
  }


module.exports = {
    create,
    index,
    show,
    destroy,
    edit,
    score
  };