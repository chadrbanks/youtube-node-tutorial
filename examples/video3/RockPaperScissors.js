
const argv = require('yargs').argv


module.exports = function(){

    if(argv._[0]){

        console.log('You passed:', argv._[0]);
        let player_choice;

        switch(argv._[0])
        {
            case 'Rock':
                player_choice = 0;
                break;
            case 'rock':
                player_choice = 0;
                break;
            case 'Paper':
                player_choice = 1;
                break;
            case 'paper':
                player_choice = 1;
                break;
            case 'Scissors':
                player_choice = 2;
                break;
            case 'scissors':
                player_choice = 2;
                break;
            default:
                console.log("Inalid choice, you must choose rock, paper, or scissors.");
                console.log("Try instead: node examples/video3/RockPaperScissors.js paper");
        }

        // 0 = Rock
        // 1 = Paper
        // 2 = Scissors
        let cpu_choice = Math.floor(Math.random() * 3);
        switch(cpu_choice)
        {
            case 0:
                console.log("The computer chose: Rock");
                break;
            case 1:
                console.log("The computer chose: Paper");
                break;
            case 2:
                console.log("The computer chose: Scissors");
                break;
        }

        if(player_choice == cpu_choice)
        {
            console.log("The game is a tie!");
        }
        else if(player_choice > cpu_choice && player_choice == 2 && cpu_choice == 0)
        {
            console.log("The computer beat the player!");
        }
        else if( player_choice == 0 && cpu_choice == 2)
        {
            console.log("The player beat the computer!");
        }
        else if(player_choice > cpu_choice)
        {
            console.log("The player beat the computer!");
        }
        else
        {
            console.log("The computer beat the player!");
        }
    }
    else{
        console.log("You did not include rock, paper, or scissors after the file name.");
        console.log("Try instead: node examples/video3/RockPaperScissors.js paper");
    }

}();