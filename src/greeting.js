// 화면에 뿌려주는 구간 
const greetingForm = document.querySelector(".js-nameForm");
// greeting form안에 input
const greetingInput = greetingForm.querySelector("input");
const greeting = document.querySelector(".js-greentings");

// localstorage에 currentUser로 input에 입력된 값이 저장되도록
function saveName(text) {
	// 로컬에 저장할 때 
	localStorage.setItem("currentUser", text);
	// 세션에 저장할 때 
	// sessionStorage.setItem("currentUser", text);
}

// event의 경우 반복적으로 이벤트가 발생하는 경우 사용한다 
function handleSubmit(event){
	// 기존의 event는 enter를 누르면 내용이 사라지는데 현재는 input의 내용이 그대로 남도록 만듬
	event.preventDefault();
	// enter를 누르면 전송되도록
	const currentValue = greetingInput.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}

// currentUser가 null일 경우  
function askForName(){
	// showing class가 추가되어 css의 정의된 것처럼 input태그 생성
	greetingForm.classList.add("showing");
	// 함수발생 
	greetingForm.addEventListener("submit", handleSubmit);
}

// input의 값이 입력되면 hello input 값으로 화면에 나타남 
function paintGreeting(text){
	// form 태그의 showing 클래스 지워라 
	greetingForm.classList.remove("showing");
	// showing2 클래스 추가 
	greeting.classList.add("showing2");
	// text의 값을 변경
	greeting.innerText = `Hello ${text}`
}

// localStorage에 있는 걸 가져오기 
function loadName(){
	// localStorage의 값을 가져와라 
	const currentUser = localStorage.getItem("currentUser");
	// localStorage에 값이 없을 경우
	if(currentUser === null){
		askForName();
	// localStorage에 값이 있을 경우	
	} else{
		paintGreeting(currentUser);
	}
}
// 새로고침 하면?
function init(){
	loadName();
}
init();