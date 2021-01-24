let finalWorkOutArray = [];

const exerciseType = ['Multi Joint', 'Multi Joint', 'Small Muscle', 'Small Muscle', 'Isolateral', 'Isolateral'];
const legs = ['Leg Press', 'Deadlifts','Seated Leg Extension','Lying Leg Curls', 'Romain Squats', 'Pistols'];
const back = ['Lat Pulldown','Seated Row','Shrugs','Plance Pulls','Bented Over Row','Battle Ropes'];
const chest = ['Bench Press','Decline Press','Incline Press','Machine Flye','Dumbell Press','Incline Dumbell Press'];
const arms = ['Tricep Pressdown','Barbell Bicep Curls','Dips','Chinups','Triceps Extensions','Dumbell Curls'];
const shoulders = ['Shoulder Press','Front Raises','Pike Pushups','Reverse Flye','Dumbell Shoulder Press','Dumbell Latreral Raises'];
const core = ['Situps','Crunches','Side Crunches','Lying Leg Raises','Archups','Back Extensions'];

// age group 18 - 24
const ageGroup1 = [
    "Aerobic Strength: Heart Rate Zone 70% - 80%: 137-161",
    "Weight Control: Heart Rate Zone 60% - 70%: 117-141",
    "Fat Burning: Heart Rate Zone 50% - 60%: 98-121"
    ]
// age group 25 - 34
const ageGroup2 = [
    "Aerobic Strength: Heart Rate Zone 70% - 80%: 130-156",
    "Weight Control: Heart Rate Zone 60% - 70%: 111-136",
    "Fat Burning : Heart Rate Zone 50% - 60%: 93-117"
    ]
// age group 35-44
const ageGroup3 = [
    "Aerobic Strength: Heart Rate Zone 70% - 80%: 123-148",
    "Weight Control: Heart Rate Zone 60% - 70%: 106-130",
    "Fat Burning : Heart Rate Zone 50% - 60%: 88-111"
    ]
// age group 45-54
const ageGroup4 = [
    "Aerobic Strength: Heart Rate Zone 70% - 80%: 116-140",
    "Weight Control: Heart Rate Zone 60% - 70%: 99-122",
    "Fat Burning : Heart Rate Zone 50% - 60%: 83-105"
    ]
// age group 55 plus
const ageGroup5 = [
    "Aerobic Strength: Heart Rate Zone 70% - 80%: 102-132",
    "Weight Control: Heart Rate Zone 60% - 70%: 87-115",
    "Fat Burning : Heart Rate Zone 50% - 60%: 73-99"
    ]
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
const getWorkout = () =>{
    let numberExercises;
    if (document.userInfo.expWorkingOut[0].checked)
	    numberExercises = 2;
	if (document.userInfo.expWorkingOut[1].checked)
	    numberExercises = 3;
	if (document.userInfo.expWorkingOut[2].checked)
	    numberExercises = 4;
    // getting legs
    for(let i = 0; i < numberExercises; i ++){
        let randomNum = getRandomNum();
        if(i == 0)
            finalWorkOutArray[0] = legs[randomNum];
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
        let check = checkArray(back[randomNum]);
        if(check)
            finalWorkOutArray.push(tryAgain(back));
        else
            finalWorkOutArray.push(back[randomNum]);
    }
    // getting chest
    for(let i = 0; i < numberExercises; i ++){
        let randomNum = getRandomNum();
        let check = checkArray(chest[randomNum]);
        if(check)
            finalWorkOutArray.push(tryAgain(chest));
        else
            finalWorkOutArray.push(chest[randomNum]);
    }
    // getting arms
    for(let i = 0; i < numberExercises; i ++){
        let randomNum = getRandomNum();
        let check = checkArray(arms[randomNum]);
        if(check)
            finalWorkOutArray.push(tryAgain(arms))
        else
            finalWorkOutArray.push(arms[randomNum])
        
    }
    // getting shoulders
    for(let i = 0; i < numberExercises; i ++){
        let randomNum = getRandomNum();
        let check = checkArray(shoulders[randomNum]);
        if(check)
            finalWorkOutArray.push(tryAgain(shoulders));
        else
            finalWorkOutArray.push(shoulders[randomNum]);
    }
    // getting core
    for(let i = 0; i < numberExercises; i ++){
        let randomNum = getRandomNum();
        let check = checkArray(core[randomNum]);
        if(check)
            finalWorkOutArray.push(tryAgain(core))
        else
            finalWorkOutArray.push(core[randomNum])
    }
    let workoutPlan = "";
    for(let i = 0; i < finalWorkOutArray.length; i++){
        workoutPlan += `<li> ${finalWorkOutArray[i]} </li>`;
        if(i % numberExercises == 0 && i != 0)
            workoutPlan += `<hr>`;
    }
    document.getElementById('finalResults').innerHTML = workoutPlan;
}