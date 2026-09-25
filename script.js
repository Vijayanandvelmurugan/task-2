// Variables & Data Types

//1
let name = "Vijay Anand";
console.log("name:", name);
console.log(typeof(name));

//2
let age = 22;
console.log("age:", age);
console.log(typeof(age));

//3
let variable = true;
console.log(variable);
console.log(typeof(variable));

//4
let value;
console.log(value);
console.log(typeof(value));

//5
let data = null;
console.log("data:", data);
console.log(typeof(data));

//6
let mystring = "Vijay Anand";
let mynumber = 22;
let myboolean = true;
let myundefined;
let mynull = null;

console.log("string:", mystring);
console.log("number:", mynumber);
console.log("boolean:", myboolean);
console.log("undefined:", myundefined);
console.log("null:", mynull);

//7
let qualification = "IT";
console.log("qualification:", qualification);
console.log(typeof(qualification));

//8
let salary = 30000;
console.log("salary:", salary);
console.log(typeof(salary));

//9
let stringnum = "100";
let actualnum = 100;

console.log(typeof(stringnum));
console.log(typeof(actualnum));

//10
let myname = "Vijay Anand";
let myage = 22;
let myqualification = "IT";
let myworkstatus = true;

console.log("myname:", myname);
console.log("myage:", myage);
console.log("myqualification:", myqualification);
console.log("myworkstatus:", myworkstatus);

console.log(typeof(myname));
console.log(typeof(myage));
console.log(typeof(myqualification));
console.log(typeof(myworkstatus));


// Arrays

//11
let fruits = ["apple", "banana", "orange", "kiwi", "mango"];
console.log(fruits);

//12
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);

//13
let colors = ["red", "blue", "black", "white", "green", "yellow"];
console.log(colors[2]);

//14
let mobiles = ["samsung", "iphone", "redmi", "vivo", "oppo"];
console.log(mobiles[mobiles.length - 1]);

//15
let sevennum = [1, 2, 3, 4, 5, 6, 7];
console.log(sevennum[sevennum.length - 2]);

//16
let food = ["biriyani", "dosa", "idly", "chicken rice", "parota"];

console.log(food[0]);
console.log(food[2]);
console.log(food[food.length - 1]);

//17
let cricketers = ["Hardik", "Dhoni", "Virat", "Bumrah", "Rohith"];
console.log(cricketers[3]);

//18
let toys = ["car", "bat", "ball", "teddy"];
console.log(toys[toys.length - 1]);

//19
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(values[0]);
console.log(values[values.length - 1]);
console.log(values[values.length - 2]);

//20
let allitems = ["Vijay Anand", "Stackly", "KSR Institute"];

console.log(allitems);
console.log(allitems[0]);
console.log(allitems[1]);
console.log(allitems[2]);


// Objects

//21
let person = {
    name: "Vijay Anand",
    age: 22,
    city: "Komarapalayam"
};

console.log(person);

//22
let emp = {
    name: "Vijay Anand",
    qualification: "IT",
    company: "Stackly"
};

console.log(emp.company);

//23
let afruits = {
    fruits: ["apple", "mango", "banana", "kiwi"]
};

console.log(afruits.fruits[1]);

//24
let atoys = {
    toys: ["car", "bat", "ball"]
};

console.log(atoys.toys[atoys.toys.length - 1]);

//25
let cricket = {
    cricketer: "Virat",
    team: "India"
};

console.log(cricket.cricketer);

//26
let mixeditem = {
    fruit: "apple",
    toy: "car",
    cricketer: "Pandya"
};

console.log(mixeditem);
console.log(mixeditem.fruit);
console.log(mixeditem.toy);
console.log(mixeditem.cricketer);

//27
let studentsdata = {
    student: ["Vijay", "Anand", "Sai"],
    courses: ["HTML", "CSS", "JavaScript"]
};

console.log(studentsdata.student[0]);
console.log(studentsdata.courses[1]);

//28
let mobileobject = {
    mobile: ["apple", "samsung", "oneplus", "vivo"]
};

console.log(mobileobject.mobile[2]);

//29
let empdata = {
    empname: "Vijay Anand",
    skills: ["HTML", "CSS", "JavaScript"],
    experience: 1
};

console.log(empdata.skills[1]);

//30
let personalinfo = {
    name: "Vijay Anand",
    age: 22,
    city: "Komarapalayam",
    status: "employee",
    qualification: "IT",
    college: "KSR Institute",
    company: "Stackly",
    date: "25-09-2026",
    time: "01:41 PM"
};

console.log(personalinfo.name);
console.log(personalinfo.age);
console.log(personalinfo.status);
console.log(personalinfo.qualification);
console.log(personalinfo.city);
console.log(personalinfo.college);
console.log(personalinfo.company);
console.log(personalinfo.date);
console.log(personalinfo.time);


// Arithmetic Operators

//31
let num1 = 20;
let num2 = 10;

console.log("addition:", num1 + num2);
console.log("subtraction:", num1 - num2);
console.log("multiplication:", num1 * num2);
console.log("division:", num1 / num2);

//32
let x = 17;
let y = 5;

console.log("remainder:", x % y);

//33
console.log(2 ** 5);

//34
let x1 = 10;
let y1 = 3;

console.log("addition:", x1 + y1);
console.log("subtraction:", x1 - y1);
console.log("multiplication:", x1 * y1);
console.log("division:", x1 / y1);
console.log("remainder:", x1 % y1);
console.log("power:", x1 ** y1);

//35
let x3 = 10;
let x4 = x3 + 5;

console.log(x4);


// Increment & Decrement

//36
let n1 = 10;
console.log("n1:", ++n1);

//37
let n2 = 10;
console.log("n2:", n2++);

//38
let n3 = 20;
console.log("n3:", --n3);

//39
let n4 = 20;
console.log("n4:", n4--);

//40
let pre = 10;
let post = 20;

console.log("prein:", ++pre);
console.log("postin:", post++);


// Assignment Operators

//41
let a = 20;
let b = 10;

a += b;
console.log(a);

//42
let a1 = 50;
let b1 = 20;

a1 -= b1;
console.log(a1);

//43
let a2 = 10;
let b2 = 5;

a2 *= b2;
console.log(a2);

//44
let a3 = 100;
let b3 = 10;

a3 /= b3;
console.log(a3);

//45
let a4 = 25;
let b4 = 4;

a4 %= b4;
console.log(a4);


// Comparison, Logical & Ternary Operators

//46
let p = 20;
let q = 10;

console.log(p < q);
console.log(p > q);
console.log(p <= q);
console.log(p >= q);

//47
let num = 10;
let string = "10";

console.log(num == string);
console.log(num === string);

//48
let condition1 = 10 > 5;
let condition2 = 20 > 15;

console.log(condition1 && condition2);
console.log(condition1 || condition2);
console.log(!condition1);
console.log(!condition2);

//49
let empage = 22;
let eligibility = empage >= 18 ? "eligible" : "not eligible";

console.log("empage:", eligibility);

//50
let marks = 65;
let result = marks >= 35 ? "pass" : "fail";

console.log("exam:", result);
