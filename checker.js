const request = require("request");

function findAvailableUsername() {
  // Set of characters to use for the username
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  
  
  for (let c1 of characters) {
    for (let c2 of characters) {
      for (let c3 of characters) {
       
        const username = c1 + c2 + c3;
        
       
        const url = `https://auth.roblox.com/v1/usernames/validate?request.username=${username}`;
        request(url, (error, response, body) => {
          const jsonResponse = JSON.parse(body);
          
          // If the username is available, return it
          if (jsonResponse["isValid"]) {
            return username;
          }
        });
      }
    }
  }
  
  
  return null;
}

// test the function
const username = findAvailableUsername();
if (username !== null) {
  console.log(`An available username was found: ${username}`);
} else {
  console.log("No available username was found.");
}
