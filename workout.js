
// Variables containing different movements for different body-parts
const upperBodyLow = [
    'Bench Press',
    'Barbell Row',
    'Chin Up'
];
let rUpperBodyLow = upperBodyLow [Math.floor(Math.random() * upperBodyLow.length)];  // Bench Press Barbell Row Chin Up

const upperBodyHigh = [
    'Flies',
    'Machine Row',
    'SkullCrusher',
    'Cable Up Row'
]; 
let rUpperBodyHigh = upperBodyHigh [Math.floor(Math.random() * upperBodyHigh.length)]; 

const armsAndShouldersLow = [
    'Overhead Press',
    'Close Grip Bench',
    'Ez Curl'
]; 
let rArmsAndShouldersLow = armsAndShouldersLow [Math.floor(Math.random() * armsAndShouldersLow.length)]; 

const armsAndShouldersHigh = [
    'Rope pressdown',
    'Cable Lateral Raise',
    'Dumbell Lateral Raise',
    'Hammer Rope Curl'
];
let rArmsAndShouldersHigh = armsAndShouldersHigh [Math.floor(Math.random() * armsAndShouldersHigh.length)]; 

const legsLow = [
    'Squat',
    'Romanian Deadlift',
    'Hip Thrust',
    'Deadlift'
];
let rLegsLow = legsLow [Math.floor(Math.random() * legsLow.length)];  

const legsHigh = [
    'Leg extensions',
    'Leg Curl',
    'Calf Raise',
    'Bulgarian Split Squat'
];
let rLegsHigh = legsHigh [Math.floor(Math.random() * legsHigh.length)]; 

const motivationalMessage = [
    `I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.`,
    'We are what we repeatedly do. Excellence then is not an act but a habit.',
    'The body achieves what the mind believes.',
    `If you don’t find the time, if you don’t do the work, you don’t get the results.`,
    'Push harder than yesterday if you want a different tomorrow.',
    'Take care of your body. It’s the only place you have to live.'
];
let rMotivationalMessage = motivationalMessage [Math.floor(Math.random() * motivationalMessage.length)];

//Generates random rep range of 10-15 for high volume
const randomRepsVolHigh = (min, max) => {
    const minReps = Math.ceil(min);
    const maxReps = Math.floor(max);
    return Math.floor(Math.random() * (maxReps - minReps) + minReps);
};

//Generates random rep range of 5-10 for low volume
const randomRepsVolLow = (min, max) => {
    const minReps = Math.ceil(min);
    const maxReps = Math.floor(max);
    return Math.floor(Math.random() * (maxReps - minReps) + minReps);
};


const myWorkout1 = [
    {'Motivational message of the day is:' : `${rMotivationalMessage}`},
    {'Exercise': `${rUpperBodyHigh}`, 'sets' : '3', 'Reps': `${randomRepsVolHigh(10, 15)}`, 'Rest':'3 minutes'},
    {'Exercise': `${rUpperBodyLow}`, 'sets' : '3', 'Reps': `${randomRepsVolLow(5, 10)}`, 'Rest':'2 minutes'},
    {'Exercise': `${rArmsAndShouldersHigh}`, 'sets' : '3', 'Reps': `${randomRepsVolHigh(10, 15)}`, 'Rest':'3 minutes'},
    {'Exercise': `${rArmsAndShouldersLow}`, 'sets' : '3', 'Reps': `${randomRepsVolLow(5, 10)}`, 'Rest':'2 minutes'},
    {'Exercise': `${rLegsHigh}`, 'sets' : '3', 'Reps': `${randomRepsVolHigh(10, 15)}`, 'Rest':'3 minutes'},
    {'Exercise': `${rLegsLow}`, 'sets' : '3', 'Reps': `${randomRepsVolLow(5, 10)}`, 'Rest':'2 minutes'}
]; 

console.log(myWorkout1);