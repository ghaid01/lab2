'use strict';

class Car {
    constructor(name,wheels){
        this.name = name;
        this.wheels = wheels;
    }
    drive(){
        return 'Moving Forward';
    }
}

class Car extends Vehicle {
    stop(){
        return 'Stopping';
    }
    run(){
        super.drive();
    }
}

class Car extends Motorcycle{
    stop(){
        return 'Stopping';
    }
    run(){
        super.drive();
    }

}

module.exports = Car;