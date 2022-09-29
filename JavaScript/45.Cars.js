function cars(manufacturer,name,color,feature) {
    let obj={
        manufacturer:manufacturer,
        model_name:name,
        color:color,
        feature:feature
    }
    return obj
    
}
let obj1=cars("Ford", "Focus", "red","Electric power steering");
let obj2=cars("Toyota", "Auris", "blue","parking sensors all round");
let obj3=cars("Volkswagen", "Golf", "green","heated front seats");
console.log(obj1)
console.log(obj2)
console.log(obj3)