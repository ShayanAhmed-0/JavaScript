let guestList=["Sameer","Bilal","Shumail"]
let name=guestList.pop()
guestList.push("Ali")
guestList.splice(0, 0, "wasay");
guestList.splice(2, 0, "ahmed");
guestList.push("wasif")
let name1=guestList.pop()
let name2=guestList.pop()
let name3=guestList.pop()
let name4=guestList.pop()
console.log(name1,"I am sorry I can’t invite you for dinner")
console.log(name2,"I am sorry I can’t invite you for dinner")
console.log(name3,"I am sorry I can’t invite you for dinner")
console.log(name4,"I am sorry I can’t invite you for dinner")
for (let index = 0; index < guestList.length; index++) {
    let invite= "Hey "+ guestList[index]+ "  you are still invited for dinner at our house"
    console.log(invite);   
}
console.log("I can invite only two people for dinner.")
console.log("new dinner table won’t arrive in time for the dinner")
console.log(name,"can't able to make it to the dinner")