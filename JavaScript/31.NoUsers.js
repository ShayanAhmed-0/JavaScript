let Name = [];
if (Name.length !== 0) {
  for (let i = 0; i < Name.length; i++) {
    if (Name[i] == "Admin")
      console.log(
        "Hello " + Name[i] + ", would you like to see a status report?"
      );
    else if (Name[i] !== "Admin")
      console.log("Hello " + Name[i] + " thank you for logging in again");
  }
} else {
  console.log("We need to find some users!");
}
