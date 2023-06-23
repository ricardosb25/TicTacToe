let player="x";
let move=1;

function play(cell){
    if(cell.innerHTML==""){
        cell.innerHTML = player;
        if(player=="x"){
            player="o"
        }
        else{
            player="x"
        }
    }
};