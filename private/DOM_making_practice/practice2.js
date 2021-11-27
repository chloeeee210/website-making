//            <li class="academy_list_item">
const academyList = document.getElementsByClassName("academy_list");
const li = document.createElement('li');
li.setAttribute('class', 'academy_list_item');
academyList[0].appendChild(li);

// academyList[0].appendChild(li);


// {/* <a href="/이동할html/" */}

const aInAcademyList = document.createElement('a');
// TODO href로 이동할 url 수정하기
aInAcademyList.setAttribute('href', '이동할 html');
li.appendChild(aInAcademyList);
// academyList[0].appendChild(li);

/* <img class="academy_image" src="img/im_card_1.png"> */

let img = document.createElement('img');
img.setAttribute('class', 'academy_image');
img.setAttribute('src', 'img/im_card_1.png')
aInAcademyList.appendChild(img);

/* <div class="short_content"> */


function makeElement(tagName, elementName, className, idName,depth) {
    // tagName = let Element;
    elementName = document.createElement(tagName);

    if (className == null) {
        elementName.setAttribute('id',idName);
    }
    else {
        elementName.setAttribute('class', className);
    }
    //이거 무조건 li로 하는게 아니었음 좋겠는데...

    li.appendChild(elementName);
    //    console.log(function makeElement(tagName,elementName));
    // console.log(Element);
}
// appendChild를 여러번 실행시키고 싶음
// 그러니까 저 앞에 변수들을 뭐라고 부르지? ㅠㅠ
 

makeElement('div', 'elementName', 'short_content', null);

makeElement('div', 'elementName', 'short_content', null);

makeElement('div', 'elementName', 'short_content', null);

// example.setAttribute('class','short_content');
// li.appendChild(example);


// const shortContentDiv =document.createElement('div');
// shortContentDiv.setAttribute('class','short_content');
// li.appendChild(shortContentDiv);

// {/* <div class="short_content_wrapper"> */}

// const aInShortContentWrapper = document.createElement('a');
// aInShortContentWrapper.setAttribute('href','이동할 html')
// shortContentDiv.appendChild(aInShortContentWrapper);

// strongInA = document.createElement('strong');
// //CSS 적용안되는 이유 : tittle의 오타가 나서. 
// //tittle이라고 안쓰고 class명을 title로 써서 선택자명도 title이 되버림. ...
// strongInA.setAttribute('class','tittle');
// const textInTittle = document.createTextNode('알고리즘잡스 코딩캠프');
// strongInA.appendChild(textInTittle);

// aInShortContentWrapper.appendChild(strongInA);








// // TODO href로 이동할 url 수정하기
// // shortContentWrapper.appendChild(aInShortContentWrapper);


// 마지막으로넣어줄것~~!

// shortcontentWrapper 구현부
/* <div class="short_content_wrapper"></div> */

// 이 3이라는 숫자가 community에서 a태그 개수 찾아서 리턴한 값이면 참 좋을텐데 말이지ㅠ
//왜? community HTML만 고쳐도 나머지가 다 고쳐지니까,,
//근데이렇게 짜는게 마냥 좋을까? 그럼 community탭의 HTML 태그 한번 잘못쓰면 
//이 자바스크립트 코드 구조가 망가질 수 있는데?
//일단 간단하게 짜보자 ㅇㅇ 돌아가는 똥코드를 찍어보자.
// A태그 개수가 3임(community의 contentbox, academylist, academylistitem안의 a태그)
// 아니 일단은 a태그는 여러태그안에 둘러쌓여있으니까 div 여러개부터 만들어보자...
//그럼 이렇게 만들어진 태그 안에 넣을때(appendChild쓸 때 어떡함?ㅠ 아놔 또 감당 안되게 벌이기...)
//배열은 00부터 시작하니까 2까지 (반복문)돌리면 3개 만들어짐.
//초기식 i=0인 이유 : 아무도 배열에서 초기 값을 1로 지정안하기 때문에
//혼란을 빚을까봐
// let node = document.getElementsByTagName('li'); // 모든 li태그를 불러옴
// for (let i = 0; i < node.length; i++) { // 인덱스값 i가 모든 li태그 번만큼 반복됨
// 	let span = document.createElement('span'); // span태그를 생성
// 	let txt = document.createTextNode('x'); // 'x'라는 텍스트노드를 생성
// 	span.appendChild(txt); // 텍스트 'x'를 span태그에 부착
// 	node[i].appendChild(span); // i번만큼 li태그에 span태그를 부착 
// }
// const numberOfDiv = 2;
// let shortContent = document.getElementsByClassName('short_content'); 
// for (let i = 0; i < numberOfDiv; i++) { // 인덱스값 i가 모든 li태그 번만큼 반복됨

//     let shortContentWrapperDiv =document.createElement('div');
//     shortContentWrapperDiv.setAttribute('class','short_content_wrapper');
//     shortContent.appendChild(shortContentWrapperDiv);
// }

