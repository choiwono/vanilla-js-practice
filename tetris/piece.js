class Piece {
    x;
    y;
    color;
    shape;
    ctx;

    constructor(ctx) {
        this.ctx = ctx;
        this.spawn();
    }

    spawn() {
        this.color = 'blue';
        // 테트리스의 모양 때문에 3x3 ( 회전까지 생각해야함 )
        
        this.shape = [
            [2, 0, 0],
            [2, 2, 2],
            [0, 0, 0]
        ];

        // Starting position;
        this.x = 3;
        this.y = 0;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                // x,y 는 형태의 왼쪽 위 포지션을 담당한다.
                // x, y gives the position of the block in the shape
                // this.x + x is then the position of the block on the board
                // x와 y는 포지션 fillRect(좌표 x, 좌표 y, 가로사이즈, 세로사이즈)
                if (value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            })
        })
    }

    move(p) {
        this.x = p.x;
        this.y = p.y;
    }
}