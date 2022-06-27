import { FaVoteYea, FaRegSmile } from 'react-icons/fa';

const menuItems = [{
        icon: FaRegSmile,
        item: 'Welcome'
    },
    {
        icon: FaVoteYea,
        item: 'Developer Of the Year',
        href: '/developerOfTheYear'
    },
    {
        icon: FaVoteYea,
        item: 'Developer of the Month'
    },
    {
        icon: FaVoteYea,
        item: 'Snr Developer Of the Year'
    },
    {
        icon: FaVoteYea,
        item: 'Create A Contest'
    },
];

const array = [3, 5, 7, 9, 11, 13]

let reduction = array.reduce((acc, item)=>{
return acc + item
})

console.log(reduction)

array.splice(2,0,7,9,0);
array.splice(1, 3)

console.log(array);

let user = "ene is in jss3";
let us = user.slice(10,14);
let cry = user.split(",")
console.log(us)
console.log(cry)
const slice = [1, 2, 3, 4]

let newSlice = slice.slice(0, 2);

console.log(newSlice)



export default menuItems