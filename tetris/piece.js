class Piece {
    x;
    y;
    color;
    shape;
    ctx;
    typeId;
    hardDropped;

    constructor(ctx) {
        this.ctx = ctx;
        this.spawn();
    }

    spawn() {
        this.typeId = this.randomizeTetrominoType(COLORS.length - 1);
        this.shape = SHAPES[this.typeId];
        this.color = COLORS[this.typeId];
        this.x = 0;
        this.y = 0;
        this.hardDropped = false;
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
        this.shape = p.shape;
    }

    hardDrop(){
        this.hardDropped = true;
    }

    setStartingPosition(){
        this.x = this.typeId === 4 ? 4 : 3;
    }

    randomizeTetrominoType(noOfType) {
        return Math.floor(Math.random() * noOfType + 1);
    }
}