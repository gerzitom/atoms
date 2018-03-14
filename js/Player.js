/*  Less file  
 *  Author: tomasgerzicak
 *  Name: Player
 *  Version: 1.0
 *  Description:
*/

class Player
{
    constructor(name, color)
    {
        this.name = name;
        this.color = color;
        this.score = 0;
        Player.count++;
        this.sayHello()
    }

    sayHello()
    {
        log(this.name + " is ready");
    }
}

Player.count = 0;