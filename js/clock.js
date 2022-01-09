
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours} : ${minutes} : ${seconds}`);
}

getClock(); //즉시 호출해서 현재 시간을 보여주고 
setInterval(getClock, 1000); // 1초 마다 현재 시간을 보여준다.

// setInterval(sayHello, 5000);
// setTimeout(호출하려고 하는 function, 얼마나 기다릴지 ms)

/*
    Date object는 호출하는 당시의 현재 날짜랑 시간을 알려준다.

    intervals: 매 초마다 - setInterval()
    setInterval(실행히고자하는 function, 호출되는 function 간격을 몇 ms로 할 지)
    정한 시간마다 function을 실행시켜준다. 어떤 시간 간격이든 ms단위로 설정 가능
    timeout: 

    getDate(): 일
    getDay(): 요일(0 ~ 6)
    getFullYear(): 년도
    getHours(): 시  
    getMinutes(): 분
    getSeconds(): 초

    매 초 마다 시간을 나타내기 위해서는 intervals 사용

    문자 형식 1 -> 01
    padStart() function은 가지고 있는 string을 보다 길게 만들어애 할 때 사용
    원하는 만큼의 길이가 아니라면 string의 앞쪽에 문자를 넣는다.
    padStart string에 쓸 수 있는 function
    "1".padStart(2, "0"); String의 길이 2, 만약 string의 길이가 2가 아니라면 앞쪽에 "0"추가)

    "hello".padStart(20, "x");
    'xxxxxxxxxxxxxxxhello'

    date.getHours()에는 padStart를 사용할 수 없다 -> number이기 때문에
    
    new Date().getHours();
    1
    String(new Date().getHours());
    '1'

    -> String constructorf로 감싸주면 된다.

    + 자바스크립트 형변환
*/