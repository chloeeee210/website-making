const parentEle = document.querySelector('.parentEle')
for (let i = 0; i < 10; i++) {
    // 아이템 생성
    const wrap = document.createElement('li')
    wrap.classList.add('wrap')
    parentEle.appendChild(wrap)

    var anchor = document.createElement('a')
    anchor.innerHTML = '예시 코드'
    wrap.appendChild(anchor)
    // 아이템에 앙커 넣기
    // 부모 엘리먼트에 새롭게 만든 아이템 넣기
    //DIV를 ANCHOR안에 넣기
    // const fe = document.querySelector('.wrap')
    // if (i == 1){
    for (let i = 0; i < 3; i++) {
        var a = document.createElement('div')
        a.classList.add('eg')
        anchor.appendChild(a)
        // wrap.appendChild(fe.appendChild(a))
        
        if (i == 0) {
        const b = document.createElement('li')

        a.appendChild(b)
        }


    }


    // }
}