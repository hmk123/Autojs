const express = require("express");

const bodyParser = require("body-parser");

var fs = require("fs");

const http = require("http");

const axios = require('axios')

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}))


var request = require('request');


const allowCrossDomain = function(req, res, next){

res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。

res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');//允许任何方法

 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Session-Token'); //允许任何类型

 next();//一定要添加这段代码，不然程序无法正常往下执行

}


var tonken = '55_JpEBPWmjqhfUoSaVG6qjU1Oiy5geejIYjMnabRTesLmAr4Jmf1IOKNDPpgvKYfpnN26xLNtQ4cU5PiZdlCCmBo3Zng2qTEWWPsyaDPTGXsXGIVDW8OoEp8WnaSWNiKsmsVvNtX3Rbm4hP6ndKGEbACAYUS'
    


app.use(allowCrossDomain);

app.get("/api/user",(req, res)=>{

 const user = {

name: "job",
 age: 20

}
 res.send({code: 200, data: user})

})

app.get('/',(req,res)=>{


 
 
    axios.post(' https://api.weixin.qq.com/cgi-bin/menu/create?access_token='+tonken, {
        
     
        button:1,
        type:"click",
        name:"sad",
        key:"asdad"
    
    
    
            })
    .then((res) => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res.data)
    })
    .catch((error) => {
      console.error(error)
    
    })

  
    request('https://api.weixin.qq.com/cgi-bin/draft/count?access_token='+tonken, function(err, response, body){
        //err 当前接口请求错误信息
        //response 一般使用statusCode来获取接口的http的执行状态
        //body 当前接口response返回的具体数据 返回的是一个jsonString类型的数据 
        //需要通过JSON.parse(body)来转换
        if(!err && response.statusCode == 200){
          //todoJSON.parse(body)
          
          /*------------ */
          var ress = JSON.parse(body);
          console.log(ress.total_count)
          
          res.send(ress)
        }
      })
   
})




app.listen(3000,() => console.log("server on http://localhost:3000"))

