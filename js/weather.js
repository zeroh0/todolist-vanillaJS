const API_KEY = 'edb64cdb0d6861c3a4f0ad92ebdd4459';

/* user의 위치 정보 */
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}` ;
    }); //call url 
    /* 
        fetch는 promise
        promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어난다.
        서버에 뭔기 물어봤는데 서버가 응답하는데 5분 걸린다고 가정
        서버의 응답을 기다려야 함. 그래서 then을 사용해야 함.

        url을 fetch하고 그 다음으로 response를 받아야 함. 그리고 response의 json의 얻어야 함. 
        그리고 내용을 추출했으면 data를 얻는다.
     */
}

function onGeoError() { // 만약 위치를 받는 데 문제가 발생했을 때, user가 위치를 받는 게 불가능하다고 했을 때
    console.log("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 브라우저에서 위치 좌표를 준다! wifi, 위치, GPS 등등
// 두 개의 argument : 모든 게 잘 됐을 때 실행 될 함수, 에러가 발생했을 때 실행 될 함수

// lat, lng 이 숫자들을 장소로 바꿔줄 서비스를 사용해야 함
/* url을 부르는 방법 */