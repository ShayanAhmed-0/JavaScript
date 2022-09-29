let current_users = ["shayan", "Sameer", "bilal", "Shumail", "Nameer"].map(
  (current_users) => current_users.toLowerCase()
);
let new_users = ["haris", "ali", "sameer", "bilal", "nameer"].map((new_users) =>
  new_users.toLowerCase()
);

for (let j = 0; j < new_users.length; j++) {
    
    for (let i = 0; i < current_users.length; i++) {
        if (current_users[i] == new_users[j]) {
            console.log("enter a new username.", current_users[i]);
            
        }
    }
    
}
 
