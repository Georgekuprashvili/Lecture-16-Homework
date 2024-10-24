// 1
function multiply(a, b) {
  return a * b;
}
console.log(multiply(6, 10));
// 2
function checkAge(age) {
  if (age >= 18) {
    return "შენ ხარ სრულწლოვანი";
  } else {
    return "შენ ხარ არასრულწლოვანი";
  }
}
console.log(checkAge(22));
// 3
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "ლუწი";
  } else {
    return "კენტი";
  }
}
console.log(isEvenOrOdd(15));
// 4
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "ორშაბათი";
      break;
    case 2:
      return "სამშაბათი";
      break;
    case 3:
      return "ოთხშაბათი";
      break;
    case 4:
      return "ხუთშაბაში";
      break;
    case 5:
      return "პარასკევი";
      break;
    case 6:
      return "შაბათი";
      break;
    case 7:
      return "კვირა";
      break;
    default:
      return "არასწორი რიცხვია";
      break;
  }
}
console.log(getDayName(3));
// 5
function compareNumbers(a, b) {
  if (a > b) {
    return "პირველი რიცხვი უფრო დიდია";
  } else if (a < b) {
    return "მეორე რიცხვი უფრო დიდია";
  } else if (a === b) {
    return "ორივე რიცხვი ტოლია";
  }
}
console.log(compareNumbers(8, 10));
// 6
function calculator(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    default:
      return "არასწორი ნიშანია";
      break;
  }
}
console.log(calculator(5, 6, "*"));
// 7
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(17));
// 8
function findMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}
console.log(findMax(5, 10, 3));
// 9
function checkSign(num) {
  if (num > 0) {
    return "დადებითია";
  } else if (num < 0) {
    return "უარყოფითია";
  } else {
    return "ტოლია ნოლის";
  }
}
console.log(checkSign(-5));
// 10
function getMonthName(monthNumber) {
  switch (monthNumber) {
    case 1:
      return "იანვარი";
      break;
    case 2:
      return "თებევრალი";
      break;
    case 3:
      return "მარტი";
      break;
    case 4:
      return "აპრილი";
      break;
    case 5:
      return "მაისი";
      break;
    case 6:
      return "ივნისი";
      break;
    case 7:
      return "ივლისი";
      break;
    case 8:
      return "აგვისტო";
      break;
    case 9:
      return "სექტემბერი";
      break;
    case 10:
      return "ოქტომბერი";
      break;
    case 11:
      return "ნოემბერი";
      break;
    case 12:
      return "დეკემბერი";
      break;
    default:
      return "რიცხვი არასწორია";
      break;
  }
}
console.log(getMonthName(7));
// 11
function multiplyIfGreaterThanFive(num) {
  if (num >= 5) {
    return num * 10;
  } else {
    return "რიცხვი მცირეა";
  }
}
console.log(multiplyIfGreaterThanFive(12));
// 12
function getSeason(seasonNumber) {
  switch (seasonNumber) {
    case 1:
      return "გაზაფხული";
      break;
    case 2:
      return "ზაფხული";
      break;
    case 3:
      return "შემოდგომა";
      break;
    case 4:
      return "ზამთარი";
      break;

    default:
      return "ციფრი არასწორია";
      break;
  }
}
console.log(getSeason(1));
// 13
function checkPrice(price) {
  if (price > 100) {
    return "ფასი მაღალია";
  } else {
    return "ფასი ნორმალურია";
  }
}
console.log(checkPrice(234));
// 14
function switchCalculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    default:
      return "არასწორი ნიშანია";
      break;
  }
}
console.log(switchCalculator(12, 3, "+"));
// 15
function positiveSum(a, b) {
  if (a > 0 && b > 0) {
    return a + b;
  } else {
    return "მინიმუმ ერთი რიცხვი უარყოფითია";
  }
}
console.log(positiveSum(14, 37));
