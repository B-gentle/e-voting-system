let votebutton = document.getElementsByClassName("president-vote-button");
let count = document.getElementsByClassName("count");

for (let x = 0; x < votebutton.length; x++){
    votebutton[x].addEventListener("click", voteIncrement);
};

function voteIncrement(event) {
    count[0].innerText = count[0] + 1;
    count[1].innerText++;
    event.preventDefault();
    alert("yea");
    }; 




var voted = [];
var contestants = ["Samuel Tarly", "Jon Snow", "Petr Baelish", "Daenerys Tagaeryean", "Arya Stark", "Ned Stark"];

function contestant(firstName, lastName, house){
this.firstName = firstName;
this.lastName = lastName;
this.house = house;
}

var contestant1 = new contestant("Samuel","Tarly","Night's watch");
var contestant2 = new contestant("Jon","snow","Tagaeryan");

let contestant3 ={
   firstName: "Arya",
   lastName: "Stark",
   house: "Stark", 
}


for (let x = 0; x < voted.length; x++) {
    console.log(voted[x]);
}



voted.push(contestant1, contestant2, contestant3, contestants[1]);

console.log(voted);

var index = voted.indexOf("Petr Baelish");

if (index > -1) {
    voted.splice(index, 2);
}

console.log(voted);