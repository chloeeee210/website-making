


const parentEle = document.querySelector('.academy_list');
for (let i = 0; i<8; i++) {
    // 아이템 생성
    const wrap = document.createElement('li');
    wrap.classList.add('wrap');
    // 앙커 생성
    const anchor = document.createElement('a');
    anchor.href = 'https://이동할 html주소'
    // anchor.innerHTML = '바로가기'
    // 아이템에 앙커 넣기
    wrap.appendChild(anchor);
    // 부모 엘리먼트에 새롭게 만든 아이템 넣기
    parentEle.appendChild(wrap);

    

}