/// in this file., i have given all the validations for the new user
/// means to say that if a new user wants to register in our system
/// he/she have to follow these validationsat the time of registeration

const emailExpression = [

    (v) => !!v || "Email Address is required",

    (v) =>

    /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$/.test(v) || "E-mail must be like name@example.com",

];

const nameExpression = [

    (v) => !!v || "Name is required",

    (v) => (v && v.length <= 30) || "Name must be less than 30 characters",

];

const passwordExpression = [(v) => !!v || "Password is required",

    (v) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) || "Password must be minimum eight characters, atleast one letter and one number"
];


const ageExpression = [(v) => !!v || "Age is required",
    (v) => /^[1-9]?[0-9]{1}$|^100$/.test(v) || "Age must be in digit",
];

export {
    emailExpression,
    nameExpression,
    passwordExpression,
    ageExpression
};