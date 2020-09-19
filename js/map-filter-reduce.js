const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// USING 'FILTER'
const moreThanThreeLangs = users.filter(function (user) {
    // console.log(user);                      // loops through all instances of 'users'
    return user.languages.length >= 3;      // each time an instance meets this qualification it is added to the
                                            // 'moreThanThreeLangs' array.
});
console.log(moreThanThreeLangs);            // logs the final array.

// USING 'MAP'
const userEmailAddresses = users.map(function (user) {
    return user.email;
});
console.log(userEmailAddresses);

// USING 'REDUCE'
//#1
const aveYearsExp = users.reduce(function (accumulation, user) {
    return accumulation + user.yearsOfExperience;
}, 0) / users.length;
console.log(aveYearsExp);

//#2
const longestEmail = users.reduce(function (accumulator, user) {
    // console.log(typeof accumulator, accumulator, accumulator.length);
    // console.log(typeof user.email, user.email, user.email.length)
    if(accumulator.length < user.email.length) {
        return user.email;
    }
    return accumulator;

}, "");
console.log(longestEmail);

//#3
const usersString = users.reduce(function (accumulator, user) {
    if (accumulator === "") {
        return accumulator + "Your instructors are: " + user.name;
    }
    return accumulator + ", " + user.name;
}, "");
console.log(usersString);

// BONUS
let languages = users.reduce(
    (languages, user) => {
        for(let i = 0; i < user.languages.length; i++) {
            if (!languages.includes(user.languages[i])) {
                languages.push(user.languages[i])
            }
        }
        return languages;
    }, []);
console.log(languages);



// const listOfLangs = users.reduce(function (accumulator, user) {
//     for(i = 0; i < user.languages.length; i++) {
//         return accumulator + user.languages[i];
//     }
// });
// console.log(listOfLangs);