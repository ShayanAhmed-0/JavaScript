let guestList=["Sameer","Bilal","Shumail"]
let name=guestList.pop()
guestList.push("Ali")
guestList.splice(0, 0, "wasay");
guestList.splice(2, 0, "ahmed");
guestList.push("wasif")
for (let index = 0; index < guestList.length; index++) {
    let invite= "Hey "+ guestList[index]+ "  you are invited for dinner at our house"
    console.log(invite);   
}
console.log("I found a bigger dinner table.")
console.log(name,"can't able to make it to the dinner")