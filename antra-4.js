obj={
    
    "hello":"world",arr:[1,2,3,4,5,0]
}
obj2 = {...obj}
console.log(obj2)
obj.arr.push(6)
obj.hello="eeee"
console.log(obj2)

// s[read operator does not deep copy. in above case it copied the reference to array of first object and did not crete a new copy of array.

obj3 = JSON.stringify(obj)
obj3 = JSON.parse(obj3)

console.log(obj3)
obj4 = structuredClone(obj)
console.log(obj4)
