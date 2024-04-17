var teacherA = {
    firstName: 'Ali',
    lastName: 'Moussa',
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: 'tanger',
};
var teacherB = {
    firstName: 'Ali',
    lastName: 'Moussa',
    fullTimeEmployee: true,
    // removing optional attr
    location: 'tanger',
    // adding custom attr
    isGoodAtJob: true,
};
console.log(teacherA);
console.log(teacherB);
