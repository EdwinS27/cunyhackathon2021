<? php
// get info
$userAge = $_GET['userAge'];
$userHeight = $_GET['userHeight'];
$userWeight = $_GET['userWeight'];
$userGoal = $_GET['userGoal'];
$userExp = $_GET['userExp'];
$userTimeFrame = $_GET['userTimeFrame'];


print("<h1>$userAge</h1>");



// $ = $_GET[''];
// Since all arrays are 6 we put 6
// $getRandomNum = () =>{
//     return Math.floor(Math.random() * 6);
// }
// // function will check array for duplicates
// $checkArray = (exercise) =>{
//     for($ numInArray = 0; numInArray < finalWorkOutArray.length; numInArray++){
//         if(exercise == finalWorkOutArray[numInArray])
//             return true;
//     }
//     return false;
// }
// // we are going to put an array in this function to try to find a non duplicate
// $tryAgain = (array) => {
//     $check = true;
//     $num;
//     // while we keep getting the same work outs. try again to get a different work out
//     // should not be an infinite loop
//     while(check){
//         $random = getRandomNum();
//         check = checkArray(array[random]);
//         // if check comes back as not true, we want that one.
//         if(!check)
//             num = random;
//     }
//     // we found the element in the array that does not repeat
//     return array[num];
// }

// // Base for getting a work out routine from various arrays
// // getting the final work out plan
// $getWorkout = () =>{
//     $numberExercises;
//     if (document.userInfo.expWorkingOut[0].checked)
// 	    numberExercises = 2;
// 	if (document.userInfo.expWorkingOut[1].checked)
// 	    numberExercises = 3;
// 	if (document.userInfo.expWorkingOut[2].checked)
// 	    numberExercises = 4;
//     // getting legs
//     for($i = 0; i < numberExercises; i ++){
//         $randomNum = getRandomNum();
//         if(i == 0)
//             finalWorkOutArray[0] = legs[randomNum];
//         else{
//             $ check = checkArray(legs[randomNum]);
//             if(check)
//                 finalWorkOutArray.push(tryAgain(legs))
//             else
//                 finalWorkOutArray.push(legs[randomNum])
//         }
//     }
// }

?>