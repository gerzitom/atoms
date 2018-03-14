/*  Less file  
 *  Author: tomasgerzicak
 *  Name: Game
 *  Version: 1.0
 *  Description:
*/

class Game
{
    constructor()
    {
        this.SIZE = 8;
        this._players = [];
        this.actualPlayer = 0;
        this.draw = new Draw(this.SIZE);
        this.board = new Board(this.SIZE);
    }

    addPlayer(player)
    {
        this._players.push(player);
    }

    start()
    {

    }

    playerClick(e)
    {
        log(e.target);
    }
}