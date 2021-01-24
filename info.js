let finalWorkOutArray = [];

const exerciseType = ['Multi Joint', 'Multi Joint', 'Small Muscle', 'Small Muscle', 'Isolateral', 'Isolateral'];
const legs = ['Leg Press', 'Deadlifts','Seated Leg Extension','Lying Leg Curls', 'Romain Squats', 'Pistols'];
const back = ['Lat Pulldown','Seated Row','Shrugs','Plance Pulls','Bented Over Row','Battle Ropes'];
const chest = ['Bench Press','Decline Press','Incline Press','Machine Flye','Dumbell Press','Incline Dumbell Press'];
const arms = ['Tricep Pressdown','Barbell Bicep Curls','Dips','Chinups','Triceps Extensions','Dumbell Curls'];
const shoulders = ['Shoulder Press','Front Raises','Pike Pushups','Reverse Flye','Dumbell Shoulder Press','Dumbell Latreral Raises'];
const core = ['Situps','Crunches','Side Crunches','Lying Leg Raises','Archups','Back Extensions'];

// Since all arrays are 6 we put 6
const getRandomNum = () =>{
    return Math.floor(Math.random() * 6);
}
// function will check array for duplicates
const checkArray = (exercise) =>{
    for(let numInArray = 0; numInArray < finalWorkOutArray.length; numInArray++){
        if(exercise == finalWorkOutArray[numInArray])
            return true;
    }
    return false;
}
// we are going to put an array in this function to try to find a non duplicate
const tryAgain = (array) => {
    let check = true;
    let num;
    // while we keep getting the same work outs. try again to get a different work out
    // should not be an infinite loop
    while(check){
        let random = getRandomNum();
        check = checkArray(array[random]);
        // if check comes back as not true, we want that one.
        if(!check)
            num = random;
    }
    // we found the element in the array that does not repeat
    return array[num];
}

// Base for getting a work out routine from various arrays
// getting the final work out plan
const getWorkout = (numberExercises) =>{
    // getting legs
    for(let i = 0; i < numberExercises; i ++){
        let randomNum = getRandomNum();
        if(finalWorkOutArray < 1)
            finalWorkOutArray.push(legs[randomNum]);
        else{
            let check = checkArray(legs[randomNum]);
            if(check)
                finalWorkOutArray.push(tryAgain(legs))
            else
                finalWorkOutArray.push(legs[randomNum])
        }
    }
    // getting back
    for(let i = 0; i < numberExercises; i ++){
        let randomNum = getRandomNum();
        if(finalWorkOutArray < 1)
            finalWorkOutArray.push(back[randomNum]);
        else{
            let check = checkArray(back[randomNum]);
            if(check)
                finalWorkOutArray.push(tryAgain(back))
            else
                finalWorkOutArray.push(back[randomNum])
        }
    }
    // getting chest
    for(let i = 0; i < numberExercises; i ++){
        let randomNum = getRandomNum();
        if(finalWorkOutArray < 1)
            finalWorkOutArray.push(chest[randomNum]);
        else{
            let check = checkArray(chest[randomNum]);
            if(check)
                finalWorkOutArray.push(tryAgain(chest))
            else
                finalWorkOutArray.push(chest[randomNum])
        }
    }
    // getting arms
    for(let i = 0; i < numberExercises; i ++){
        let randomNum = getRandomNum();
        if(finalWorkOutArray < 1)
            finalWorkOutArray.push(arms[randomNum]);
        else{
            let check = checkArray(arms[randomNum]);
            if(check)
                finalWorkOutArray.push(tryAgain(arms))
            else
                finalWorkOutArray.push(arms[randomNum])
        }
    }
    // getting shoulders
    for(let i = 0; i < numberExercises; i ++){
        let randomNum = getRandomNum();
        if(finalWorkOutArray < 1)
            finalWorkOutArray.push(shoulders[randomNum]);
        else{
            let check = checkArray(shoulders[randomNum]);
            if(check)
                finalWorkOutArray.push(tryAgain(shoulders))
            else
                finalWorkOutArray.push(shoulders[randomNum])
        }
    }
    // getting core
    for(let i = 0; i < numberExercises; i ++){
        let randomNum = getRandomNum();
        if(finalWorkOutArray < 1)
            finalWorkOutArray.push(core[randomNum]);
        else{
            let check = checkArray(core[randomNum]);
            if(check)
                finalWorkOutArray.push(tryAgain(core))
            else
                finalWorkOutArray.push(core[randomNum])
        }
    }
}