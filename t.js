

"ui";




var color = "#ff6060";
ui.layout(
    <drawer id="drawer"  >
        <vertical>
            <appbar >
                <linear>
                    <toolbar id="toolbar" title="Face_豆豆" />
                    <vertical w="*" h="*" padding="13 13">
                        <button id="qbrz" layout_gravity="bottom" w="70" h="40" bg="#ff6060" text="全部日志"  layout_gravity="right" />
                    </vertical>
                </linear>
            </appbar>
            <vertical w="*" h="1" bg="{{color}}" ></vertical> //{/* 分割线填充 */}
            <card w="*" h="50" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                <vertical padding="18 8" h="auto">
                    <linear>
                        <Switch id="btn1" text="开启无障碍" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp" />
                        <Switch id="btn2" text="悬浮按钮" padding="8 8 8 8" textSize="15sp" />
                    </linear>
                </vertical>
                <View bg="#ff6060" h="*" w="5" />
            </card>
            <vertical w="*" h="1" bg="{{color}}" ></vertical> //{/* 分割线填充 */}
            <card w="*" h="55" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                <vertical padding="18 8" h="auto">
                    <linear>
                        <text layout_weight="0.13" textColor="#826858" textSize="15sp">第一句:</text>
                        <input layout_weight="3.0" id="edt1" text="" textSize="15sp" hint="内容1" />
                    </linear>
                </vertical>
                <View bg="#33CCFF" h="*" w="5" />
            </card>
            <vertical w="*" h="1" bg="{{color}}" ></vertical> //{/* 分割线填充 */}
            <card w="*" h="55" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                <vertical padding="18 8" h="auto">
                    <linear>
                        <text layout_weight="0.13" textColor="#826858" textSize="15sp">第二句:</text>
                        <input layout_weight="3.0" id="edt2" text="" textSize="15sp" hint="内容2" />
                    </linear>
                </vertical>
                <View bg="#33CCFF" h="*" w="5" />
            </card>
            <vertical w="*" h="1" bg="{{color}}" ></vertical> //{/* 分割线填充 */}
            <card w="*" h="55" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                <vertical padding="18 8" h="auto">
                    <linear>
                        <text layout_weight="0.13" textColor="#826858" textSize="15sp">第三句:</text>
                        <input layout_weight="3.0" id="edt3" text="" textSize="15sp" hint="内容3" />
                    </linear>
                </vertical>
                <View bg="#33CCFF" h="*" w="5" />
            </card>
            <vertical w="*" h="1" bg="{{color}}" ></vertical> //{/* 分割线填充 */}
            <card w="*" h="55" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                <vertical padding="18 8" h="auto">
                    <linear>
                        <text layout_weight="0.13" textColor="#826858" textSize="15sp">第四句:</text>
                        <input layout_weight="3.0" id="edt4" text="" textSize="15sp" hint="内容4" />
                    </linear>
                </vertical>
                <View bg="#33CCFF" h="*" w="5" />
            </card>
            <vertical w="*" h="1" bg="{{color}}" ></vertical> //{/* 分割线填充 */}
            <card w="*" h="55" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                <vertical padding="18 8" h="auto">
                    <linear>
                        <text layout_weight="0.13" textColor="#826858" textSize="15sp">请输入授权码:</text>
                        <input layout_weight="3.0" id="edt5" text="" textSize="15sp" hint="" />
                    </linear>
                </vertical>
                <View bg="#33CCFF" h="*" w="5" />
            </card>
            <vertical w="*" h="1" bg="{{color}}" ></vertical> //{/* 分割线填充 */}
            <frame>
                <horizontal paddingLeft="10" paddingTop="1"  >
                    <text layout_weight="0.13" textColor="#826858" textSize="15sp">请先开启无障碍服务</text>
                </horizontal>
            </frame>
            <frame>
                <horizontal paddingLeft="10" paddingTop="1"  >
                    <text layout_weight="0.13" textColor="#826858" textSize="15sp">请先开启无障碍服务</text>
                </horizontal>
            </frame>
        </vertical>
        <frame>
            <button id="saveConfig" layout_gravity="bottom" w="*" h="auto" bg="#ff6060" text="保存配置" />
        </frame>
    </drawer>
);

ui.qbrz.on("click", function () {
    app.startActivity("console");
});

ui.btn1.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});
ui.btn2.on("check", function () {
    log(ui.btn2.checked)
    if (ui.btn2.checked == true) {
        //当前开关是打开状态
        floatyWindow()
    } else if (ui.btn2.checked == false) {
        //当前开关是关闭状态
        window.close()
    }
});
var main线程
var window
var www = "60"
var hhh = "30"
var textSize_s = "10sp"
var padding_sss = "0 0 0 0"


function 验证 (){
   // if (  ui.edt5.getText() == "123"){
                   
                  
   //}
    var macAdd =  device.fingerprint
    var getAdd = '49.232.167.91:3000/?name=' + macAdd 
   var  res  =  http.get (getAdd)
   res= res.body.string()
   return res
}


function floatyWindow() {
    threads.start(function () {
        window = floaty.window(
            <frame>
                <vertical w="auto" minWidth="150">
                    <button id="action" text="运行" w={www} h={hhh} bg="#E0FFFF" textColor="#4B0082" textSize={textSize_s} padding={padding_sss} />
                    <button id="action2" text="结束" w={www} h={hhh} bg="#E0FFFF" textColor="#4B0082" textSize={textSize_s} padding={padding_sss} />
                    <button id="action3" text="退出" w={www} h={hhh} bg="#E0FFFF" textColor="#4B0082" textSize={textSize_s} padding={padding_sss} />
                </vertical>

            </frame>
        );
        setInterval(() => { }, 1000);
        window.setPosition(33, device.height / 2)
        var x = 0, y = 0;
        var windowX, windowY;
        var downTime;
        window.action.setOnTouchListener(function (view, event) {
            switch (event.getAction()) {
                case event.ACTION_DOWN:
                    x = event.getRawX();
                    y = event.getRawY();
                    windowX = window.getX();
                    windowY = window.getY();
                    downTime = new Date().getTime();
                    return true;
                case event.ACTION_MOVE:
                    window.setPosition(windowX + (event.getRawX() - x),
                        windowY + (event.getRawY() - y));
                    if (new Date().getTime() - downTime > 1500) {
                        exit();
                    }
                    return true;
                case event.ACTION_UP:
                    if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                        onClick();
                    }
                    return true;
            }
            return true;
        });
        function onClick() {
            if (window.action.getText() == '运行') {

   
                
                   // if (  ui.edt5.getText() == "123"){
                   
                  
   //}
    var macAdd =  device.getAndroidId()
    var getAdd = 'http://49.232.167.91:3000/tt/?name='+ ui.edt5.getText()+'&id='+ macAdd 
  
 

                //threads.start(验证())
    http.get(getAdd, {}, function(res, err){
        if(err){
            toast(err);
            return;
        }
        str = res.body.string()
        if (str =='登录' ){

            main线程 = threads.start(main)
            toast('登录' )
            }else{
                toast(str)
            }

    });
                
              


            }
        }

        //------***华丽的分割线***------ action2 事件
        window.action2.setOnTouchListener(function (view, event) {
            switch (event.getAction()) {
                case event.ACTION_DOWN:
                    x = event.getRawX();
                    y = event.getRawY();
                    windowX = window.getX();
                    windowY = window.getY();
                    downTime = new Date().getTime();
                    return true;
                case event.ACTION_MOVE:
                    window.setPosition(windowX + (event.getRawX() - x),
                        windowY + (event.getRawY() - y));
                    if (new Date().getTime() - downTime > 1500) {
                        exit();
                    }
                    return true;
                case event.ACTION_UP:
                    if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                        onClick2();
                    }
                    return true;
            }
            return true;
        });
        function onClick2() {
            log("停止运行")
            if (main线程) {
                main线程.interrupt()
            }
            ui.finish()
            exit()
        }
        //------***华丽的分割线***------ action3 事件
        window.action3.setOnTouchListener(function (view, event) {
            switch (event.getAction()) {
                case event.ACTION_DOWN:
                    x = event.getRawX();
                    y = event.getRawY();
                    windowX = window.getX();
                    windowY = window.getY();
                    downTime = new Date().getTime();
                    return true;
                case event.ACTION_MOVE:
                    window.setPosition(windowX + (event.getRawX() - x),
                        windowY + (event.getRawY() - y));
                    if (new Date().getTime() - downTime > 1500) {
                        exit();
                    }
                    return true;
                case event.ACTION_UP:
                    if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                        onClick3();
                    }
                    return true;
            }
            return true;
        });
        function onClick3() {
            log("退出脚本")
            if (main线程) {
                main线程.interrupt()
            }
            ui.finish()
            exit()
        }
    })
}



files.write("/sdcard/dcd.txt", "435345345");
ishan ()

function ishan () {

  var ish =   files.exists("/sdcard/dcd.txt");
  if (ish){
  var  id =   files.read("/sdcard/dcd.txt")
  toast (id)
  }else{
    files.createWithDirs("/sdcard/dcd.txt");
    
  }

}


//---------写脚本从此开始------------
var emos = ["💜","💕","💟","💝","💖","💘","💗","💞","❤️","😪","😲","😮","💏","💑","😶","😛","😝","😜","😚","😙","😗","😘","😋","😍","🙂","😊","😉","😇","😀"]
var fname, acode, tk1, tk2, tk3, tk4
var tks = []
var path // = "/sdcard/Pictures/2.txt"
files.createWithDirs("/sdcard/d1.txt");
files.createWithDirs("/sdcard/d2.txt");
files.createWithDirs("/sdcard/d3.txt");
files.createWithDirs("/sdcard/d4.txt");
files.createWithDirs("/sdcard/key.txt");

ui.edt1.setText(files.read("/sdcard/d1.txt"));
ui.edt2.setText(files.read("/sdcard/d2.txt"));
ui.edt3.setText(files.read("/sdcard/d3.txt"));
ui.edt4.setText(files.read("/sdcard/d4.txt"));
ui.edt5.setText(files.read("/sdcard/key.txt"));
ui.saveConfig.on("click", function () {
    //程序保存配置之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }

    //程序保存配置之前判断悬浮窗有没有开启
    if (ui.btn2.checked == false) {
        toast("请先开启悬浮窗按钮！");
        return;
    }
    //获取UI信息赋值给变量 var 扔瓶间隔, 回复间隔, 扔瓶次数 ,话术1, 话术2, 话术3, 话术4, 话术5
    tk1 = ui.edt1.getText() + ""
    tk2 = ui.edt2.getText() + ""
    tk3 = ui.edt3.getText() + ""
    tk4 = ui.edt4.getText() + ""
    acode = ui.edt5.getText() + ""
    files.write("/sdcard/d1.txt", tk1);
    files.write("/sdcard/d2.txt", tk2);
    files.write("/sdcard/d3.txt", tk3);
    files.write("/sdcard/d4.txt", tk4);
    files.write("/sdcard/key.txt", acode);
    toast("配置保存完成,请点悬浮按钮开始运行！")
});

       



function 找紫色点(所找图) {
  
   //请求截图，用找图方法，第一个就要先写的请求截图代码，不然找图没法用
   if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
    }else{
        toast("请求截图cc");
    }
  
    var umg = captureScreen()       //大图就需截取手机屏幕。。意思就是截屏
    var xxx = images.read("/storage/emulated/0/Pictures/" + 所找图 + ".png");        //括号里是图片地址。。
    var p = findImage(umg, xxx);
    if (p) {
        log("找到啦:" + 所找图);
        click(p.x, p.y)
        sleep(1000)
    } else {
        log("没找到" + 所找图);
    }

  

}
function main() {



    if (true) {
        // 登录成功，后面写你的业务代码
        console.setTitle("FB脚本")
        console.show()
        tk1 = ui.edt1.getText() + ""
        tk2 = ui.edt2.getText() + ""
        tk3 = ui.edt3.getText() + ""
        tk4 = ui.edt4.getText() + ""
        tks = [tk1, tk2, tk3, tk4]
        while (true) {

            
            if (desc("交友设置").findOnce()) {
                var node = text("有缘人").findOnce()
                if (node) {
                    log("有缘人")
                    检测对你心动()
                    node.parent().click()
                    sleep(3333)
                }
            } else if (desc("对话").findOnce() || desc("有缘人").depth(5).findOnce()) {
                log("对话...")
                log("首先回复未读信息")
                
               

/*
                for (var v = 0; v < 12; v++) {
                    var node = desc("该你啦").findOnce()

                    //('123')

                    //
                    if (node) {
                        log("未读")
                        node.parent().parent().click()
                        sleep(3333)
                        自动回复()
                    }else{
                        log("啥都没检测到，滑动翻页")
                        var name1 = 取尾部人员名字()
                       
                        scrollForward()
                        sleep(1000)
                        var name2 = 取尾部人员名字()
                       
                        if (name1 == name2) {
                            log("下滑到底,开始返回...")
                            back()
                            sleep(3000)
                            break
                        }
                    }
                }

*/
                var node = text("有缘人").findOnce()
                if (node) {
                    log("检测最上面的信息")
                    
                    sleep(5000)
                }
              
              
                //找紫色点('123')
               
                var tmp = className("androidx.recyclerview.widget.RecyclerView").depth(14).find()
                
                 tmp = className("android.view.ViewGroup").depth(13).find()
                
               


                toast("形有缘人......", tmp.length)
               
                    if (tmp.length > 0) {
                        toast("形有缘人...")
                        

                        for (var i = 0; i < tmp.length; i++) {
                         
                            log(tmp[i].bounds())

                            var b = tmp[i].bounds();
                            click(b.centerX(), b.centerY());


                           
                            sleep(3333)
                            
                            自动回复()
                     
                    }





                }

                back()
                sleep(3000)
   
                var node = text("有缘人").findOnce()
                if (node) {
                    log("有缘人")
                    node.parent().click()
                    sleep(5000)
                }

                var inse = 0

                    while (inse<10) {
                   
                        var tmp = className("androidx.recyclerview.widget.RecyclerView").depth(10).find()
                
                        tmp = className("android.view.ViewGroup").depth(9).find()
                        

                        //drawingOrder = 5
                        

                      toast ( tmp.length)
              
                           if (tmp.length > 0) {
                               log("依次回复...")
                               
       
                               for (var i = 0; i < tmp.length; i++) {
                                if ( (tmp[i].indexInParent() != 2 )) {continue}
                                if ( (tmp[i].getText() =='对话')) {continue}
                                if ( (tmp[i].getText() =='')) {continue}
                                if ( (tmp[i].getText() =='.')) {continue}
                                try {
                                    var nn  = tmp[i].getText().toString()
                                  
                                    if ( nn[0] == '你' ) {continue}
                                }

                                catch (error) {
                                    continue
                                }
                
                                 toast ( tmp[i].getText())
                    
                                
                        

                                   log(tmp[i].bounds())
       
                                   var b = tmp[i].bounds();
                                   click(b.centerX(), b.centerY());
       
       
                                  
                                   sleep(3333)
                                   
                                   自动回复()

                           
       
       
       
       
       
                       }
                    }

                    toast("啥都没检测到，滑动翻页")
                    var name1 = 取尾部人员名字()
                   
                    scrollForward()
                    inse ++
                    //toast("滑动"+inse.toString()+"次")
                    sleep(1000)
                    var name2 = 取尾部人员名字()
                   
                    if (name1 == name2  ) {
                        log("下滑到底,开始返回...")
                        toast ( "下滑到底,开始返回...")
                        sleep(3000)
                        break
                    }

                }
                




                back()
                sleep(3333)
            }
            sleep(1000)
        }
    }
    function 自动回复() {
        var node = descEndsWith("的头像").findOne(6666)
        if (node) {
            log("XXX的头像__检测对方是否回复了信息...")
            if (信息检测()) {
                log("NG")
            } else {
                var x = 回复信息检测()
                log("回复次序...", x)
                if (x != 9) {
                    var str = tks[x] + " " + emos[random(0, emos.length - 1)]
                    setText(str)
                    sleep(1000)
                    log("点击发送")
                    var obj = desc("发送").findOne(1000)
                    if (obj) {
                        log("发送")
                        obj.click()
                        sleep(2000)
                    }
                }
            }
        }
        返回吧()
    }
    function 自动回复X() {
        var node = descEndsWith("的头像").findOne(6666)
        if (node) {
            log("XXX的头像")
            if (信息检测()) {
                log("进来看看而已")
            } else {
                var str = node.desc()
                log("str...", str)
                var list = str.split("的头像")
                var 昵称 = list[0]
                log("昵称...", 昵称)
                var pxth = "/sdcard/" + 昵称 + ".txt"
                if (files.exists(pxth)) {
                    log("回复聊天，已经聊过,执行后续交互聊天")
                    var num = files.read(pxth) * 1
                    log("num...", num)
                    if (num < 4) {
                        var str = tks[num + 1]
                        log("str_...", str)
                        if (str) {
                            setText(str)
                            sleep(1000)
                            log("点击发送")
                            var obj = desc("发送").findOne(1000)
                            if (obj) {
                                log("发送")
                                files.write(pxth, String(num + 1), encoding = "utf-8")
                                obj.click()
                                sleep(2000)
                            }
                        }
                    } else {
                        log("回复聊天，聊够了，不想聊了")
                    }
                } else {
                    log("回复聊天，未聊过，返回第一句话")
                    var str = tks[0]
                    log("str...", str)
                    if (str) {
                        setText(str)
                        sleep(2000)
                        log("点击发送")
                        var obj = desc("发送").findOne(1000)
                        if (obj) {
                            log("发送")
                            files.write(pxth, "0", encoding = "utf-8")
                            obj.click()
                            sleep(2000)
                        }
                    }
                }
            }
        }
        返回吧()
    }
    function 返回吧() {
        for (var v = 0; v < 3; v++) {
            var obj = desc("对话").findOne(100)
            if (desc("对话").findOne(100) || desc("有缘人").depth(5).findOne(100)) {
                log("对话...")
                break
            } else {
                back()
                sleep(2000)
            }
            log("返回吧...", v)
            sleep(1000)
        }
    }
    function 回复信息检测() {
        if (textStartsWith(tk4).findOne(111)) {
            log("不聊了...")
            return 9
        } else {
            if (textContains(tk3).findOne(111)) {
                log("回复第四句...")
                return 3
            } else {
                if (textStartsWith(tk2).findOne(111)) {
                    log("回复第三句...")
                    return 2
                } else {
                    if (textStartsWith(tk1).findOne(111)) {
                        log("回复第二句...")
                        return 1
                    } else {
                        log("回复第一句...")
                        return 0
                    }
                }
            }
        }
    }
    function 信息检测() {
        var tmp = []
        var 右边距 = 0
        for (var v = 0; v < 2; v++) {
            tmp = className("android.view.ViewGroup").depth(13).find()
            log("tmp...", tmp.length)
            if (tmp.length > 0) {
                for (var i = 0; i < tmp.length; i++) {
                    log(i, tmp[i].text(), tmp[i].desc(), tmp[i].bounds())
                }
                log("取最后一条信息检测")
                var b = tmp[tmp.length - 1].bounds()
                右边距 = b.right
                log("最后一条信息右边距检测...", b.right)
                if (右边距==522) {
                    log("最后一条信息是自己所发")
                    break
                } else {
                    log("最后一条信息是他人所发")
                    sleep(1000)
                }
            }
        }
        if (右边距==522) {
            return true
        }
    }
    function 检测对你心动() {
        var node = text("对你心动").findOnce()

        var node2 = text("明天再回友缘来向更多人表心动吧").findOnce()


        
        if (node2) {return 0 }

        if (node) {
            log("对你心动", node.bounds())
            var tmp = node.parent().parent().children()
            log("对你心动...", tmp.length)
            if (tmp.length > 0) {
                var k
                for (var i = 0; i < tmp.length; i++) {
                    log(i, tmp[i].text(), tmp[i].desc(), tmp[i].bounds())
                    if (tmp[i].desc() == "对你心动") {
                        k = i
                    }
                }
                tmp[k].click()
                sleep(3333)
                var r = random(5, 9)
                log("随机值...", r)
                // 间隔10秒钟点击心动
                for (var i = 0; i < r; i++) {
                    var tmp = className("android.view.ViewGroup").depth(9).drawingOrder(4).find()
                    log("tmp...", tmp.length) //bounds = (360,846,408,894)
                    if (tmp.length >= 0) {
                        for (var c = 0; c < tmp.length; c++) {
                            log(c, tmp[c].text(), tmp[c].desc(), tmp[c].bounds())
                        }
                        //let b = tmp[1].bounds();
                        click(360,846,408,894)
                        for (var j = 0; j < 5; j++) {
                            log("等待延时...", j, "/", i)
                            sleep(1000)
                        }
                    }
                    log("第" + i + "个心动 / 10")
                    sleep(1000)
                }
            }
            back()
            sleep(3000)
        }
    }
    function 是否聊过() {
        var ff
        var tmp = className("android.view.ViewGroup").depth(14).find()
        //log("成员数1...", tmp.length)
        if (tmp.length > 0) {
            for (var i = 0; i < tmp.length; i++) {
                //log(i, tmp[i].text(), tmp[i].desc(), tmp[i].bounds())
                if (tmp[i].bounds().right == 1049) {
                    ff = true
                    break
                }
            }
        }
        if (ff) {
            return true
        }
    }
    function 取尾部人员名字() {
        var list = []
        var tmp = className("android.view.ViewGroup").depth(9).indexInParent(1).find()
        
        if (tmp.length > 0) {
            for (var i = 0; i < tmp.length; i++) {
                log(i, tmp[i].text(), tmp[i].bounds())
                if (tmp[i].text() && tmp[i].bounds().left == 138) {
                    list.push(tmp[i].text())
                }
            }
        }
        if (list.length > 0) {
           
            return list[list.length - 1]
        }
    }
    function 取首位人员名字() {
        var list = []
        var tmp = className("android.view.ViewGroup").depth(12).find()
        if (tmp.length > 0) {
            for (var i = 0; i < tmp.length; i++) {
                if (tmp[i].text() && tmp[i].bounds().left == 138) {
                    list.push(tmp[i].text())
                }
            }
        }
        if (list.length > 0) {
            toast(list[0])
            return list[0]
        }
    }
    function 读取随机行(path) {
        var reg = /^\s+|\s+$/g; //匹配无效空白行
        if (files.isFile(path)) {
            var arr = files.read(path).replace(reg, "").split("\n");
            if (arr.length == 0) {
                alert(path + "文件内无数据！！！");
                exit()
            } else {
                return arr[random(0, arr.length - 1)]
            }
        } else {
            alert(path + "不存在,请检查！！！");
            exit()
        }
    }
    function 读取文件(path) {
        var reg = /^\s+|\s+$/g; //匹配无效空白行
        if (files.isFile(path)) {
            var arr = files.read(path).replace(reg, "").split("\n");
            if (arr.length == 0) {
                alert(path + "文件内无数据！！！");
                exit()
            } else {
                return arr
            }
        } else {
            alert(path + "不存在,请检查！！！");
            exit()
        }
    }
}