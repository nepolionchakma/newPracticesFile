const users=[{
    user1:'name',
    user2:'pokir',
    user3:'monir'
}]

let num=[2,3,4,5,-1,-2,-3,6,7,8,9]
// console.log(users[0].user1)
// console.log(num[0])
// let map=num.map(i=>i)
// console.log(map)

let filter=num.filter(i=>i%3===0);
console.log(filter)

let nums=[1,2,3,4,5]
let reduce=nums.reduce((a,b)=>a-b,0)
console.log(reduce)