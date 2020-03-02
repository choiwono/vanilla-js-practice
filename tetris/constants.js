// 상수값 선언
// 가로 세로 블록사이즈 선언

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const KEY = {
    LEFT : 37,
    RIGHT : 39,
    DOWN : 40
}
// 오브젝트 불변성 부여..
Object.freeze(KEY);