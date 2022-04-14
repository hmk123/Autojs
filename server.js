// 1. 加载http核心模块
let http = require("http");
const querystring = require('querystring')


var fs = require("fs");
// 2. 使用http.createServer()方法创建一个web服务器，通过server接收
let server = http.createServer();




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
    else if (url2 == "/add") {
        // res.write--在页面内写入内容 
        add()
        res.write("首页");
        res.end()
      }
      /////////
      else if (url2 == "/wx") {
        // res.write--在页面内写入内容 
        req.query = querystring.parse(url.split('?')[1])
        
        
        var text =  JSON.stringify(req.query)
        name  = JSON.parse(text)['name']
        did  = JSON.parse(text)['echostr']

           var a = []
           res.write(did);
           res.end()
         
      }
      /////////////////////////
      else if (url2 == "/id") {
        // res.write--在页面内写入内容 
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) {
              console.log(err)
              str = "错误"
              return str
            }

            let arr = JSON.parse(data)

           var a = []
          
            
    
              for (let index = 0; index < arr.length; index++) {
                      
                  if( arr[index]['id'] == ""){
                      a.push(arr[index]['name'])
                    
                     
                  }
          
              }
        res.write(a.toString());
        res.end()
        })



      }



      else if (url2 == "/2") {
        request('https://api.weixin.qq.com/cgi-bin/draft/count?access_token=55_bKeB1KWAVy5zQ7q7NjCx5vqi7yocJE1nY77I54oZ6ZroIEGPD9bcuF9T-0ADJW49JfxbrIMw3SYjJFsWjqlE-EJ3zz7_3OYUXpjJ9ktUq1Y8K94jMB7YnTWQp-AtTTbrz14rabJW6j4oDd3jYEDbACALRQ', function(err, response, body){
          //err 当前接口请求错误信息
          //response 一般使用statusCode来获取接口的http的执行状态
          //body 当前接口response返回的具体数据 返回的是一个jsonString类型的数据 
          //需要通过JSON.parse(body)来转换
          if(!err && response.statusCode == 200){
            //todoJSON.parse(body)
            
            /*------------ */
            var ress = JSON.parse(body);
            console.log(ress.total_count)
            
            res.write(body)
            res.end()
          }
        })
    }
  else if (url2 == "/") {
      res.setHeader('Content-Type','text/html')
    // res.write--在页面内写入内容 
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
          console.log(err)
          str = "错误"
          res.write("404");
          res.end()
        }
        res.write(data);
        res.end()
    })
  
  } else if (url2 == "/login") {
    res.write("登录");
    res.end()
  }else{
    res.write("404");
    res.end()
  }
  
//---------------------------//
}
});
// 4.绑定端口号;
server.listen(3000, function () {
  console.log("服务器启动成功，可以通过http:127.0.0.1:3000/来进行访问");
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






function add (  ){

str = ''
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    str = "错误"
    return str
  }
 
  let arr = JSON.parse(data)

  let isHad = false 

  

  for (let index2 = 0; index2 < 100; index2++) {
    addID = randomID()
    console. log   (addID)
    isHad = false 
    for (let index = 0; index < arr.length; index++) {
            
        if( arr[index]['name'] == addID){
            isHad = true
          
            break
        }

    }
    if (!isHad ) {
        arr.push({"name":addID,"id":""})
    }

  }
 console. log   (arr)
  wF(arr)
})
    
 
 }


function randomID (){
    var arr=  ['0', '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , 'a' ,
    'q', 'w' , 'e' , 'r' , 't' , 'y' , 'u' , 'i' , 'o' , 'p' , 's' ,
    'd', 'f' , 'g' , 'h' , 'j' , 'k' , 'l' , 'z' , 'x' , 'c' , 'v' ,
    'b', 'n' , 'm' , 'A' , 'S' , 'D' , 'F' , 'G' , 'H' , 'J' , 'K' ,
    'L', 'Q' , 'W' , 'R' , 'T' , 'Y' , 'U' , 'I' , 'O' , 'P' , '' ,
    'Z', 'X' , 'C' , 'V' , 'B' , 'N' , 'M' , '!' , '@' , '#' , '$' 
    ]

    var str = ''
    for (var i =0 ;i<10;i++){
        var num = Math.round(Math.random()*(arr.length-1-0)+0)
        str+= arr[num]
    }

        console.log (str)
        return str
}

