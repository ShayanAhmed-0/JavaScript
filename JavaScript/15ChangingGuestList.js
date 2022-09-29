const guestList=["Sameer","Bilal","Shumail"]
guestList.pop()
guestList.push("Ali")
for (let index = 0; index < guestList.length; index++) {
    let invite= "Hey "+ guestList[index]+ "  you are invited for dinner at our house"
    console.log(invite);   
}