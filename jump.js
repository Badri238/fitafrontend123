//break continue
for (let i = 1; i < 10; i++){
    console.log(i);
    if (i % 5 == 0) {
        console.log("i found the number", i);
        continue;
    }
    i++;
}

//switch
switch ("FS1") {
    case "FS":
        console.log("duration 3 months");
        break;
    case "DA":
        console.log("duration 4 months");
          break;
    case "DS":
        console.log("duration 6 months");
        break;
    default:
          console.log("option is not valid");
        break;
}