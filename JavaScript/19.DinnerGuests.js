let guestList=["Sameer","Bilal","Shumail"]
let name=guestList.pop()
guestList.push("Ali")
guestList.splice(0, 0, "wasay");
guestList.splice(2, 0, "ahmed");
guestList.push("wasif")
guestList.pop()
guestList.pop()
guestList.pop()
guestList.pop()
for (let index = 0; index < guestList.length; index++) {
    let invite= "Hey "+ guestList[index]+ "  you are still invited for dinner at our house"
    console.log(invite);   
}
console.log("the Number of people I am inviting is",guestList.length)