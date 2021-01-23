
 
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

      // Passenger 1 variables
      let passenger1Name
      let passenger1Phone
      let passenger1NumberOfPassengers 
      let passenger1PickupAddressLine1
      let passenger1PickupAddressLine2
      let passenger1DropoffAddressLine1 
      let passenger1DropoffAddressLine2
    
      // Passenger 2 variables
      let passenger2Name
      let passenger2Phone
      let passenger2NumberOfPassengers 
      let passenger2PickupAddressLine1
      let passenger2PickupAddressLine2
      let passenger2DropoffAddressLine1 
      let passenger2DropoffAddressLine2

      // Passenger 3 variables
      let passenger3Name
      let passenger3Phone
      let passenger3NumberOfPassengers 
      let passenger3PickupAddressLine1
      let passenger3PickupAddressLine2
      let passenger3DropoffAddressLine1 
      let passenger3DropoffAddressLine2

      let levelOfService

      let purpleRequested

      let numberRides

    
    function pageLoad() {

    console.log(ride)
    
    numberRides = ride.length
    console.log(ride.length)

  if (numberRides == 1) {
    passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`,
    passenger1Phone = ride[0].passengerDetails.phoneNumber,
    passenger1NumberOfPassengers = ride[0].numberOfPassengers,  
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address,
    passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`,
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address,
    passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`
  } else if (numberRides == 2) {
    passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`,
    passenger1Phone = ride[0].passengerDetails.phoneNumber,
    passenger1NumberOfPassengers = ride[0].numberOfPassengers,  
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address,
    passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`,
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address,
    passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`,
    passenger2Name = `${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}`,
    passenger2Phone = ride[1].passengerDetails.phoneNumber,
    passenger2NumberOfPassengers = ride[1].numberOfPassengers,
    passenger2PickupAddressLine1 = ride[1].pickupLocation.address,
    passenger2PickupAddressLine2 = `${ride[1].pickupLocation.city}, ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}`,
    passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address,
    passenger2DropoffAddressLine2 = `${ride[1].dropoffLocation.city}, ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}`
  } else {
    passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}`,
    passenger1Phone = ride[0].passengerDetails.phoneNumber,
    passenger1NumberOfPassengers = ride[0].numberOfPassengers,  
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address,
    passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`,
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address,
    passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`,
    passenger2Name = `${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}`,
    passenger2Phone = ride[1].passengerDetails.phoneNumber,
    passenger2NumberOfPassengers = ride[1].numberOfPassengers,
    passenger2PickupAddressLine1 = ride[1].pickupLocation.address,
    passenger2PickupAddressLine2 = `${ride[1].pickupLocation.city}, ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}`,
    passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address,
    passenger2DropoffAddressLine2 = `${ride[1].dropoffLocation.city}, ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}`,
    passenger3Name = `${ride[2].passengerDetails.first} ${ride[2].passengerDetails.last}`,
    passenger3Phone = ride[2].passengerDetails.phoneNumber,
    passenger3NumberOfPassengers = ride[2].numberOfPassengers, 
    passenger3PickupAddressLine1 = ride[2].pickupLocation.address,
    passenger3PickupAddressLine2 = `${ride[2].pickupLocation.city}, ${ride[2].pickupLocation.state} ${ride[2].pickupLocation.zip}`,
    passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address,
    passenger3DropoffAddressLine2 = `${ride[2].dropoffLocation.city}, ${ride[2].dropoffLocation.state} ${ride[2].dropoffLocation.zip}`
  }

  purpleRequested = ride.purpleRequested
  
  if (numberRides > 1) {
    levelOfService = 'Noober Pool'
  } else if (purpleRequested = true) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassenger > 3 || ride[1].numberOfPassenger > 3  || ride[2].numberOfPassenger > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }

  console.log(levelOfService)


    // // Passenger 1 variables
    // let passenger1Name = `${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}` 
    // let passenger1Phone = ride[0].passengerDetails.phoneNumber
    // let passenger1NumberOfPassengers = ride[0].numberOfPassengers 
    // let passenger1PickupAddressLine1 = ride[0].pickupLocation.address
    // let passenger1PickupAddressLine2 = `${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}`
    // let passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
    // let passenger1DropoffAddressLine2 = `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}`
  
    // // Passenger 2 variables
    // let passenger2Name = `${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}` 
    // let passenger2Phone = ride[1].passengerDetails.phoneNumber
    // let passenger2NumberOfPassengers = ride[1].numberOfPassengers 
    // let passenger2PickupAddressLine1 = ride[1].pickupLocation.address
    // let passenger2PickupAddressLine2 = `${ride[1].pickupLocation.city}, ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}`
    // let passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address
    // let passenger2DropoffAddressLine2 = `${ride[1].dropoffLocation.city}, ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}`
  
    // // Passenger 3 variables
    // let passenger3Name = `${ride[2].passengerDetails.first} ${ride[2].passengerDetails.last}` 
    // let passenger3Phone = ride[2].passengerDetails.phoneNumber
    // let passenger3NumberOfPassengers = ride[2].numberOfPassengers 
    // let passenger3PickupAddressLine1 = ride[2].pickupLocation.address
    // let passenger3PickupAddressLine2 = `${ride[2].pickupLocation.city}, ${ride[2].pickupLocation.state} ${ride[2].pickupLocation.zip}`
    // let passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address
    // let passenger3DropoffAddressLine2 = `${ride[2].dropoffLocation.city}, ${ride[2].dropoffLocation.state} ${ride[2].dropoffLocation.zip}`
  





  //passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  //passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2
  
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆



  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array

}