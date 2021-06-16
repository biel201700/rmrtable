// 원하는 장소에 뿌려지기 위해 지정함
// html에서 지정한 클래스 이름을 이용하며 css의 형식과 동일하게 이용할 수 있다
// querySelector는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫번째 Element를 반환
// cf) document.getElementById()는 Id 속성이 있으면 위치에 상관없이 접근이 가능 
const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

// innerText와 innerHTML 차이점
// 두 속성이 다루는 값이 text Element인지, html Element인지 Check!!!
// innerText : text의 값을 변경할 때 사용
// innerHTML : HTML요소에 접근하여 값을 변경할 때 사용

// 시간 값 가져오기
function getTime(){
	// 
	const date = new Date();

	// 두자리로 나오도록 변경하며 한자리면 앞에 '0'을 붙여 두자리로 변경
	const minutes = String(date.getMinutes()).padStart(2,"0");
	var hours = date.getHours();
	const seconds = String(date.getSeconds()).padStart(2,"0");

	// default는 24시간 형식이나 12시간 형식으로 변경 시
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
  	hours = hours ? hours : 12; // the hour '0' should be '12'

  	hours = String(hours).padStart(2,"0");

  	clockTitle.innerText = `${ampm}
  	 ${hours} : ${minutes}`;
  }

// 새로고침 될 때 함수 실행하라
function init(){
// 새로고침되면 실시간 시간을 가져와라
getTime();	
// 실시간으로 초가 변경됨
// 일정한 시간 간격으로 작업을 수행한다(1초) 
setInterval(getTime, 1000);
}
init();

// 시계 클릭하면 색상 변경
const clockBaseColor = "rgb(173, 196, 212)";
const clockOtherColor = "rgb(204, 153, 255)";

function handleColor(){
	const currentClockColor = clockTitle.style.color;
	if (currentClockColor === clockBaseColor) {
		clockTitle.style.color = clockOtherColor;
	} else{
		clockTitle.style.color = clockBaseColor;
	}
}
clockTitle.addEventListener("click", handleColor);

