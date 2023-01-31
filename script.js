let reset = document.getElementById('reset');
let box = document.getElementsByClassName('box');
let asd = 0;
reset.onclick = function () {
    if (asd == 0) {
        reset.innerHTML = 'New Game';
        document.getElementById('content-area').style.opacity = '1';
        document.getElementById('score1').style.opacity = '1';
        document.getElementById('score2').style.opacity = '1';
        asd++;
    } else {
        for (let k = 0; k < 9; k++) {
            box[k].innerHTML = ''
        }
        document.getElementById('score-1').value = 0
        document.getElementById('score-2').value = 0
        move = 0;
    }
}

let area = document.getElementById('content-area');
let tbl = document.createElement('table');
let move = 0;
tbl.setAttribute('id', 'area')
for (let i = 1; i <= 3; i++) {
    let tr = document.createElement('tr')
    for (let j = 1; j <= 3; j++) {
        let td = document.createElement('td');
        td.setAttribute('class', 'box');
        tr.appendChild(td);
    }
    tbl.appendChild(tr)
}
area.appendChild(tbl);

function xo(){
    let td = document.getElementsByClassName('box');
    for(var c = 0; c < td.length; c++){
        td[c].onclick = function () {
            if (this.innerHTML == '') {
                if (move % 2 == 0) {
                    this.innerHTML = 'X'
                    move++
                    console.log(move);
                }
                else {
                    this.innerHTML = 'O'
                    move++
                    console.log(move);
                }
            }
            check()
        }
    }
}
xo();

function check() {
    let winCombos = [
        // horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // diagonaly
        [0, 4, 8],
        [2, 4, 6],
        // vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]

    let playerx = document.getElementById('first_name').value
    let player_x_score = document.getElementById('score-1')
    let playero = document.getElementById('second_name').value
    let player_o_score = document.getElementById('score-2')
    let winner = document.getElementById('text');

    let box = document.getElementsByClassName('box');
    for (let d = 0; d < winCombos.length; d++) {
        // Winner Is X
        if (box[winCombos[d][0]].innerHTML == 'X' && box[winCombos[d][1]].innerHTML == 'X' && box[winCombos[d][2]].innerHTML == 'X') {
            setTimeout(() => {
                for (let k = 0; k < 9; k++) {
                    box[k].innerHTML = ''
                    move = 0
                }
                return xo();
            }, 1000);
            for (let k = 0; k < 9; k++) {
                box[k].onclick = null;
            }
            gamewinner = true;
            player_x_score.value++
            winner.style.opacity = '1'
            if (playerx == '') {
                winner.innerHTML = 'The Winner Is Player X'
                setTimeout(() => {
                    winner.innerHTML = ''
                }, 1000);
            } else {
                winner.innerHTML = 'The Winner Is ' + playerx
                setTimeout(() => {
                    winner.innerHTML = ''
                }, 1000);
            }
            move = 0;
        }
        // Winner Is O
        else if (box[winCombos[d][0]].innerHTML == 'O' && box[winCombos[d][1]].innerHTML == 'O' && box[winCombos[d][2]].innerHTML == 'O') {
            setTimeout(() => {
                for (let k = 0; k < 9; k++) {
                    box[k].innerHTML = ''
                    move = 0
                }
                return xo();
            }, 1000);
            for (let k = 0; k < 9; k++) {
                box[k].onclick = null;
            }
            gamewinner = true;
            player_o_score.value++
            winner.style.opacity = '1'
            if (playero == '') {
                winner.innerHTML = 'The Winner Is Player O'
                setTimeout(() => {
                    winner.innerHTML = ''
                }, 1000);
            } else {
                winner.innerHTML = 'The Winner Is ' + playero
                setTimeout(() => {
                    winner.innerHTML = ''
                }, 1000);
            }
            move = 0;
        } 
        else if (move == 9) {
            winner.innerHTML = 'Draw'
            winner.style.opacity = '1'
            setTimeout(() => {
                winner.innerHTML = ''
                for (let k = 0; k < 9; k++) {
                    box[k].innerHTML = ''
                    box[k].onclick = null;
                    move = 0
                }
                return xo();
            }, 1000);
            for (let k = 0; k < 9; k++) {
                box[k].onclick = null;
            }
        }
    }
}


// reset.onclick = function () {
//     reset.innerHTML = 'New Game';
//     document.getElementById('content-area').style.opacity = '1';
//     document.getElementById('score1').style.opacity = '1';
//     document.getElementById('score2').style.opacity = '1';
// }

// function check() {
//     let box = document.getElementsByClassName('box');
//     let winCombos = [
//         // horizontal
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         // diagonaly
//         [0, 4, 8],
//         [2, 4, 6],
//         // vertical
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8]
//     ]

//     reset.onclick = function () {
//         if (reset.innerHTML == 'New Game') {
//             for (let k = 0; k < 9; k++) {
//                 box[k].innerHTML = ''
//             }
//             document.getElementById('score-1').value = 0
//             document.getElementById('score-2').value = 0
//             move = 0;
//         }
//     }

//     let gamewinner = false;

//     let playerx = document.getElementById('first_name').value
//     let player_x_score = document.getElementById('score-1')
//     let playero = document.getElementById('second_name').value
//     let player_o_score = document.getElementById('score-2')
//     let winner = document.getElementById('text');
//     for (let d = 0; d < winCombos.length; d++) {

//         // Winner Is X

//         if (box[winCombos[d][0]].innerHTML == 'X' && box[winCombos[d][1]].innerHTML == 'X' && box[winCombos[d][2]].innerHTML == 'X') {
//             setTimeout(() => {
//                 for (let k = 0; k < 9; k++) {
//                     box[k].innerHTML = ''
//                     move = 0
//                 }
//             }, 1000);
//             gamewinner = true;
//             player_x_score.value++
//             winner.style.opacity = '1'
//             if (playerx == '') {
//                 winner.innerHTML = 'The Winner Is Player X'
//                 setTimeout(() => {
//                     winner.innerHTML = ''
//                 }, 1000);
//             } else {
//                 winner.innerHTML = 'The Winner Is ' + playerx
//                 setTimeout(() => {
//                     winner.innerHTML = ''
//                 }, 1000);
//             }
//             move = 0;

//             // Winner Is O
//         } else if (box[winCombos[d][0]].innerHTML == 'O' && box[winCombos[d][1]].innerHTML == 'O' && box[winCombos[d][2]].innerHTML == 'O') {
//             setTimeout(() => {
//                 for (let k = 0; k < 9; k++) {
//                     box[k].innerHTML = ''
//                     move = 0
//                 }
//             }, 1000);
//             gamewinner = true;
//             player_o_score.value++
//             winner.style.opacity = '1'
//             if (playero == '') {
//                 winner.innerHTML = 'The Winner Is Player O'
//                 setTimeout(() => {
//                     winner.innerHTML = ''
//                 }, 1000);
//             } else {
//                 winner.innerHTML = 'The Winner Is ' + playero
//                 setTimeout(() => {
//                     winner.innerHTML = ''
//                 }, 1000);
//             }
//             move = 0;

//         } else if (move == 9) {
//             winner.innerHTML = 'Draw'
//             winner.style.opacity = '1'
//             setTimeout(() => {
//                 winner.innerHTML = ''
//                 for (let k = 0; k < 9; k++) {
//                     box[k].innerHTML = ''
//                     move = 0
//                 }
//             }, 1000);
//         }
//     }
// }





