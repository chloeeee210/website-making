let classElement = ['academy_list'];

function makeElement(wrappedClassName, tagName, className, textInClass) {

    const wrappedClass = document.getElementsByClassName(wrappedClassName);
    element = document.createElement(tagName);

    if (tagName == 'a') {
        // TODO HTML 고치기
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

function makeIdElement(wrappedClassName, tagName, idName, textInId) {
    const wrappedClass = document.getElementsByClassName(wrappedClassName);
    element = document.createElement(tagName);
    // TODO HTML 고치기
    element.setAttribute('id', idName);

    classElement.push(idName);
    const text = document.createTextNode(textInId);
    element.appendChild(text);
    wrappedClass[0].appendChild(element);
}

function makeImgElement(wrappedClassName, className, fileNum) {

    const wrappedClass = document.getElementsByClassName(wrappedClassName);
    element = document.createElement('img');
    element.setAttribute('class', className);
    element.setAttribute('src', 'img/im_card_' + fileNum + '.png');
    wrappedClass[0].appendChild(element);
    classElement.push(className);

}

//  i means  referenceValue
function makeItem() {
    for (i = 1; i < 9; i++) {
        makeElement(classElement[0], 'li', 'academy_list_item' + i);
    }
    for (i = 1; i < 9; i++) {
        makeElement(classElement[i], 'a', 'aInItem' + i);
    }

    const fileNumAndreferenceValueI = {
        // key:fileNum:Value:referenceValueI
        //이거 변수명 : 변수명이렇게 쓰면 안되겠니?
        1: 9,
        2: 10,
        3: 11,
        4: 12,
        5: 13,
        6: 14,
        7: 15,
        8: 16
    };
    for (const [key, value] of Object.entries(fileNumAndreferenceValueI)) {
        makeImgElement(classElement[value], 'academy_image', key);
    }
    for (i = 1; i < 9; i++) {

        makeElement(classElement[i], 'div', 'short_content' + i);
    }

    for (wrapperNum = 1; wrapperNum < 4; wrapperNum++) {

        for (i = 25; i < 33; i++) {
            makeElement(classElement[i], 'div', 'short_content_wrapper' + i + 'wrapperNum' + wrapperNum);
        }
    }

    for (i = 33; i < 42; i++) {
        makeElement(classElement[i], 'a', 'undefined' + i);
    }
    for (i = 57; i < 65; i++) {
        makeElement(classElement[i], 'strong', 'title' + i, '알고리즘잡스 코딩캠프');
    }
    for (i = 41; i < 49; i++) {
        makeElement(classElement[i], 'div', 'term' + i, '7주');

    }
    for (i = 49; i < 57; i++) {
        makeElement(classElement[i], 'details', 'undefined' + i);

    }
    for (i = 82; i < 90; i++) {
        makeElement(classElement[i], 'summary', 'summary' + i);

    }
    for (i = 90; i < 98; i++) {
        makeElement(classElement[i], 'div', 'price' + i);
    }
    for (i = 98; i < 106; i++) {
        makeElement(classElement[i], 'span', 'normal_price', '249만원 ->');
    }
    for (i = 98; i < 106; i++) {
        makeElement(classElement[i], 'span', 'discount_price', '199만원');
    } for (i = 98; i < 106; i++) {
        makeElement(classElement[i], 'span', 'toggle_button');
    }
    for (i = 90; i < 98; i++) {
        makeElement(classElement[i], 'div', 'contour_line');
    }
    for (i = 90; i < 98; i++) {
        makeElement(classElement[i], 'div', 'detail_content' + i);
    }
    for (i = 138; i < 146; i++) {
        makeElement(classElement[i], 'ul', 'detail_content_subtitle' + i);
    }
    for (i = 146; i < 154; i++) {
        makeElement(classElement[i], 'li', 'sub_content', '기간');
        makeElement(classElement[i], 'li', 'sub_content', '비용');
        makeElement(classElement[i], 'li', 'sub_content', '커리큘럼');
        makeElement(classElement[i], 'li', 'sub_content', '비고');
    }
    for (i = 138; i < 146; i++) {
        makeElement(classElement[i], 'ul', 'detail_content_describe' + i);
    }
    for (i = 186; i < 194; i++) {
        makeElement(classElement[i], 'li', 'sub_content', '7주');
        makeElement(classElement[i], 'li', 'sub_content', '119만원->78만 5천원');
        makeElement(classElement[i], 'li', 'sub_content', '코딩테스트');
        makeElement(classElement[i], 'li', 'sub_content', '상담신청시 코딩테스트 모의고사 응시권 제공, 수강생 6개월 밀착케어');

    }

}

makeItem();

//Reference
console.log(classElement[0]);// academy_list
console.log(classElement[1]);// academy_list_item1-8[1-8]
console.log(classElement[9]); //aInItem1-8[9-16]
console.log(classElement[17]); //academy_image [17-24]
console.log(classElement[25]);//short_content1-8[25-32]
console.log(classElement[33]);//short_content_wrapper25wrapperNum1[33-40]
console.log(classElement[41]);//short_content_wrapper25wrapperNum2[41-48]
console.log(classElement[49]);//short_content_wrapper25wrapperNum3[49-56]
console.log(classElement[57]);//undefined33-41[57-65]
console.log(classElement[66]);//title57-64[66-73]
console.log(classElement[74]);//term41-48[74-81]
//details
console.log(classElement[82]);//undefined49-56[82-89]
//summary
console.log(classElement[90]);//summary82-89[90-97]
console.log(classElement[98]);//price90-97[98-105]
console.log(classElement[106]);//normal_price [106~113]
console.log(classElement[114]);//discount_price [114~121]
console.log(classElement[122]);//toggle_button [122~129]
console.log(classElement[130]);//contour_line [130~137]
console.log(classElement[138]);//detail_content90~97 [138~145]
console.log(classElement[146]);//detail_content_subtitle [146~153]
console.log(classElement[154]);//sub_content [154~~161]
console.log(classElement[162]);//sub_content [162~~169]
console.log(classElement[170]);//sub_content [170~~177]
console.log(classElement[178]);//sub_content [178~~185]
console.log(classElement[186]);//detail_content_describe143[186~193]
console.log(classElement[194]);// subcontent[194~201]