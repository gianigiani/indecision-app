var nameVar = 'Andrew'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'jen'
nameLet = 'julie'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

//block scoping

const fullName = 'jen Mead';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName);