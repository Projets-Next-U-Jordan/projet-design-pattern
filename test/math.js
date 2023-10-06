const add = (a, b) => {
    return a + b;
};

const multiplyArray = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error("Argument must be an array of numbers");
    }

    if (numbers.length === 0) {
        return 0;
    }

    return numbers.reduce((acc, curr) => acc * curr, 1);
};

const calculateFactorial = (n) => {
    if (typeof n !== "number" || n < 0) {
        throw new Error("Input must be a non-negative number");
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
};

module.exports = { add, multiplyArray, calculateFactorial };

const goodUsers = [
    {
        id: 0,
        body: {
            userName: "julien",
            userAge: 23,
        },
    },
    {
        id: 1,
        body: {
            userName: "adrien",
            userAge: 58,
        },
    },
    {
        id: 2,
        body: {
            userName: "jules",
            userAge: 7,
        },
    },
];

const expectedUsers = [
    {
        id: 0,
        name: "julien",
        age: 23,
    },
    {
        id: 1,
        name: "adrien",
        age: 58,
    },
    {
        id: 2,
        name: "jules",
        age: 7,
    },
];

const tooManyUsers = goodUsers.concat(goodUsers).concat(goodUsers);

const transformUsers = (users) => {
    if (!users || users == null || users == undefined)
        throw new Error("Users must be provided.");
    //SOIS ÇA \/
    if (typeof users === "number")
		throw new Error("Users must be provided.");
    if (typeof users === "string")
		throw new Error("Users must be provided.");
    //OU ÇA \/
    if (Array.isArray(users))
		throw new Error("Users must be provided.");
    //===========

    if (users.some((obj) => !Object.keys(obj).includes("body")))
        throw new Error("Users must be provided.");

    return users.map((rawUser) => {
        return {
            id: rawUser.id,
            name: rawUser.body.userName,
            age: rawUser.body.userAge,
        };
    });
};

module.exports = { goodUsers, tooManyUsers, expectedUsers, transformUsers };
