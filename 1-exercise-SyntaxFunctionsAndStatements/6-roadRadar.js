function roadRadar(speed, area) {
    let speedLimit = 0
    let difference

    const status = function(overSpeed) {
        if (overSpeed <= 20) {
            return "speeding"
        } else if (overSpeed <= 40) {
            return "excessive speeding"
        } else {
            return "reckless driving"
        }
    }
   
    switch (area) {
        
        case "residential": 
        speedLimit = 20
        difference = speed - speedLimit


        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status(difference)}`);
        }
            break;

        case "city": 
        speedLimit = 50
        difference = speed - speedLimit


        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status(difference)}`);
        }
            break;

        case "interstate": 
        speedLimit = 90
        difference = speed - speedLimit
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status(difference)}`);
        }
            break;

        case "motorway": 
        speedLimit = 130
        difference = speed - speedLimit

        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status(difference)}`);
        }
            break;
    }
}
roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')