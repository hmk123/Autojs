// 1. 加载http核心模块
let http = require("http");
const querystring = require('querystring')

var fs = require("fs");
// 2. 使用http.createServer()方法创建一个web服务器，通过server接收
let server = http.createServer();

const axios = require('axios')

var request = require('request');

// 3. 服务器要做的事：提供服务，发送、接收、处理请求，并发送响应
/** server.on注册request请求事件，客户端请求时会自动触发服务器的request请求事件；
	回调函数对请求进行处理，参数介绍：
	req提供了请求的详细信息。通过它可以访问请求头和请求的数据.
	res用于构造要返回给客户端的数据。
*/
server.on("request", function (req, res) {
  // 这里的回调事件根据需要编写即可，这里给出简单示例
    
  // 3.1 收到请求时，打印请求的路径
 // console.log(`收到客户端的请求了，请求路径是${req.url}`);
  // 3.2 设置响应头中的Content-Type为plain普通文本模式，否则中文无法正常展示
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  let url = req.url;
   

  // 3.3 根据不同的url展示不同内容

    if ( url == '/favicon.ico'){
        
    }else{
//---------------------------//

    url2 =  url.split('?')[0] 

    if (url2 == "/tt/") {
    
        req.query = querystring.parse(url.split('?')[1])
        
        
        var text =  JSON.stringify(req.query)
        name  = JSON.parse(text)['name']
        did  = JSON.parse(text)['id']
    
        let arr = ['something', 'anything', 'nothing', 'anything'];
        let index = arr.indexOf('nothing');

        console.log ( name,did)

    //
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
        console.log(err)
        str = "错误"
        res.write( str)
        }
    
        let arr = JSON.parse(data)
    
        str ="用户不存在"
    for (let index = 0; index < arr.length; index++) {
        
        if( arr[index]['name'] == name){
    
            if( arr[index]['id'] == ""){
                console.log('注册');
                arr[index]['id'] = did
    
                wF(arr)
                str ="登录"
                
            }else{
    
                if( arr[index]['id'] == did){
    
                    str ="登录"
                    console.log(str )
                
                }else{
                    str ="设备不符"
                    
                    
                }
            }
        }
    
        
    
    }
    
    
    
        res.write( str)
    
    
        res.end()
    })
    ///
    }


      else if (url2 == "/wx") {
        // res.write--在页面内写入内容 
        req.query = querystring.parse(url.split('?')[1])
        
        
        var text =  JSON.stringify(req.query)
        name  = JSON.parse(text)['name']
        did  = JSON.parse(text)['echostr']
            console.log(did)
           var a = []
           res.write(did);
           res.end()
         
      }
      else if (url2 == "/2") {
        res.setHeader('Content-Type','text/html')
      // res.write--在页面内写入内容 
      fs.readFile('wx.html', 'utf8', (err, data) => {
          if (err) {
            console.log(err)
            str = "错误"
            res.write("404");
            res.end()
          }
          res.write(data);
          res.end()
      })
    }
  else if (url2 == "/") {
    // res.write--在页面内写入内容 
    res.write("首页");
    res.end()
  } else if (url2 == "/login") {
      
      var tk = ''
      
    var ss='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx6a47843bfdbf6fb8&secret=0def1f67a9ea0f043df1e9598a34751d'
     request(ss, function(err, response, body){
        //err 当前接口请求错误信息
        //response 一般使用statusCode来获取接口的http的执行状态
        //body 当前接口response返回的具体数据 返回的是一个jsonString类型的数据 
        //需要通过JSON.parse(body)来转换
        if(!err && response.statusCode == 200){
          //todoJSON.parse(body)
          var ress = JSON.parse(body);
           tk=    ress.access_token
              

           axios.post(' https://api.weixin.qq.com/cgi-bin/menu/create?access_token='+tk, {
        
     
            
                "button":[
                {	
                     "type":"click",
                     "name":"今日歌曲",
                     "key":"V1001_TODAY_MUSIC"
                 },
                 {
                      "name":"菜单",
                      "sub_button":[
                      {	
                          "type":"view",
                          "name":"搜索",
                          "url":"http://www.soso.com/"
                       },
                       {
                            "type":"miniprogram",
                            "name":"wxa",
                            "url":"http://mp.weixin.qq.com",
                            "appid":"wx286b93c14bbf93aa",
                            "pagepath":"pages/lunar/index"
                        },
                       {
                          "type":"click",
                          "name":"赞一下我们",
                          "key":"V1001_GOOD"
                       }]
                  }]
            
        
        
        
                })
        .then((res) => {
          console.log(`statusCode: ${res.statusCode}`)
          console.log(res.data)
        })
        .catch((error) => {
          console.error(error)
        
        })





                       request('https://api.weixin.qq.com/cgi-bin/get_api_domain_ip?access_token='+tk, function(err, response, body){
        //err 当前接口请求错误信息
        //response 一般使用statusCode来获取接口的http的执行状态
        //body 当前接口response返回的具体数据 返回的是一个jsonString类型的数据 
        //需要通过JSON.parse(body)来转换
        if(!err && response.statusCode == 200){
          //todoJSON.parse(body)
          var ress = JSON.parse(body);
              res.write(body);
    res.end()
        }
      })
      
      

  }else{
    console.log(url2)
    res.end()
  }
})
        }}
     
   
      
      
 
  
//---------------------------//

});
// 4.绑定端口号;
server.listen(3001, function () {
  console.log("服务器启动成功，可以通过http:127.0.0.1:3001/来进行访问");
});

//wF ()

function wF (data){

    let newArr = JSON.stringify(data)//将数组转成json格式
    
//       要写入的文件   要写入的内容       a追加|w写入（默认）|r（读取）  回调函数
fs.writeFile("data.json",newArr,{flag:"w"},function (err) {
    if(err){
        return console.log(err);
    }else {
        console.log("写入成功");
    }
})
}


//文件读取

function test (name , id ){

str = ''
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    str = "错误"
    return str
  }
 
  let arr = JSON.parse(data)


 for (let index = 0; index < arr.length; index++) {
    
    if( arr[index]['name'] == name){

        if( arr[index]['id'] == ""){
            console.log('注册');
            arr[index]['id'] = id

            wF(arr)
            str ="登录"
            return str
        }else{

            if( arr[index]['id'] == id){

                str ="登录"
                return str
                
            }else{
                str ="设备不符"
                return str
               
            }
        }
    }

    
 
 }


  str ='用户不存在'
  return str



})
}