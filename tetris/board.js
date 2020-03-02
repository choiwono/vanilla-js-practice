class Board {
    grid;
    // 축약어
    /* reset : function() {

    }*/
    reset() {
        this.grid = this.getEmptyBoard();
    }
    // matrix값을 모두 0으로 초기화
    getEmptyBoard() {
        return Array.from(
            { length : ROWS }, () => Array(COLS).fill(0)
        );
    }
}