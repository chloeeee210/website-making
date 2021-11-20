// 일단돌아가는 똥코드
const date = document.lastModified;
var theDate=date.length-8;

let footer = document.getElementsByClassName('footer');
let secondOnly = document.getElementsByClassName('footer_second_page_only');
var br = document.createElement('br');

const text = document.createTextNode('마지막 업데이트 날짜 ')

const timer = document.createTextNode(date);


secondOnly[0].appendChild(br);
footer[0].appendChild(secondOnly[0]);

secondOnly[0].appendChild(text);
footer[0].appendChild(secondOnly[0]);

secondOnly[0].appendChild(timer);
footer[0].appendChild(secondOnly[0]);
// 일단 돌아가는 똥코드 끝

// var message=document.lastModified;

// var the_date=message.length-8;
// document.getElementById('footer_second_page_only').innerHTML=the_date

// document.write("last Modified:"+message.substring(the_date, 0));

// const  message=document.lastModified;

// // var the_date=message.length-8;
// var element = document.getElementById("#last_updated_day");
// // element.innerText ="message";
// // document.write(element.innerText);

// element.appendChild(para);

// // p태그 만들고
// var para = document.createElement("p");
// // 거기에 써라 

// var node = document.createTextNode(message);

// // para의 자식요소로 node를 넣기
// para.appendChild(node);


// document.write("last Modified:"+message);



// var the_date=message.length-8;
// element.innerText ="message";
// document.write(element.innerText);


// p태그 만들고
// var para = document.createElement("p");
// // 거기에 써라 

// var node = document.createTextNode(message);

// // para의 자식요소로 node를 넣기
// para.appendChild(node);

// var element = document.getElementById("#last_updated_day");
// element.appendChild(para).appendChild(node);

// document.write("last Modified:"+message);

// var date = document.querySelector('#last_updated_day');

// date.textContent= 'text here';
// date.classList.add('container')
// console.log(date)

// const message = document.lastModified;

// function appendText() {
//     const element = document.getElementById("#last_upadated_day");
//     const content = 
//           document.createTextNode("AppendChild");
    
//     element.appendChild(content);

// } 

