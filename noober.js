
 
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

      // // Passenger 1 variables
      // let passenger1Name
      // let passenger1Phone
      // let passenger1NumberOfPassengers 
      // let passenger1PickupAddressLine1
      // let passenger1PickupAddressLine2
      // let passenger1DropoffAddressLine1 
      // let passenger1DropoffAddressLine2
    
      // // Passenger 2 variables
      // let passenger2Name
      // let passenger2Phone
      // let passenger2NumberOfPassengers 
      // let passenger2PickupAddressLine1
      // let passenger2PickupAddressLine2
      // let passenger2DropoffAddressLine1 
      // let passenger2DropoffAddressLine2

      // // Passenger 3 variables
      // let passenger3Name
      // let passenger3Phone
      // let passenger3NumberOfPassengers 
      // let passenger3PickupAddressLine1
      // let passenger3PickupAddressLine2
      // let passenger3DropoffAddressLine1 
      // let passenger3DropoffAddressLine2

      // let levelOfService

      // let purpleRequested

      // let numberRides

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

  purpleRequested = ride[0].purpleRequested
    // It only is relevant for leg 0, since whenever there is more than 1 leg, then it Nober Pool should be shown anyways
  

  if (numberRides > 1) {
    levelOfService = 'Noober Pool'
  } else if (purpleRequested == true) {
    levelOfService = 'Noober Purple'
  } else if (passenger1NumberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }


  console.log(levelOfService)
  console.log(purpleRequested)

}