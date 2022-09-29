let Name=["Admin","Shayan","Sameer","Bilal","Shumail"]
for (let i = 0; i < Name.length; i++) {
    if(Name[i]=="Admin")
    console.log("Hello "+Name[i]+", would you like to see a status report?")
    else if(Name[i]!=="Admin")
    console.log("Hello "+Name[i]+" thank you for logging in again")
    
}