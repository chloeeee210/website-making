# [website-making]devflo directory tree
C:\USERS\이름\DESKTOP\DEVFLO

```
|   app.js
|   main.js
|   ngrok.exe
|   package-lock.json
|   package.json
|
|
+---private
|   +---DOM_making_practice
|   |       egeg.html
|   |       practice.js
|   |       practice2.js
|   |       practice3.js
|   |       practice4.js
|   |       practice6.js
|   |
|   +---flexbox_practice
|   |       eg.css
|   |       eg.html
|   |
|   \---font
|           font.html
|           NanumSquareB.otf
|           NanumSquareB.ttf
|           NanumSquareEB.otf
|           NanumSquareEB.ttf
|           NanumSquareL.otf
|           NanumSquareL.ttf
|           NanumSquareOTF_acB.otf
|           NanumSquareOTF_acEB.otf
|           NanumSquareOTF_acL.otf
|           NanumSquareOTF_acR.otf
|           NanumSquareR.otf
|           NanumSquareR.ttf
|           NanumSquare_acB.ttf
|           NanumSquare_acEB.ttf
|           NanumSquare_acL.ttf
|           NanumSquare_acR.ttf
|
\---public
    |   academy.html
    |   community.html
    |   home.html
    |   news.html
    |   package-lock.json
    |   package.json
    |   youtube.html
    |
    +---css
    |       #academy.css
    |       #home_footer.css
    |       #nav_bar_community.css
    |       community.css
    |       home.css
    |       nav_bar.css
    |
    +---img
    |       example.PNG
    |       ic_up_arrow.svg
    |       im_bg1.svg
    |       im_bg2.svg
    |       im_bg3.svg
    |       im_bg4.svg
    |       im_bg5.png
    |       im_bg5@2x.png
    |       im_bg_box.png
    |       im_bg_box@2x.png
    |       im_box_yellow.svg
    |       im_card_1.png
    |       im_card_2.png
    |       im_card_3.png
    |       im_card_4.png
    |       im_card_5.png
    |       im_card_6.png
    |       im_card_7.png
    |       im_card_8.png
    |       im_line_title.svg
    |       third_page_line_img.svg
    |
    +---js_dom
    |       items_dom.js
    |
    +---js_motion
    |       last_updated_timer.js
    |       scroll.js
    |       sidebar_motion.js
    |       size_reduce_popup.js
```

***

# Web-FE project | 반응형 웹사이트 제작 회고록(10.27~11.24)

*[설명] 이 글은 프론트엔드 웹개발을 배우면서 나타난 문제점을 되돌아보는 글입니다.*

나타난 문제를 다음과 같이 정리했다.

```
프로세스 | 드러난 문제를 미룸
의사소통 | 의도,목적을 잃어버린 말하기
태도 | 자신감 부족
```

## 프로세스 | 냅다 구현만 바라보기
### intro
드러나거나 예상되는 문제를 제쳐두고 구현한다는 단점을 발견했다.

다시 말해 "구현"에만 집중한다는 뜻이다.

무언가를 새로 만든다고 했을 때 시행착오가 많은 것은 어쩔 수 없다.

하지만 예상가능하거나 보이는 문제를 제처두는 것은 문제라고 생각한다.

왜냐하면 문제 때문에 완성을 못하게 된다면 새로운 방법을 찾아 처음부터 다시 구현해야 하기 때문이다.

그래도 자바 배울 때에 비해 구현하는 속도가 빨라졌고, 내가 모르는 것을 검색하는 요령은 생겼다.

하지만 앞선 문제로 인해 일주일 안에 구현을 끝내지 못하는 경우가 있었다.


### example

만들면서 생긴 가장 큰 문제를 크게 두가지로 정리하였다.


```
1. 모바일 기기에서 보았을 때 이미지의 크기가 커서 보이지 않는다.

2. JS를 이용하여 만든 DOM요소에 CSS 적용이 되지 않는다.
```

1. 이유 : ①position : absolute 속성 + 각 위치값의 단위를 ②px로 구현했기 때문이다.

① position: absolute 는 position: static 속성을 가지고 있지 않은 부모를 기준으로 움직인다. 

따라서 요소가 어떠한 정적인 위치에 고정되는 것이 아니라 주변 엘리먼트가 무엇이냐에 따라 위치가 바뀔 수 있다. 

position:absolute는 상위 엘리먼트로 가면서 position이 static이 아닌 엘리먼트를 기준으로 위치를 계산하기 때문이다. 


② px은 정적길이단위로 웹사이트의 크기가 줄어듦에 따라 길이가 변하지 않는다.


했던 일 : 반응형을 구현하기 위해서 레이아웃과 이미지 단위를 모두 수정했다.


------------------------------------------------------------

2. 이유 : 클래스 이름을 변경했기 때문이다.

```
let classElement = ['academy_list'];

function makeElement(wrappedClassName, tagName, className, textInClass) {

    const wrappedClass = document.getElementsByClassName(wrappedClassName);
    element = document.createElement(tagName);

    if (tagName == 'a') {
        element.setAttribute('href', '이동할 html')
        element.setAttribute('class', className);
    }
    else {
        element.setAttribute('class', className);
    }
    if (textInClass !== undefined) {
        const text = document.createTextNode(textInClass);
        element.appendChild(text);
    }
    else {
        const text = document.createTextNode('');
        element.appendChild(text);
    }
    wrappedClass[0].appendChild(element);
    classElement.push(className);
    }
    
    
    for (i = 1; i < 9; i++) {
        makeElement(classElement[0], 'li', 'academy_list_item' + i);
    }
    for (i = 1; i < 9; i++) {
        makeElement(classElement[i], 'a', 'aInItem' + i);
        
        }
```
위와 같은 함수를 만들었다. 기능은 1) 상위 엘리먼트를 찾고 2) Element를 만들어서 3) appendChild로 넣는 것이다.

이 함수를 이용해 여러 개의 element를 만들고 싶어 반복문을 돌렸다. 그런데 요소가 원하는 부모 요소에 들어가지 않았다.

첫 번째 요소부터 마지막 요소까지 클래스 이름이 똑같았기 때문이다.

그래서 반복문을 돌려서 만들어진 각각의 엘리먼트에 번호를 매겨 "몇 번째" 엘리먼트에 새로운 엘리먼트를 넣으려고 했다.

그런데 이렇게 번호를 매기면 원래 만드려고 했던 클래스 이름에 숫자가 붙어 CSS의 선택자에 써놓은 클래스 이름과 달라지게 된다.

이것은 충분히 예상했던 결과다..엘리먼트를 만들면서 CSS 적용이 되지 않는 것이 눈에 보였기 때문이다.

했던 일 : 함수를 쓰지 않고 반복문만을 사용하여 처음부터 다시 DOM을 만들었다.

------------------------------------------------------------
## 의사소통 | 길잃

말하는 목적을 잃는 경우가 있었다. 나는 생각하고 나서 말하는데 약간의 시간이 필요하다. 즉 떠올리고 나서 즉시 말하는 것을 힘들어했다.

이를 개선하기 위해 지난 두 달 간 말하기 연습을 했다.(지난 회고록 참조)

덕분에 머리에 생각한 것을 말하는 것 자체는 되는데, 말하다보니 방향성을 종종 잃게 되었다.

이유는 부연설명을 해서다. 

부연설명을 하다가 너무 깊다고 판단이 되면 끊고 다시 원래 말하는 목적으로 되돌아가는 것이 필요하다.
 
------------------------------------------------------------
## 태도 | 작은 목소리
자신감이 부족하다는 피드백을 모의면접 때 받았다. 지난 번에도 받은 것 같다.

그래도 내가 느낄 때는 지난 번 보다는 자신감이 생긴 것 같다. 

하지만 이 영역에 한해서는 문제 인식-> 문제 해결 이 과정에 적용되기 어렵다.

왜냐하면 여러 가지 요인이 복합적으로 얽혀 있기 때문이다.

과거를 회상하자면, 나는 자신감이 부족한 사람은 맞았다. 하지만 겉으로 보이는 데에 있어서는 자신감 있는 태도를 연기했었다. 자신감이 없다는 피드백을 받은 적이 없었기 때문이다.

그렇다면 근래의 경험(아마도 1년 간의 병원생활)으로 인해 겉으로 보여지는 태도도 변화했다는 결론을 내릴 수 있다.

원인이 명확하다고 해도, 이미 일어난 과거의 경험을 바꿀 수 없다. 다시 돌아가도 아마 똑같은 선택을 했을 것이기 때문이다.

그리고 성장하려면 과거, 환경 탓만 할 수 없다. 

그럼에도 불구하고 이유를 찾고 동기부여를 해야 성장할 수 있다.

과거에 어떠한 경험을 했던지간에, 지금 내가 당면하고 있는 문제는 "자신감이 없다"는 것이다. 현재 가지고 있는 문제에 집중하자.

나름 생각해 본 해결방법은 블로그에 따로 포스팅했다.(밝히고 싶지 않아서)

------------------------------------------------------------
## 마무리

결론적으로 드러난 문제의 공통점은 앞만 보고 달린다는 것이다. 주변상황을 살피자.
