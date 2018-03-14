/*  Less file  
 *  Author: tomasgerzicak
 *  Name: Board
 *  Version: 1.0
 *  Description:
*/

class Board
{
    constructor(size, players)
    {
        this.size = size;
        this.players = players;
        this._data = this.setData();
    }

    setData()
    {
        var data = [];
        for(var y = 0; y < this.size;y++)
        {
            data.push([])
            for(var x = 0; x < this.size; x++)
            {
                var limit = this.getLimit(new Coord(x, y))
                data[y].push(new Cell(-1, limit));
            }
        }
        return data;
    }

    getLimit(coord)
    {
        var limit = 4;
        if(coord.x == 0) limit--;
        if(coord.y == 0) limit--;
        if(coord.x == this.size - 1) limit--;
        if(coord.y == this.size - 1) limit--;
        return limit;
    }
}