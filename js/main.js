/*
    Author: Tomas Gerzicak
    Version: 1.0
    Description:
*/
// var game = new Game();

var SIZE = 8;

var players = [];
players.push(new Player("Tom", "blue"))
players.push(new Player("Elli", "pink"))
var draw = new Draw(SIZE)
var board = new Board(SIZE, )




// game.addPlayer(new Player("Tom", "blue"));
// game.addPlayer(new Player("Elli", "pink"));
//
// game.start();


function PlayerClick(e)
{
    console.log(e.target)
    var coords = Draw.getCoords(e.target);
    board._data[coords.y][coords.x].atoms++;
    draw.cell(e.target)
    log(board._data)
}