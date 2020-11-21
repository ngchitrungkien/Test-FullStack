// Câu 1
let A = [1,2,'a'];
let B = [1,3,'b'];
function solve(a,b) {
    let c = [];
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < b.length; j++) {
            if(a[i] == b[j]) {
                a.splice(i,1)
                b.splice(j,1)   
            }    
        }      
    }
    c = a.concat(b)
    console.log(c);
}
solve(A,B);


// Câu 2

let clubs =[
    {
        name: 'Arsenal',
        points: 99,
        GD: 45,
    },
    {
        name: 'Chelsea',
        points: 75,
        GD: 39,
    },
    {
        name: 'Manchester United',
        points: 60,
        GD: 29,
    },
    {
        name: 'Liverpool',
        points: 88,
        GD: 39,
    },
]

function rank(club) {
    for(let i = 0; i < club.length; i++) {
        for(let j = i+1; j < club.length; j++) {
            if(club[i].points === club[j].points) {
                if(club[i].GD < club[j].point) {
                    let temp = club[i];
                    club[i] = club[j];
                    club[j] = temp;
                }
            } else if(club[i].points < club[j].points) {
                let temp = club[i];
                club[i] = club[j];
                club[j] = temp;
            }
        }    
    }

    let i = 1;
    club.forEach(x => {
        x.position = i;
        i++;
    });
    console.log(club)
}

rank(clubs);