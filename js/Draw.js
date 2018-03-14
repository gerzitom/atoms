/*  Less file  
 *  Author: tomasgerzicak
 *  Name: Draw
 *  Version: 1.0
 *  Description:
*/

class Draw
{
    constructor(gameSize)
    {
        this.SIZE = gameSize;
        this.table = $("#board table")
        this.createGameBoard();
    }

    createGameBoard()
    {
        for(var y = 0; y < this.SIZE; y++)
        {
            var tr = document.createElement("TR");
            for(var x = 0; x < this.SIZE; x++)
            {
                var td = document.createElement("TD");
                td.dataset.x = x;
                td.dataset.y = y;
                td.addEventListener("click", PlayerClick)
                td.innerHTML = 1
                tr.appendChild(td);
            }
            this.table.append(tr);
        }
    }

    cell(node)
    {
        node.innerHTML++;
    }


    static getCoords(node)
    {
        return new Coord(node.dataset.x, node.dataset.y);
    }
}