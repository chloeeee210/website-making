//
const parentEle = document.querySelector('.academy_list');

// 변수할당..해서 써주면 좋음 그냥 9가아니라 
//url상수로 바꿔주기 이파일에서 쓸거같으면 그냥 상수로 선언하기

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
        //     var shortContent = document.querySelector('.short_content');
        //     var shortContentWrapper = document.querySelector('.short_content_wrapper');

        if (i == 1) {
            var anchorInWrapper = document.createElement('a');
            anchorInWrapper.classList.add('no_margin_padding');
            anchorInWrapper.setAttribute('src', '이동할 html');
            divWrapper.appendChild(anchorInWrapper);

            var title = document.createElement('strong');
            title.classList.add('title');
            title.innerHTML = '알고리즘잡스 코딩캠프'
            anchorInWrapper.appendChild(title);
        }
        //     // shortContentWrapper[i].appendChild(anchorInWrapper);
        // }
        // // divWrapper.appendChild(anchorInWrapper.appendChild(title));
        // // divWrapper.appendChild(shortContentWrapper.appendChild(term));

        // var shortContentWrapper = document.querySelector('.short_content_wrapper');
        if (i == 2) {
            var term = document.createElement('span');
            term.classList.add('term');
            term.innerHTML = '7주'

            divWrapper.appendChild(term);
        }
        //     }
        if (i == 3) {
            const details = document.createElement('details');
            divWrapper.appendChild(details);
            const summary = document.createElement('summary');
            details.appendChild(summary);


            const price = document.createElement('div');
            price.classList.add('price');
            summary.appendChild(price);

            const normal = document.createElement('span');
            normal.setAttribute('id', 'normal_price');
            normal.innerHTML = '249만원 ->'
            price.appendChild(normal);

            const discount = document.createElement('span');
            discount.setAttribute('id', 'discount_price');
            discount.innerHTML = '199만원'
            price.appendChild(discount);

            const toggle = document.createElement('span');
            toggle.classList.add('toggle_button');
            price.appendChild(toggle);

            //contour line
            const contourLine = document.createElement('div');
            contourLine.classList.add('contour_line');
            details.appendChild(contourLine);

            const detailContent = document.createElement('div');
            detailContent.classList.add('detail_content');
            details.appendChild(detailContent);

            const detailContentSubtitle = document.createElement('ul');
            detailContentSubtitle.classList.add('detail_content_subtitle');
            detailContent.appendChild(detailContentSubtitle);
            //XXX 깔끔하지않은 코드 개선해야 함. 
            for (let i = 1; i < 5; i++) {
                const subContent = document.createElement('li');
                subContent.classList.add('sub_content');
                detailContentSubtitle.appendChild(subContent);

                if (i == 1) {
                    subContent.innerHTML = '기간';

                }
                if (i == 2) {
                    subContent.innerHTML = '비용';

                }
                if (i == 3) {
                    subContent.innerHTML = '커리큘럼'

                }
                if (i == 4) {
                    subContent.innerHTML = '비고'

                }
            }


            const detailContentDescribe = document.createElement('ul');
            detailContentDescribe.classList.add('detail_content_describe');
            detailContent.appendChild(detailContentDescribe);
            //XXX 깔끔하지않은 코드 개선해야 함. 

            for (let i = 1; i < 5; i++) {
                const subContent = document.createElement('li');
                subContent.classList.add('sub_content');
                detailContentDescribe.appendChild(subContent);


                if (i == 1) {
                    subContent.innerHTML = '7주';

                }
                if (i == 2) {
                    subContent.innerHTML = '119만원->78만 5천원';

                }
                if (i == 3) {
                    subContent.innerHTML = '코딩테스트'

                }
                if (i == 4) {
                    subContent.innerHTML = '상담신청시 코딩테스트 모의고사 응시권 제공, 수강생 6개월 밀착케어'

                }


            }
        }



    }

}




    // for (let i = 1; i < 4; i++) {

    //     // var shortContentWrapper = document.querySelector('.short_content_wrapper');
    //     // const parent = document.querySelector('.short_content_wrapper');

    //     }




    // for (let i = 1; i < 9; i++) {



    //     shortContent[i].appendChild(shortContentWrapper);
    //     // var shortContent = document.querySelector('.short_content');
    //     // shortContentWrapper.appendChild(anchorInWrapper);
    // }
