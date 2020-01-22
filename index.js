'use strict';

const vehicleClass = require('./vehicle-class.js');
const VehicleConstructor = require('./vehicle-constructor.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const mazdaClass = new vehicleClass('Mazda 3');
mazdaClass.drive();
mazdaClass.stop();

const harleyClass = new vehicleClass('Harley');
harleyClass.drive();
harleyClass.stop();
