// 뿌려주는 구간 
// 배경이미지이기 때문에 body에 뿌려줌
const body = document.querySelector("body");
// 배경이미지 변경하는 화살표
const right_button_img = document.getElementById("right_change_button");
const left_button_img = document.getElementById("left_change_button");

// 오른쪽 화살표를 클릭 시
right_button_img.addEventListener("click", function (event) {
	const bgImage = document.querySelector(".bgImage");
	var id = parseInt(bgImage.id);
	// 5개의 이미지가 있기 때문에 5개가 끝나면 첫페이지로 이동 
	// 초기값이 0인 이유는 밑에서 +1을 해주기 때문
	if(id >= 5){
		id = 0;
	}
	paintImage(id);
});

// 왼쪽 화살표를 클릭 시
left_button_img.addEventListener("click", function (event) {
	const bgImage = document.querySelector(".bgImage");
	// 첫번째 페이지 일땐 아이디가 0
	// 마지막 페이지 일땐 아이디가 -1
	// 네번째 페이지 일땐 아이디가 3
	// 세번째 페이지 일땐 아이디가 2
	// 두번째 페이지 일땐 아이디가 1
	var id = parseInt(bgImage.id) -2;
	// 마지막페이지가 5여야 하기 때문에 -1에서 5가 되려면 4가 되어야 함
	// 밑에서 +1을 해주기 때문
	if(id < 0){
		id = 4;
	}
	paintImage(id);
});

// 배경이미지
function paintImage(imgNumber){
	// 배경이미지 뿌려주는 구간
	const bgImage = document.querySelector(".bgImage");
	// 초기페이지 지우기
	if(bgImage){
		bgImage.remove();
	}
	
	// 이미지생성 배열로 생성되어 초기값이 0
	const image = new Image();
	// 이미지의 초기번호는 0이기 때문에 +1을 해준다 
	image.id=`${imgNumber+1}`;
	image.src=`./images/${imgNumber+1}.jpg`;
	// 생성된 image에 클래스 추가
	image.classList.add("bgImage");
	// body 안의 첫번째 요소 앞에 추가
	body.prepend(image);
}

// 새로고침하면?
function init(imgNumber){
	// 함수실행
	paintImage(imgNumber);
}
// 처음 실행하면 나타나는 페이지이며 1.jpg가 첫페이지이고 
// 배열로 생성되어 0부터 시작되어 +1 발생
init(0);