// 한번만 선언하면 , 로 계속 사용 가능
const toDoForm = document.querySelector(".js-toDoForm"),
// todoform 안에 input
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-todoList");

// todoList의 변수를 선언하여 추후에 잘못 입력하는 경우를 방지하고자 
let toDos = [];

// 쓰레기통 이미지를 클릭하면 삭제되도록
// 삭제를 하려면 동적으로 생성된 li를 삭제하여야 함 
// 따라서 생성된 버튼의 부모를 찾아야 한다 현재는 li
function deleteToDo(event){
	// 동적으로 생성된 버튼과 li에 접근하려면?
	// 버튼의 부모를 찾기 (여기선 li)
	// console.log(event.target.parentNode);
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	// filter()는 배열을 순회하며 요소마다 조건 확인 후 조건을 만족하는 원소들로 
	// 구성된 새로운 배열 리턴
	// 삭제하고 남은 것들로 구성된 새로운 todoList
	// 삭제하면 기존의 id를 새로운 id 부여하여 새롭게 재배열 
	const cleanToDos = toDos.filter(function(toDo){
		// 새로 생성된 todo의 id와 기존에 생성된 li의 id가 다르면 
		return toDo.id !== parseInt(li.id);
	});
	// 기존의 todoList는 새로 생성된 todoList로 변경
	toDos = cleanToDos;
	// localStorage에 저장 
	saveToDos();
}

// localStorage에 todoList를 저장한다 
function saveToDos() {
	// string 형태로 변환하여 localstorage에 저장 
	localStorage.setItem("toDos", JSON.stringify(toDos));
}

// span을 눌렀을 때 라인이 생김
// 현재 span은 li에 적힌 input 
function throughLine(event){
	// 현재 위치에 이벤트 추가 하기 위해 
	const span = event.target;
	console.log(span)
	// span 클래스 추가 
	span.classList.add("li_line");
}

// input에 text로 값이 들어오면 리스트를 그려준다 
function paintToDo(text){
	// input에 값이 들어오면 li태그 생성
	const li = document.createElement("li");
	// 생성된 li을 클릭하면 함수실행하는데 이땐, span에 라인 생성
	li.addEventListener("click", throughLine);
	// width, height 크기 지정하여 이미지 생성 
	const image = new Image(20,20);
	// 이미지 경로 
	image.src="./images/delete.png";
	// 클릭하면 deleToDo함수 실행 
	image.addEventListener("click", deleteToDo);
	// span 생성 
	const span = document.createElement("span");
	// 새로운 id는 기존에 있던 toDos 배열에 +1
	// 배열은 0부터 시작하기 때문 
	const newId = toDos.length +1;
	// span요소의 text변경
	span.innerHTML = text;
	// li 생성 시 span과 image 추가 
	li.appendChild(span);
	li.appendChild(image);
	li.id = newId;
	// toDoList에 li를 추가 
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId,
	};
	// 기존 배열에 추가 
	toDos.push(toDoObj);
	saveToDos();
}

// input에 값을 넣고 enter를 누르면 list 생성
function handleSubmit(event){
	// 기존의 event제거 
	event.preventDefault();
	// enter를 누르면 
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	// 초기에는 빈값
	toDoInput.value = "";
}

// 로딩되면 localStorage에 저장된 것을 가져와서 화면에 뿌려준다 
function loadToDos(){
	const loadToDos = localStorage.getItem("toDos");
	if (loadToDos !== null) {
		const parsedToDos = JSON.parse(loadToDos);
		// forEach()는 callback이 없는 함수로서  return이 없다(반복문)
		// return을 발생시키고자 한다면 함수 밖의 변수를 사용해야 함
		parsedToDos.forEach(function(toDo){
			paintToDo(toDo.text);
		});
	} 
}

// 새로고침하면 리스트 뿌려줌 
function init(){
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit);
}
init();