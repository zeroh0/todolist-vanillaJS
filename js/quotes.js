/* randomness */
// object가 들어있는 array
const quotes = [
    {
        quote: "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다.",
        author: "월트 디즈니",
    },
    {
        quote: "비록 해가 진다고 해도, 나에게는 전기불이 있다.",
        author: "커트 코베인",
    },
    {
        quote: "웃음이 없는 하루는 버린 하루다.",
        author: "찰리 채플린",
    },
    {
        quote: "우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다.",
        author: "존 F. 케네디",
    },
    {
        quote: "변화는 우리가 누군가나 무엇, 혹은 후일을 기다린다고 찾아오지 않는다. 우리 자신이 우리가 기다리던 사람이고 우리가 바로 우리가 추구하는 변화이다.",
        author: "버락 오바마",
    },
    {
        quote: "무슨 일을 하기 전에는 그 일에 대해 기대를 가져야 한다.",
        author: "마이클 조던",
    },
    {
        quote: "조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다.",
        author: "오프라 윈프리",
    },
    {
        quote: "남들이 할 수 있거나 하려는 일을 하지 말고 남들이 할 수 없거나 하지 않으려는 일을 하라.",
        author: "아멜리아 에어하트",
    },
    {
        quote: "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다.",
        author: "스티브 잡스",
    },
    {
        quote: "행동은 모든 성공의 가장 기초적인 핵심이다.",
        author: "파블로 피카소",
    }
];

// 랜덤 배경, 랜덤 명언을 가져와야 함

// 명언의 작가 가져오기
const quote = document.querySelector("#quote span:first-child"); //id가 quote인 element의 첫번째 span
const author = document.querySelector("#quote span:last-child");


// array 안에 있는 element에 어떻게 접근하느냐
// console.log(quotes[0]); // 컴퓨터는 0부터 읽기 때문에 0~9의 배열 - array의 10개의 item이 있다면 10-1로 마지막 element에 접근할 수 있다.
// console.log(quotes[Math.floor(Math.random() * 10)]); // 10을 하드코딩 명언을 더 추가한다면..?
// console.log(quotes[Math.floor(Math.random() * quotes.length)]); // length 배열의 길이를 반환
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// 0~9까지의 숫자를 주는 function
// Math.random() - 0부터 1사이의 랜덤 값
// Math.random()*10 0~9
// Math.random() - 소수점을 가지는 float -> 3가지
    // Math.round() - 1.4 -> 1, 1.6 -> 2 반올림
    // ceil() 1.1 -> 2 올림
    // floor() 1.9 -> 1 내림
// Math.floor(Math.random() * 10);
