'use strict';

class Car {
    constructor(name){
        this.name = name
    }
    drive(){
        return 'Moving Forward';
    }
}

class Vehicle extends Car {
    stop(){
        return 'Stopping';
    }
    run(){
        super.drive();
    }
}

class Motorcycle extends Car{
    stop(){
        return 'Stopping';
    }
    run(){
        super.drive();
    }

}

module.exports = Car;