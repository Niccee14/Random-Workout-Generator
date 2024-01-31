
// Variables containing different movements for different body-parts
const upperBodyLow = ['Bench Press', 'Barbell Row', 'Chin Up' ];    //Low Volume, rep range of 10-5.
const upperBodyHigh = ['Flies', 'Machine Row', 'SkullCrusher', 'Cable Up Row'];     //High Volume, rep range of 10-15.
const ArmsAndShouldersLow = ['Overhead Press', 'Close Grip Bench', 'Ez Curl'];      //Low Volume, rep range of 12-8.
const ArmsAndShouldersHigh = ['Rope pressdown', 'Cable Lateral Raise', 'Dumbell Lateral Raise', 'Hammer Rope Curl'];    //High Volume, rep range of 10-15.
const legsLow = ['Squat', 'Romanian Deadlift', 'Hip Thrust', 'Deadlift', 'Bulgarian Split Squat'];      //Low volume, rep range of 10-5.
const LegsHigh = ['Leg extensions', 'Leg Curl', 'Calf Raise'];      //High volume, rep range of 10-15.
const arr = [upperBodyLow, upperBodyHigh, ArmsAndShouldersLow, ArmsAndShouldersHigh, legsLow, LegsHigh];
const getRandomExercise = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item
};

console.log(getRandomExercise(arr))