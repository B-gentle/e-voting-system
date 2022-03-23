const contestants = [{
        position: "President",
        name: "Okon Atti Isanghadighi",
        img: "Images/atti.jpg",
        votes: 0,
        id: 1
    },
    {
        position: "President",
        name: "Nse Edet Esu",
        img: "Images/dembeZouma.jpg",
        votes: 0,
        id: 2
    },
    {
        position: "Vice President",
        name: "Diepreye Clement",
        img: "Images/vp1.jpg",
        votes: 0,
        id: 3

    },
    {
        position: "Vice President",
        name: "Unyime Eduene",
        img: "Images/eduene.jpg",
        votes: 0,
        id: 4
    },
    {
        position: "Secretary",
        name: "Taylor Mosby",
        img: "Images/taylorMosby.jpg",
        votes: 0,
        id: 5
    },
    {
        position: "Secretary",
        name: "James Spader",
        img: "Images/JamesSpader.jpg",
        votes: 0,
        id: 6
    },
    {
        position: "Assistant Secretary",
        name: "Tchina Arnold",
        img: "Images/tchina-arnold.jpg",
        votes: 0,
        id: 7
    },
    {
        position: "Assistant Secretary",
        name: "Barry Allen",
        img: "Images/Grant-gustin.jpg",
        votes: 0,
        id: 8
    },
    {
        position: "Treasurer",
        name: "Jensen Ackles",
        img: "Images/JensenAckles.webp",
        votes: 0,
        id: 9
    },
    {
        position: "Treasurer",
        name: "Jared Padelecki",
        img: "Images/treasurer2.jpg",
        votes: 0,
        id: 10
    },
    {
        position: "Financial Secretary",
        name: "Angela Basset",
        img: "Images/angelaBasset.webp",
        votes: 0,
        id: 11
    },
    {
        position: "Financial Secretary",
        name: "Cisco Ramon",
        img: "Images/cisco-ramon.jpg",
        votes: 0,
        id: 12
    },
    {
        position: "PRO",
        name: "Benjamin Edagha",
        img: "Images/edagha.jpg",
        votes: 0,
        id: 13
    },
    {
        position: "PRO",
        name: "Taylor Mosby",
        img: "Images/levile.jpg",
        votes: 0,
        id: 14
    }
];

let cardRow = document.querySelector('#card-row');

const displayCard = (data, container) => {
    const output = data.map((contestant, i) => {
        return `
            <div class="col-md-6 col-sm-12">
                <div class="card" style="width: 18rem;">
                    <img src="${contestant.img}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title"><b>Position</b>: ${contestant.position}</h5>
                        <p class="card-text"><b>Name</b>: ${contestant.name}</p>
                        <button onclick='vote("${i}");' class="btn btn-success president-vote-button">Vote</button>
                        <p>${contestant.votes}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = output;
}


function vote(i) {
    contestants[i].votes += 1;
    displayCard(contestants, cardRow);
}

displayCard(contestants, cardRow)




