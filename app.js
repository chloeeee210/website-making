// node_modules 에 있는 express 관련 파일을 가져온다.
//var(variable)문은 변수를 선언하고, 선택적으로 초기화할 수 있습니다.
var express = require('express')
// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()
const port = 3000
// const academy = require("./public/html/academy.html")

// app.use('/academy',academy)
//Routing
// res 객체는 HTTP 응답을 나타내며 express 앱이 http 요청을 받았을 때 브라우저에 전송하게 된다.
// app.route('/academy', (req, res) => { res.send('academy요청?') })
// .post((req,res) =>{res.send('adddddd')})
// .put((req,res)=>{res.send('update')})
// app.get('/member', (req, res) => { res.send('member page') })
// app.get('/board', (req, res) => { res.send('board page') })


// 3000 포트로 서버 오픈
app.listen(port, function() {
    console.log("start! express server on port 3000")
})


app.get('/', function(req,res) {
    //__dirname은 현재 디렉토리를 참조한다는 뜻(directory name)
    //HTTP 응답을 전송한다. body 파라미터는 Buffer 객체, String, 객체, 배열 등이 될 수 있다.
    res.sendFile(__dirname + "/public/home.html")
})

// localhost:3000/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
app.get('/academy', function(req,res) {
    res.sendFile("./public/html/academy.html")
})
const path = require('path')
// public 디렉토리를 static으로 기억한다.
// public 내부의 파일들을 localhost:3000/파일명 으로 브라우저에서 불러올 수 있다.
// app.use(express.static(__dirname + '/public/html'))
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res)=> {
    const index = path.join(__dirname,'/','../html','academy.html')
    res.sendFile(index);
});
// app.use('/static',express.static(__dirname + '/public'));

// app.use('/academy',express.static(path.join(__dirname, 'public/html')));

// app.use('/community',express.static(path.join(__dirname, 'public/html')));
