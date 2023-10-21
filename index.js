const { readJSONFile, writeJSONFile } = require("./src/helpers");


const {
    create,
    index,
    show,
    destroy,
    edit,
    score,
  } = require("./src/carController");

  const cars = readJSONFile("./data", "cars.json");
  const inform = console.log;

  function run() {
    const action = process.argv[2];
    const car = process.argv[3];
  
    let writeToFile = false;
    let updatedCars = [];

    switch (action) {
        case "index":
          const carsView = index(cars);
          inform(carsView);
          break;
        case "create":
          updatedCars = create(cars, car);
          writeToFile = true;
          break;
        case "show":
          const carView = show(cars, car);
          inform(carView);
          break;
        case "update":
          updatedCars = edit(cars, car, process.argv[4]);
          writeToFile = true;
          break;
        case "destroy":
          updatedCars = destroy(cars, car);
          writeToFile = true;
          break;
        case "score":
          inform(
            `Current points sum of all animals you've added to your database: ${score(
              cars
            )}`
          );
          break;
        default:
          inform("There was an error.");
      }
      if (writeToFile) {
        writeJSONFile("./data", "cars.json", updatedCars);
      }
    }
    
    run();
    
