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