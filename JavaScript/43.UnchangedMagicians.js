function show_magicians(name) {
    console.log(name)
}
function make_great(name) {
    show_magicians("the Great "+name)
}
let array=["David Blaine","Penn and Teller","Jerry Sadowitz","Dynamo","Apollo Robbins"]
for (let i = 0; i < array.length; i++) {
    make_great(array[i])
}
for (let i = 0; i < array.length; i++) {
    show_magicians(array[i])
}