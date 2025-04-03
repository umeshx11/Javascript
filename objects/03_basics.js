const course = {
    price : 999,
    courseInstructor : "hitesh"
}
// object destructuring
// console.log(course.courseInstructor);
const {price} = course;
console.log(price);
const {courseInstructor : Instructor} = course;
console.log(Instructor);
