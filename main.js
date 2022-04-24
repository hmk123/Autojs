//

const express = require('express')


const bcrypt = require('bcrypt')

const router = express.Router()
//@access public
router.get('/test',(req,res)=>{
    res.json({msg:'login'})
    
})




var mysql      = require('mysql');
const { json } = require('express/lib/response')
const { JSON } = require('mysql/lib/protocol/constants/types')
var connection = mysql.createConnection({
  host     : '49.232.167.91',
  user     : 'data',
  password : 'asd123',
  port: '3306',      
  database : 'data'
});
   



     
    //连接mysql
    connection.connect((err) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('success')
    })



function reg(username,res){


 


        var user = username     
        var pass ="123"
        var eml= 'qq.cpm'
        var ins= 'INSERT INTO `id`(`username`, `password`, `email`) VALUES '+`("${user}","${pass}","${eml}")`
    
        //console.log(ins)
    
        var sel= 'SELECT * FROM `id` WHERE `username`= '+`"${user}"` 
    
        var selAll= 'SELECT * FROM `id` WHERE 1'
    
        var alt = 'ALTER TABLE `id` ADD `email` VARCHAR(256) NULL'
    
    
        var del = 'DELETE FROM `id` WHERE 1'
    
        connection.query(sel , function (error, results, fields) {

        

            if (error) {  console.log(2)  ; res.json( {msg:'失败'})}
            if (results.length)
            {
                console.log(results[0])
               
            res.json(results[0])
    
            } 
            else{ 
    

          
                           connection.query(ins   , function (error, results, fields) {
                            if (error) {    res.json( {msg:'失败'})};
                          
    
    
    
                                    res.json({msg:'d'})
                         
        
        
                        });
                  
            


    
                }    
    
    
    
        });
    
        //关闭对象，end相当于flush，destroy是强制退出。
       // connection.end(err=>{
      //      console.log(err)
      //  })
       // connection.destroy()








  
  


}


router.post('/register',(req,res)=>{
    
    console.log(reg(req.body.password,res))

 
 
    


})




module.exports = router















bcrypt.genSalt(10,function(err,salt){
    bcrypt.hash(req.body.password,salt,function(err,hash){
        if(!err){
           // console.log(hash)
           // res.json({msg:'login'})
        }
    })


})