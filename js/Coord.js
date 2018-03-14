/*  Less file  
 *  Author: tomasgerzicak
 *  Name: Coord
 *  Version: 1.0
 *  Description:
*/

class Coord
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    get()
    {
        return new Coord(this.x, this.y);
    }
}