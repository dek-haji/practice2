
// to figure out which years will start sundays I want to write a function that helps me to get it.

//first of all we have to have a loop in the years that we need to check.
for(var year = 2018; year < 2050; year++){
    //we have to get the date first using new Date()

    let currentDate = new Date(year, 0) //when we get the date we passed the year variable and 0 which means sunday = 0; monday = 1 and so on.
    if(currentDate.getDay() === 0){ 
        console.log(`in the year of ${year} january 1st will be a Sunday`)
    }
}