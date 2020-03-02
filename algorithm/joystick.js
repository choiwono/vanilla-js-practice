function solution(name) {
    const answer = 0;
    const exp = name.length - 1;
    // z,a에 대문자 Z와 A를 chart 코드로 바꾼값 대입
    const zCode = 'Z';
    const aCode = 'A';

    for( let i = 0; i < name.length; i++ ) {
        // 
        let charCode = name[i];
        // Z - charCode + 1
        if(charCode <= 'N') {
            answer += charCode - 'A';
        } else {
            answer += 'Z' - charCode + 1;
        }
        // charCode가 aCode와 같다면..
        if(charCode == aCode) {
            let nextIdx = i + 1;
            let countA = 0;
            // nextIdx가 name 길이보다 작으면서 name에 A값이 포함되 있을 경우 카운트 A와 nextIdx값을 ++
            while(nextIdx < name.length && name.charAt(nextIdx) == 'A') {
                countA++;
                nextIdx++;
            }
            var tmp = 
                ( name.charAt(0) == 'A' ? 0 : (i-1)*2 )
                						+ (name.length-(1+i+countA));
            if(exp > tmp) exp = tmp;
        }
    }
    answer += exp;
    return answer;
}