function showVerticalMessage(str) {
  if (!str) {
    console.log("");
    return;
  }

  str = str.slice(0, 10);

  if (str[0] === "м") {
    str = str[0].toUpperCase() + str.substr(1);
  }

  for (i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

// showVerticalMessage("");
showVerticalMessage("марафон");
// showVerticalMessage("Привет всем!!!");

console.log(func`марафон`);
// func`марафон`