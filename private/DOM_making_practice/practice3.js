let classElement = ['academy_list', 'academy_list_item', 'short_content', 'short_content_wrapper'];


// a를 담기게 하자!
// TODO if문넣기~~~~
function makeElement(wrappedClassName, tagName, className, textInClass) {
    //일단 찾아서
    const wrappedClass = document.getElementsByClassName(wrappedClassName);
    element = document.createElement(tagName);

    if (tagName == 'a') {
        element.setAttribute('href', '이동할 html')
        element.setAttribute('class', className);

        // classElement.push(className);

    }
    else {
        // TODO HTML 고치기
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


    //이거 무조건 li에 넣는게  아니었음 좋겠는데...
    wrappedClass[0].appendChild(element);
    classElement.push(className);
}

function makeIdElement(wrappedClassName, tagName, idName, textInId) {
    //일단 찾아서
    const wrappedClass = document.getElementsByClassName(wrappedClassName);
    element = document.createElement(tagName);
    // TODO HTML 고치기
    element.setAttribute('id', idName);

    classElement.push(idName);
    const text = document.createTextNode(textInId);
    element.appendChild(text);
    //이거 무조건 li에 넣는게  아니었음 좋겠는데...
    wrappedClass[0].appendChild(element);
}

// ★★★★★★★★★이미지 만드는
function makeImgElement(wrappedClassName, className, fileNum) {

    const wrappedClass = document.getElementsByClassName(wrappedClassName);
    element = document.createElement('img');

    element.setAttribute('class', className);
    element.setAttribute('src', 'img/im_card_' + fileNum + '.png');

    wrappedClass[0].appendChild(element);
    classElement.push(className);

}

function makeText(wrappedClassName, text) {
    const wrappedClass = document.getElementsByClassName(wrappedClassName);
    const contents = document.createTextNode(text);
    wrappedClass[0].appendChild(contents);

}

// item 8개 만들거임!
// for (i = 0; i < 8; i++) {
    
    makeElement(classElement[0], 'li', classElement[1]);
// }
    //1번째 item
    // makeElement  (classElement[0],'li',classElement[1]);
    {/*64th <a href="/이동할html/"> */ }
    makeElement(classElement[1], 'a', 'aInItem');

    // /*img class="academy_image" src="img/im_card_1.png">
    makeImgElement(classElement[5], 'academy_image', 1);
    // {/* <div class="short_content"> */ }
    makeElement(classElement[1], 'div', classElement[2]);
    
    // {/* <div class="short_content_wrapper"> */ }
    // makeElement(classElement[2], 'div', classElement[3]);

    // /* HTML 69번째줄 <a href="/이동할html/" class="non_margin_padding"> */
    // makeElement(classElement[3], 'a', 'aInDiv');
    // // makeElement(classElement[])
    // // tittle스펠링일부러..틀림..
    // makeElement(classElement[16], 'strong', 'title');
    // makeText(classElement[17], '알고리즘잡스 코딩캠프')

    // makeElement(classElement[2], 'div', classElement[3] + 'sec');
    // makeIdElement(classElement[3] + 'sec', 'div', 'term', '7주');
    // makeElement(classElement[2], 'div', classElement[3] + 'third');
    // // makeText(classElement[20],'7주');
    // makeElement(classElement[3] + 'third', 'details');
    // makeElement(classElement[22], 'summary', 'sum');
    // makeElement(classElement[22], 'div', 'price');
    // makeIdElement(classElement[23], 'span', 'normal_price', '249만원 ->');
    // makeIdElement(classElement[23], 'span', 'discount_price', '199만원');
    // makeElement(classElement[23], 'span', 'toggle_button');
    // makeElement(classElement[21], 'div', 'contour_line');
    // makeElement(classElement[21], 'div', 'detail_content');
    // makeElement(classElement[28], 'ul', 'detail_content_subtitle');
    // makeElement(classElement[28], 'ul', 'detail_content_describe');
    // makeElement(classElement[29], 'li', 'sub_content', '기간');
    // makeElement(classElement[29], 'li', 'sub_content', '비용');
    // makeElement(classElement[29], 'li', 'sub_content', '커리큘럼');
    // makeElement(classElement[29], 'li', 'sub_content', '비고');

    // makeElement(classElement[30], 'li', 'sub_content', '7주');
    // makeElement(classElement[30], 'li', 'sub_content', '119만원');
    // makeElement(classElement[30], 'li', 'sub_content', '코딩테스트');
    // makeElement(classElement[30], 'li', 'sub_content', '상담신청시 코딩테스트 모의고사 응시권 제공, 수강생 6개월 밀착케어');



console.log(classElement[0]);// academy_list
console.log(classElement[1]);// academy_list_item
console.log(classElement[2]);// short_content
console.log(classElement[3]);// short_content_wrapper
console.log(classElement[4]); //li academy_list_item

console.log(classElement[5]); //li academy_list_item

console.log(classElement[6]); //li academy_list_item
console.log(classElement[7]); //li academy_list_item
console.log(classElement[8]); //li academy_list_item
console.log(classElement[9]);//li academy_list_item
console.log(classElement[10]);//li academy_list_item

