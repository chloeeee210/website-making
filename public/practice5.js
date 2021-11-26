
const parentEle = document.querySelector('.academy_list');
for (let i = 1; i < 9; i++) {
    // 아이템 생성
    const wrap = document.createElement('li');
    wrap.classList.add('academy_list_item');
    // 앙커 생성
    const anchor = document.createElement('a');
    anchor.href = 'https://이동할 html주소'

    const img = document.createElement('img');
    img.classList.add('academy_image');
    img.setAttribute('src', 'img/im_card_' + i + '.png');

    const div = document.createElement('div');
    div.classList.add('short_content')

    anchor.appendChild(img);
    wrap.appendChild(anchor);
    wrap.appendChild(div);
    // 부모 엘리먼트에 새롭게 만든 아이템 넣기
    parentEle.appendChild(wrap);

    //    const parent = document.querySelector('.academy_list');
    for (let i = 1; i < 4; i++) {
        var divWrapper = document.createElement('div');
        divWrapper.classList.add('short_content_wrapper')
        div.appendChild(divWrapper);
    }

}

var shortContent = document.getElementsByClassName('short_content');
var shortContentWrapper = document.querySelector('.short_content_wrapper')
for (i = 1;i<9;i++){

    shortContent[i].appendChild(shortContentWrapper);
}

// for (let i = 1; i < 4; i++) {

//     // var shortContentWrapper = document.querySelector('.short_content_wrapper');
//     // const parent = document.querySelector('.short_content_wrapper');
//     if (i == 1) {
//         var anchorInWrapper = document.createElement('a');
//         anchorInWrapper.classList.add('no_margin_padding');
//         anchorInWrapper.setAttribute('src', '이동할 html');
//         shortContentWrapper[0].appendChild(anchorInWrapper);

//         const title = document.createElement('strong');
//         title.classList.add('title');
//         title.innerHTML = '알고리즘잡스 코딩캠프'
//         anchorInWrapper.appendChild(title);
//     }


//     if (i == 2) {
//         const term = document.createElement('span');
//         term.classList.add('term');
//         term.innerHTML = '7주'
//         shortContentWrapper[1].appendChild(term);
//     }
//     if (i == 3) {
//         const details = document.createElement('details');
//         shortContentWrapper[2].appendChild(details);
//         const summary = document.createElement('summary');
//         details.appendChild(summary);

//         const price = document.createElement('div');
//         price.classList.add('price');
//         summary.appendChild(price);

//         const normal = document.createElement('span');
//         normal.setAttribute('id', 'normal_price');
//         normal.innerHTML = '249만원 ->'
//         price.appendChild(normal);

//         const discount = document.createElement('span');
//         discount.setAttribute('id', 'discount_price');
//         discount.innerHTML = '199만원'
//         price.appendChild(discount);

//         const toggle = document.createElement('span');
//         toggle.classList.add('toggle_button');
//         price.appendChild(toggle);

//         //contour line
//         const contourLine = document.createElement('div');
//         contourLine.classList.add('contour_line');
//         details.appendChild(contourLine);
//     }


// }

// for (let i = 1; i < 9; i++) {

//     // var shortContent = document.querySelector('.short_content');
//     // shortContentWrapper.appendChild(anchorInWrapper);
// }
