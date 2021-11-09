function showVerticalMessage(str) {
  for (i = 0; i < str.length; i++) {
    if (str[0] === "м") {
      str = str[0].toUpperCase() + str.substr(1);
    } else if (str.length > 10) {
      str = str.slice(0, 10);
    }
    console.log(str[i]);
  }
}

showVerticalMessage("марафон");
// showVerticalMessage("Привет всем!!!");
