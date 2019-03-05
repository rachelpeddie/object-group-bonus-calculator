const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

/* The`name` property should contain the employee's name.
* The`bonusPercentage` property should contain the bonus percentage the employee is to receive.See section below for calculation instructions.
* The`totalCompensation` property should be the adjusted annual compensation(base annual + bonus)
* The`totalBonus` should be the employee's total bonus rounded to the nearest dollar. */


// function to create new objects with bonus info
  function getBonusInfo( someEmployee ){
    let bonusPercentage = getBonusPercentage( someEmployee );
    let employeeAnnual = someEmployee.annualSalary
    let totalBonus = bonusPercentage/100 * employeeAnnual;
    let totalCompensation = employeeAnnual + totalBonus;
    let resultObject = {
      name: someEmployee.name,
      bonusPercentage: bonusPercentage,
      totalCompensation: totalCompensation,
      totalBonus: totalBonus,
    }
    return resultObject;
  } // end getBonusInfo

  // function to get bonus percentage
  function getBonusPercentage( someEmployee ){
    let percentage = 0;
    return percentage;
  } // end 

  for( let i=0; i<employees.length; i++ ){
    let bonusInfo = getBonusInfo;
    console.log( `Bonus info for ${employees[i].name}: `, bonusInfo);
  }
