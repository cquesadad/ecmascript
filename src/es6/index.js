function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || "ES";
    cconsole.log(name, age, country);
}

//es6

function newFunction2(name = 'Oscar', age = 32, country = "ES") {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 34, "MX");

