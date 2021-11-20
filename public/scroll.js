//만들고 싶은 함수 !   

//pageNumber가 second일때
// 함수실행시키셈
// 함수설명 ~~
// 그 함수는 버튼 누르면 매개변수+ page content라는 클래스명을 가진 곳(location)의 위치를 저장
// 그 위치로 스크롤을 이동하셈
// 근데 천천히 이동시키삼
// 함수설명 끝~~


//pageNumber가 2일때
// 함수 실행시키셈
// pageNumber
// 그러면 페이지 넘버랑 이 서수랑(first,second,...)대응되게 만들어야 매개변수를 걔(그숫자로)로 알지 않을까?
// 차라리 그냥string을 매개변수로 받고 그 매개변수 이름 + page_content이렇게 찾으라고 하는게 낫지 않나?
// 왜 매개변수를 꼭 숫자로만 써야하지?
//아니 근데 반복문 돌려야하잖음. 그러면 숫자로 써ㅇ야 반복문 구현하기가 편할텐데?
// 그냥 2 = second, 3= third 이렇게 숫자랑 string이랑 대응되는 함수를 만들어서
// 값을 변환시켜주는게 낫나? 고민... 근데 반복문 써야하긴 하는데 ㅠ
// 일단 string으로 매개변수 만들어보자. 

//얼레벌레 돌아가는 똥코드 저장 scrollMove(2)
// function scrollMove(pageNumber) {
//     if (pageNumber == 2){

//         let location = document.querySelector(".second_page_content").offsetTop;
    
//             window.scrollTo({
//                 top: location,
//             // left:location - pageLeft, 
//                 behavior: 'smooth'
//         });


//     }
// }

//문자열을 더해서 출력하는 간단한 함수 만들어서 CONSOLE해보기

//일단 돌아가는 똥코드 save용2 
// function scrollMove(pageNumber) {
//     // console.log(pageNumber)
//     //서수 (first + page_content)
//     const ordinalNum = pageNumber+'_page_content'
//     // console.log(n)

//         //  let name = function setName(){}

//     let location = document.querySelector("."+ordinalNum).offsetTop;
//     window.scrollTo({
//         top: location,
//         behavior: 'smooth'
//     });
        

// }


function scrollMove(pageNumber) {
    // console.log(pageNumber)
    //서수 (first + page_content)
    const ordinalNum = pageNumber+'_page_content'
    // console.log(n)

        //  let name = function setName(){}

    let location = document.querySelector("."+ordinalNum).offsetTop;
    window.scrollTo({
        top: location,
        behavior: 'smooth'
    });


    // let el = document.getElementsByClassName(".circle");
    
    // el.addEventListener("click", function(){alert("click2 triggered")}, false);

        

}

// 클릭이 되면, class circle을 찾고, 그것의 색깔을 보라색으로 변경해라
// 그리고 다른 것이 클릭이되면, 원래 것을 해제해라(버튼이 체크되는 속성을 해제)




    // if (pageNumber == 2){

    // let pageHeight = document.querySelector(".second_page").offsetHeight;
    // let pageLeft = document.querySelector(".second_page").offsetLeft;

    //string 형태로 입력받은 매개변수를 querySelector의 매개변수에 포함시키게끔

    // pageNumber(매개변수) + page_content면 되지 않겠냐고 querySelector의 매개변수가!!!!!











// function clickme2() {
//     let location = document.querySelector(".third_page_content").offsetTop;
//     window.scrollTo({
//         top: location,
//         behavior: 'smooth'
//     })


// }

// function clickme3() {
//     let location = document.querySelector(".fourth_page_content").offsetTop;
//     window.scrollTo({
//         top: location,
//         behavior: 'smooth'
//     })
// }

// function clickme4() {
//     let location = document.querySelector(".fifth_page_content").offsetTop;
//     window.scrollTo({
//         top: location,
//         behavior: 'smooth'
//     })
// }
