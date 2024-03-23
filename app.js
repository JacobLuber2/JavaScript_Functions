// Exercise 1 Section
function printOdds(count) {
if (count < 0) {
for (let i = -1; i >= count; i--) {
if (i % 2 != 0) {
console.log(i);
}
}
} else {
for (let i = 1; i <= count; i++) {
if (i % 2 == 0) {
continue;
} else {
console.log(i);
}
}
}
}
printOdds(180);
printOdds(-53); // negative numbers
// Exercise 2 Section

function checkAge(user = "anonymous", age = 0) {
    let aboveSixteen = `Congrats ${user}, you can drive!`;
    let belowSixteen = `Sorry ${user}, but you need to wait until you're 16.`;
    if (typeof user === "number") {
        age = user;
        user = "anonymous"; 
    }
    if (user === "anonymous") {
        belowSixteen = `Sorry ${user}, but you need to wait until you're 16.`;
        aboveSixteen = `Congrats ${user}, you can drive!`;
    }
    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

checkAge("jacob", 20);
checkAge("nathan", 14);
checkAge(11);

// exercise 3 section
function quadrantCheck(x, y) {
    if (x == 0 && y == 0) {
    console.log("Center");
    } else if (x == 0) {
    console.log("X axis");
    } else if (y == 0) {
    console.log("Y axis");
    } else if (x > 0 && y > 0) {
    console.log("Quad 1");
    } else if (x < 0 && y > 0) {
    console.log("Quad 2");
    } else if (x < 0 && y < 0) {
    console.log("Quad 3");
    } else if (x > 0 && y < 0) {
    console.log("Quad 4");
    } else {
    console.log("Invalid inputs");
    }
    }
    quadrantCheck(0, 0); // center
    quadrantCheck(5, 0); // x axis
    quadrantCheck(0, 5); // y axis
    quadrantCheck(5, 7); // quad 1
    quadrantCheck(-110, 8); // quad 2
    quadrantCheck(-11, -8); // quad 3
    quadrantCheck(110, -8); // quad 4
    quadrantCheck("5o", "7o"); // invalid inputs

    // exercise 4 section
    function triangleCheck(side1, side2, side3) {
    if (side1 == side2 && side2 == side3 && side1 + side2 > side3) {
    console.log("EQUILATERAL!");
    } if (side1 == side2 && side2 != side3 && side1 + side2 > side3) {
    console.log("ISOCELES!");
    } if (side1 != side2 && side2 != side3 && side1 + side2 > side3) {
    console.log("SCALENE!")
    } else {
    console.log("INVALID!")
    }
    }
    triangleCheck(1, 1, 1); // equilateral
    triangleCheck(2, 2, 3); // isoceles
    triangleCheck(2, 4, 5) // scalene
    triangleCheck(2, 3, 5) // invalid

    // exercise 5 section (bonus)
    // limit of 30gb
    // using 60 gb in 20 days 3 gb a day
    // a 60 gb plan limit and 30 days to use
    // 5 days left

    function planStatus(planLimit, day, usage) {
        let currentUsage = usage / day;
        let projectedUsage = planLimit / 30;
        let daysLeft = 30 - day;
        let overUnderBy = (currentUsage * 30) - planLimit
        if (currentUsage == projectedUsage) {
        console.log(`You have ${daysLeft} days left on your plan. You are at your target of ${currentUsage} gigabytes per day.`);
        } if (currentUsage > projectedUsage) {
        console.log(`You have ${daysLeft} days left on your plan. At this rate, you will exceed your plan by ${overUnderBy} gigabytes.`)
        } else {
        console.log(`You have ${daysLeft} days left on your plan. at this rate you will subceed your plan by ${overUnderBy * -1} gigabytes.`)
        }

        }
        planStatus(60, 20, 40); // at
        planStatus(120, 20, 90); // over
        planStatus(1000, 20, 50); // under