    const images = [
        "0.jpg",
        "1.jpg",
        "2.jpg"
    ]; // 이미지 파일 이름 배열

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 자바스크립트에서 이미지를 만들고 html에 추가
// createElement() img element 추가
const bgImage = document.createElement("img"); //bgImage = <img>
bgImage.src = `img/${chosenImage}`; // bgImage = <img src="img/(n).jpg">
// bgImage를 body 내부에 추가
document.body.appendChild(bgImage); //appendChild() body에 html을 추가 
                                    // append...는 가장 뒤에 prepend는 가장 위에 오게 한다!
