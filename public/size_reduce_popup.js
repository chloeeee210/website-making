// var body = document.getElementsByTagName("body")[0];

//최소 가로사이즈
//줄어드는 것을 이벤트로 간주하고 함수 실행시킴
window.onresize = function (event) {
    //브라우저가 실제 보이는 화면의 가로사이즈
    const minWidth = 320;
    const Width = window.innerWidth;
    const widthUnit = 'px'
    //최소 가로사이즈보다 작을 때 표시할 메세지
    const message = `가로길이가 ${minWidth}${widthUnit}보다 넓은 디바이스를 사용해 주세요.`
    // const message = '가로 길이가 '+minWidth+'보다 넓은 디바이스를 사용해 주세요.'
    if (Width < minWidth) {
        window.alert(message);

    }

}


// `t1 = ${t1}, t2 = ${t2}`

// 구현하고 싶은 함수

// 일단 .. width을 변수로 설정하고
// 그 변수 값(width)이 320 미만으로 줄어든다면
// 팝업창 뜨게 하기

// 변수 width = body의 가로사이즈;
// 만약 width가 320보다 작다면
// 다음과 같은 함수를 실행시키셈

// 팝업창 window.open("URL", "팝업이름", "팝업 옵션");
//Javascript
// window.addEventListener('resize', function(){
// 	console.log('resize event!');(
// });


// let size = {
//     width: window.innerWidth 
    
    // || document.body.clientWidth, 
    //  height: window.innerHeight || document.body.clientHeight 
    
    
// }
// console.log(size)

// if(size>900){
//     // console.log(size)
// window.alert("NO PERMISSION");
// }
// function motion (){
    
//     if(size>700){
    
//         window.alert("no permission")
//     }
// }
    

// window width 값 변화 시 border color 변경.js



    

// window.alert("no permission")



// let size = {
//     width:window.innerWidth;

// }
// let body = document.getElementsByTagName("body");

// let innerWidth = window.innerWidth;

// if (innerWidth<320){
//     팝업창 함수

//     function popUp (){
    
//         window.alert("지원되지 않는 크기입니다.")
    
    
//     }




