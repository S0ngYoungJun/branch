const http = require('http');

const server = http.createServer((req, res) => {

});

server.litsen(3500, (err) => {
  if(!err){
    console.error('서버 안돌아감');

  }else{
    console.log("3500포토에 돌아감 http://localhsost:3500")
  }
})