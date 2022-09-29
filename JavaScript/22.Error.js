let mountains=["Mount Everest","K2"]
let rivers=["Jhelum","Chenab","Indus"]
let countries=["Pakistan","Australia","Germany"]
let cities=["Karachi","Lahore","Islamabad"]
let languages=["Urdu","English"]
let list=mountains.concat(rivers,countries,cities,languages)
console.log(list)
//index 14 doesnot exist so it will give undefined
console.log(list[14])
