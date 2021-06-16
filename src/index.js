// // console.log('Im working. Im js.');
// var a = 221;
// let b = a - 5;
// var a = 4;
// console.log(b, a);
// // 기본적으로 const 사용 let은 정말 필요할 때만!!
// // var > let > const
// // let : 재선언 금지, 재할당 가능
// // var : 재선언 가능, 재할당 가능 
// // const : 재선언 금지, 재할당 금지(한번 선언하면 값이 변하지 않는다)

// // const something = "Something";
// // const dayOfWeek = ['월', '화', '수', '목', '금', '토', '일', something];
// // console.log(dayOfWeek);

// //Object
// const jeinfo = {
// 	name : 'jieun',
// 	age : '32',
// 	gender : "female",
// 	favmovies: ["신과함께", "올드보이"],
// 	favfoods: [
// 	{
// 		name:"kimchi", 
// 		fatty:false
// 	}, 
// 	{
// 		name: "cheese", 
// 		fatty:true
// 	}
// 	]
// }
// console.log(jeinfo.favfoods[0].fatty);

// // const player = {
// // 	name : "nico",
// // 	age: "32",
// // 	genger : "female",
// // 	local : "youngin"
// // }
// // console.log(player.name);
// // alert(player.name);

// // 외부에 있는 데이터를 읽는 함수
// // 파라미터에 이름을 주고 sayhello()함수를 넣고 콘솔에 text를 전해줌 
// function sayHello(text, number){
// 	return `hello! ${text} ${number} welcome`;
// }
// // sayHello의 return 
// const info = sayHello("jieun", 20);
// console.log(info);

// const calculator = {
// 	plus: function(a, b){
// 		return a + b;
// 	},
// 	multiply: function(a, b){
// 		return a * b;
// 	}, 
// 	divison: function(a, b){
// 		return a / b;
// 	},
// 	minus: function(a, b){
// 		return a - b;
// 	},
// 	squareRoot: function(a, b){
// 		return a ** b;
// 	}, 
// 	remainder: function(a, b){
// 		return a % b;
// 	}
// }

// const a1 = calculator.plus(5,5);
// console.log(a1);
// const b1 = calculator.multiply(5,5);
// console.log(b1);
// const c1= calculator.divison(5,5);
// console.log(c1);
// const d1 = calculator.minus(5,5);
// console.log(d1);
// const e1 = calculator.squareRoot(5,5);
// console.log(e1);
// const f1 = calculator.remainder(5,5);
// console.log(f1);

// const title1 = document.getElementById("title");
// title1.innerHTML = "hi! how are you";
// title1.style.color = 'red';
// document.title = 'I love u';

// title을 클릭하면 색상이 변경됨 
// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked";

// function handleClick(){
// 	title.classList.toggle(CLICKED_CLASS);
// }

// function init(){
// 	title.addEventListener("click", handleClick)
// }
// init();