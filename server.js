"ui"
auto()
f = floaty.window(
    <viewpager id="viewpager">
        <frame >
            <vertical textSize="15sp">{/* ui组件text属性有小于号会报错&lt; */}
                <horizontal >
                    <button id="action" text="壹移            號動" bg="#154360" textColor="white" textSize="20sp"  w="90" h="*" radius="20" />
                    <vertical textSize="15sp" marginLeft="5" marginTop="5">
                        <text text=" 超級中原A.V11.9.16 " bg="#fafad2" textColor="black" w="200" textSize="16sp"/>
                        <text text="  54842020  5444 7000" bg="#9A7D0A" textColor="white" w="200" textSize="15sp"/>
                        <text text="  【超級壹號研究室】  " bg="#1A5276" textColor="white" w="200" textSize="18sp"/>
                        <text visibility="gone" id="编辑框__程序公告" text="公告:" bg="#ffffff" textColor="red" w="*" textSize="15sp"/>
                    </vertical>
                </horizontal>

                <horizontal marginTop="5">
                    <checkbox id="选择框__开始运行" textSize="20sp" h="*" w="90" checked="false" text="停止中" bg="#ff0000" gravity="center" radius="20"/>
                    <vertical textSize="15sp" marginLeft="5" h="*">
                        <horizontal >
                            <checkbox id="选择框__加速" checked="true" text="自動加速  " bg="#1A5276" />
                            <radio id="选择框__Exit" checked="true" text="退出  " bg="#154360" marginLeft="5" h="*" gravity="center"/>


                            <checkbox id="选择框__监听我的" visibility="gone" checked="false" text="我的  " bg="#1A5276" h="*" gravity="center" marginLeft="5" />
                        </horizontal>
                        <horizontal marginTop="5">
                            <text id="编辑框__加速" text="  手動加速  " textColor="white" bg="#013ADF" textSize="15sp" gravity="center" h="*"  />
                            <checkbox id="选择框__解码" checked="true" text="解碼  " bg="#1A5276" h="*" gravity="center" marginLeft="5"/>
                            <text id="编辑框__剩余单" text="0" textColor="white" bg="#1A5276" textSize="15sp" h="*" gravity="center"/>
                        </horizontal>

                        <horizontal marginTop="5">
                            <checkbox id="选择框__自动刷新order" checked="false" text="" bg="#1A5276" h="*" gravity="center"/>
                            <text id="编辑框__刷新order" text="6秒" textColor="white" bg="#013ADF" textSize="15sp" gravity="center" h="*" marginLeft="5" />
                            <text text="←刷新  " textColor="white" bg="#9A7D0A" textSize="15sp" h="*" gravity="center"/>
                            <checkbox id="选择框__监听通知栏" checked="true" text="我的通知  " bg="#1A5276" h="*" gravity="center" marginLeft="5"/>
                            
                        </horizontal>
                        <horizontal marginTop="5">
                            <radio id="选择框__结束gogovan" checked="false" text="SCF中原  " bg="#154360" marginLeft="0"/>
                            <checkbox id="选择框__ai_learn" checked="true" text="ai learn  " bg="#9A7D0A" marginLeft="5"/>
                            <checkbox id="选择框__五秒延时接" checked="false" text="5秒考慮  " bg="#ff0000" marginLeft="5" visibility="gone"/>
                        </horizontal>


                        <horizontal marginTop="5">
                            <radiogroup margin="0 0" orientation="vertical">  
                                <horizontal >
                                    <radio id="单选框__延时确认" checked="true" text="A Rosemary:" textColor="white" bg="#0E6251" textSize="18sp" marginTop="0"  h="*"  />
                                    <text id="编辑框__延时确认" text="0" textColor="white" bg="#696969" textSize="18sp" h="*" gravity="center" marginTop="0" w="50" />
                                </horizontal>
                                <horizontal marginTop="5">
                                    <radio id="单选框__延时确认B" checked="false" text="B Rosemary:" textColor="white" bg="#0E6251" textSize="18sp" marginTop="0"  h="*"  />
                                    <text id="编辑框__延时确认B" text="1.0" textColor="white" bg="#696969" textSize="18sp" h="*" gravity="center" marginTop="0" w="50" />
                                </horizontal>
                                <horizontal marginTop="5" visibility="gone">
                                    <radio id="单选框__延时确认C" checked="false" text="C Rosemary:" textColor="white" bg="#0E6251" textSize="18sp" marginTop="0"  h="*"  />
                                    <text id="编辑框__延时确认C" text="3.5" textColor="white" bg="#696969" textSize="18sp" h="*" gravity="center" marginTop="0" w="50" />
                                </horizontal>
                            </radiogroup>
                        </horizontal>
                        
                        <horizontal marginTop="5" visibility="gone" >
                            
                            <text text="←剩餘單  " textColor="white" bg="#154360" textSize="15sp" h="*" gravity="center"/>

                        </horizontal>


                    </vertical>


                </horizontal>

                <horizontal marginTop="5" >
                    <checkbox id="选择框__转发号" h="*" checked="false" text="轉發號  " bg="#ff0000" />
                    <input id="编辑框__转发号" text="" h="*" w="200" textColor="black" bg="#F7FE2E" textSize="15sp" marginLeft="0"/>

                </horizontal>
                <horizontal marginTop="5" >
                    <text id="编辑框__到期时间" text="2021-06-09 11:11:11" textColor="black" bg="#F7FE2E" textSize="15sp"/>
                    <text text="←有效期  " textColor="white" bg="#154360" textSize="15sp" />
                </horizontal>

                <horizontal marginTop="5" h="90" w="300">
                    <list id="列表框__历史订单" h="*" w="*">
                        <vertical>
                            <text text=" " textColor="white" bg="#696969" w="*" h="5"/>
                            <text id="编辑框__信息" text="{{属性__信息}}" textColor="white" bg="#696969" ellipsize="marquee" w="*"/>
                        </vertical>
                    </list>
                </horizontal>

            </vertical>
        </frame>
    </viewpager>
)
var 显示日志=true,存储卡目录 = "/sdcard/"
var screenWidth=device.width,screenHeight=device.height,brand=device.brand,model=device.model,product=device.product,release=device.release//安卓系统版本
toastLog("Name:"+app.versionName+",Code:"+app.versionCode+",w:"+screenWidth+",h:"+screenHeight+",release:"+release+",brand:"+brand+",model:"+model+",product:"+product)//+",ocr:"+ocr_字母数字())//判断调试模式
function log2(日志内容){
    if (显示日志) {
        log(日志内容)
    }
}
function toastLog2(日志内容){
    if (显示日志) {
        toastLog(日志内容)
    }
}



var 运行x=screenWidth-100,运行y=screenHeight-1700,停止y偏移=600,停止x偏移=-700
function 超级_悬浮窗显示隐藏(隐藏) {//0为隐藏其他为显示
    if (隐藏 == 0 || 隐藏 == false) {
        windowX = f.getX(); winodwY = f.getY(); f.setPosition(2000, 0)//隐藏悬浮窗
    } else {
        f.setPosition(windowX, winodwY)//还原悬浮窗坐标
    }
}
f.选择框__监听通知栏.click(()=>{
    ui.run(function(){
        f.选择框__监听通知栏.setChecked(true)
    })
})
f.选择框__解码.click(()=>{
    ui.run(function(){
        f.选择框__解码.setChecked(true)
    })
})
f.选择框__ai_learn.click(()=>{
    ui.run(function(){
        f.选择框__ai_learn.setChecked(true)
    })
})

var options_延时确认 =["0","0"]//["1.5","1.6","1.7","1.8","1.9","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9"]
var options_延时确认B=["1.0","1.1","1.2","1.3","1.4","1.5","1.6","1.7","1.8","1.9","2.0"]//["2.5","2.6","2.7","2.8","2.9","3.0","3.1","3.2","3.3","3.4","3.5"]
var options_延时确认C=["3.0","3.1","3.2","3.3","3.4","3.5"]
f.单选框__延时确认.click(()=>{
    ui.run(function(){
        f.单选框__延时确认B.setChecked(false)
        f.单选框__延时确认C.setChecked(false)
    })
})
f.单选框__延时确认B.click(()=>{
    ui.run(function(){
        f.单选框__延时确认.setChecked(false)
        f.单选框__延时确认C.setChecked(false)
    })
})
f.单选框__延时确认C.click(()=>{
    ui.run(function(){
        f.单选框__延时确认.setChecked(false)
        f.单选框__延时确认B.setChecked(false)
    })
})
f.编辑框__延时确认.click(()=>{//司机因太懶改變內容，己有被發現用外掛.改為每成功停止或自己弄停運行，隨机改變秒數，總之每次不一樣，取消0，內容：0.07，0.09，0.15，0.18，0.2，0.25
    // 超级_悬浮窗显示隐藏(0)
    // dialogs.select("選擇延時確認時間[秒]",options_延时确认)
    // .then(i => {
    //     if(i>=0){
    //         ui.run(function(){
    //             f.编辑框__延时确认.setText(options_延时确认[i]);
    //         })
    //     }
    //     超级_悬浮窗显示隐藏(1)
    // })
})
// A Rose…:  ASAP（代表不延時）
// B Rose…:  1-2秒，每0.1秒一級，隨机轉
var 延时确认=0
function 随机延时确认(){
    if(f.单选框__延时确认.checked){
        延时确认=options_延时确认[取随机整数(1,options_延时确认.length-1)]
        ui.run(function(){
            f.编辑框__延时确认.setText(延时确认)
        })
    }else if(f.单选框__延时确认B.checked){
        延时确认=options_延时确认B[取随机整数(1,options_延时确认B.length-1)]
        ui.run(function(){
            f.编辑框__延时确认B.setText(延时确认)
        })
    }else{
        延时确认=options_延时确认C[取随机整数(1,options_延时确认C.length-1)]
        ui.run(function(){
            f.编辑框__延时确认C.setText(延时确认)
        })
    }
}
function 取随机整数(最小值,最大值){//包括最小值和最大值
    return Math.floor(Math.random()*最大值 + 最小值)
}

f.选择框__结束gogovan.click(()=>{
    if(launch(gogovanpackagename)==false){
        toastLog("SCF運行失敗") 
    }
})





var gogovanpackagename="com.centaline.aplus",gpspackagename="com.suptech.hicham.fakelocation",xuniweizhipackagename="com.tistory.maxxgreen.app.virtuallocation",chaojifanghuoqiangpackagename="com.netspark.firewall"
var timerid_刷新order=0,刷新order时间=0, options_刷新order = ["不刷新","4秒","6秒","15秒","30秒","1分鐘"],thread_自动刷新order=null
f.编辑框__刷新order.click(() => {
    
    超级_悬浮窗显示隐藏(0)
    dialogs.select("刷新order時間", options_刷新order)
        .then(i => {//toast(i);
            if (i >= 0) { 
                ui.run(function () { 
                    f.编辑框__刷新order.setText(options_刷新order[i]) 
                })
                
                // if(i==0){
                //     刷新order时间=0
                //     clearInterval(timerid_刷新order)
                // }else if(i==1){
                //     刷新order时间=6000
                // }else if(i==2){
                //     刷新order时间=15000
                // }else if(i==3){
                //     刷新order时间=30000
                // }else if(i==4){
                //     刷新order时间=60000
                // }
                // if(刷新order时间>0){
                //     clearInterval(timerid_刷新order)
                //     timerid_刷新order = setInterval(function(){
                //         // 点击刷新order()
                //         threads.start(点击刷新order)
                //     }, 刷新order时间);
                // }
                toast("刷新order:"+options_刷新order[i])
            }
            超级_悬浮窗显示隐藏(1)
        })
})
function 点击刷新order(){
    // var 当前包名=currentPackage()//packageName = hk.gogovan.GoGoDriver
    // if(当前包名!=gogovanpackagename){
    //     toastLog2("p:"+当前包名)
    //     return
    // }
    if(!f.选择框__自动刷新order.checked){
        // toastLog("自動刷新order已停止")
        return
    }

    // var 按钮__接柯打 = className("android.widget.ImageButton").drawingOrder(3).indexInParent(2).clickable(true).findOne(找控件时间)
    // if(按钮__接柯打==null){//红米手机className = o.ґ,child(0).child(2)//滚动组件className = o.ﾃ
    //     按钮__接柯打 = classNameStartsWith("o.").findOne(找控件时间)
    //     if(按钮__接柯打!=null){
    //         按钮__接柯打=按钮__接柯打.child(0).child(2)
    //     }
    // }
    // if(按钮__接柯打!=null){
    //     if(按钮__接柯打.click()){
    //         toast("刷新order成功")
    //     }else{
    //         toast("刷新order失敗")
    //     }
    // }else{
    //     toast("不能刷新order")
    // }

    // if(f.选择框__开始运行.checked==false){
    //     toastLog2("刷新order自動停止")   
    //     return
    // }

    var 按钮__临时组件 =scrollable(true).id("rv_refresh").findOne(找控件时间)
    if (按钮__临时组件==null) {
        toastLog2("未找到刷新order")   
        return
    }
    // 按钮__临时组件.scrollForward()// 按钮__临时组件.scrollUp()
    // 按钮__临时组件.scrollBackward()// 按钮__临时组件.scrollDown()
    var romx = 到整数(random(2, 10)),romy = 到整数(random(screenHeight/2+200, screenHeight/2+300));
    gesture(100*到整数(random(5,10)), [romx, romy], [romx+5, romy+700])// swipe(romx, romy, romx+5, romy+700, 100*到整数(random(5,10)))//swipe不能toast()//(scrollUp(1) || scrollDown(1)){
    
}
function 线程_自动刷新order(){
    var 刷新ordertext=f.编辑框__刷新order.text().trim()
    if(刷新ordertext=="不刷新"){
        刷新order时间=0
        clearInterval(timerid_刷新order)
    }else if(刷新ordertext=="4秒"){
        刷新order时间=4000
    }else if(刷新ordertext=="6秒"){
        刷新order时间=6000    
    }else if(刷新ordertext=="15秒"){
        刷新order时间=15000
    }else if(刷新ordertext=="30秒"){
        刷新order时间=30000
    }else if(刷新ordertext=="1分鐘"){
        刷新order时间=60000
    }
    if(刷新order时间>0){
        clearInterval(timerid_刷新order)
        timerid_刷新order = setInterval(function(){
            点击刷新order()
        },刷新order时间)
    }
}
function 函数__自动刷新order(){
    clearInterval(timerid_刷新order)
    if(!f.选择框__自动刷新order.checked){
        toastLog("自動刷新order已停止")
        return
    }
    if(thread_自动刷新order!=null){
        thread_自动刷新order.interrupt()
    }
    thread_自动刷新order=threads.start(线程_自动刷新order)
}
f.选择框__自动刷新order.click(() => {
    函数__自动刷新order()
})


setInterval(function(){
    超级_加速(0)

}, 60*1000*60)
// f.选择框__加速.click(
//     线程_加速
// )
// function 线程_加速(){
//     clearInterval(timerid_加速)
//     if(!f.选择框__加速.checked){
//         toastLog("加速已停止")
//         return
//     }
//     toastLog("加速运行中")
//     threads.start(线程_加速)
// }

f.编辑框__加速.click(() => {
    超级_加速(1)
})
function 超级_加速(type){
    type=type||0
    if(!f.选择框__加速.checked && type==0){
        toastLog("加速已停止")
        return
    }
    if(recents()){
        组件_延时点击("全部關閉",textContains("部關閉"),1000,1000)    
    }else{
        toastLog2("recentsnull")
    }
    窗口_打开指定页面("com.samsung.android.lool","com.samsung.android.sm.score.ui.ScoreBoardActivity")
    窗口_打开指定页面("com.samsung.android.lool","com.samsung.android.sm.score.ui.ScoreBoardActivity")
    setTimeout(function(){
        var 按钮__临时组件 = className("TextView").textContains("記憶體").id("title_text").findOne(找控件时间)
        if(按钮__临时组件!=null){
            按钮__临时组件.parent().parent().click()
            按钮__临时组件.parent().parent().parent().parent().click()
            toastLog2("記憶體24")
        }else{
            toastLog2("記憶體24null")
        }
        setTimeout(function(){
            按钮__临时组件 = className("Button").textContains("立即清理").id("bt_fix_now").clickable(true).findOne()//找控件时间
            if(按钮__临时组件!=null){
                按钮__临时组件.click()
                toastLog2("立即清理")
            }else{
                toastLog2("立即清理null")
            }
            // setTimeout(function(){
                // home()//launch(gogovanpackagename)
                launch(gogovanpackagename)
                toastLog2(launch(gogovanpackagename))
                var obj={}
                obj.属性__信息=时间_取现行时间('Y-M-D h:m:s')+"加速完成"
                数组_历史订单.splice(0,0,obj)//第2个参数为0则不删除改为插入数组第0个位置
                ui.run(function(){
                    f.列表框__历史订单.setDataSource(数组_历史订单)
                }) 
            // },10000)
        },2000)
    },1000)
}


function 悬浮窗_靠边(参数_运行x,参数_运行y){
    参数_运行x=参数_运行x||运行x
    参数_运行y=参数_运行y||运行y
    ui.run(function(){
        f.setPosition(运行x,运行y)
    })
}
function 数组_是否包含元素 (数组, 元素) {//判断数组是否包含指定元素的方法,这段代码通过prototype定义了数组方法，这样就可以在任意数组调用contains方法
    for (var i =0;i<数组.length;i++) {
      if (数组[i] == 元素) return true;
    }
    return false;
    // 用法：
    // var x = Array();
    // if (x.contains('foo')) {

    // }
}
var 找控件时间=100,android7=isAndroid7()

// var 剩余天数2=10088//实际上这个是剩余次数
var aimDate = "2020-12-31 06:06:06";
var aimIMEI ="57347dc79c596c1a"//<===客户imei.=================="QKEYC6EQBQG6DMKJ862963036458186" //魅蓝note2"810EBM42ZRPU868017023543940" //三星C9pro 6英寸367ppi 1920x1080像素
// 安7：392fd3e97cf4865030039332136// 安8：AHK7N17126001999864683030053043
//以下是自己的手機碼經常用來測試的
var arrIMEI = new Array("861030045839193","354023081759700","8d7d21aa06a88cae","864683030053043","863291042784125","aab93a25df560eba")//这些是常用测试设备imei,最后不要有,""
var IMEI=device.getIMEI() //unknown ull+"," +device.fingerprint//IMEI:868017023543940,810EBM42ZRPU,Meizu/meizu_m2note/m2note:5.1/LMY47D/1520235774:user/release-keys
// toastLog(时间_取网络时间())//魅蓝note2IMEI:868017023543940  // device.getAndroidId()
log2("IMEI:"+IMEI)
if (device.getIMEI()==null || IMEI.length<15){
    IMEI=device.getAndroidId()//08d7d21aa06a88cae//compileStr(device.getAndroidId())
    log2("IMEI2:"+IMEI)
    if (IMEI.length<15 ){

        toastLog("😌無法識别手機😌"+IMEI)
        setClip(IMEI)
        exit()   
    }
}
if(!requestScreenCapture()){
    toast("请求截图失败,请重新运行点击立即开始");
    exit();
}

function compileStr(code){
    var c=String.fromCharCode(code.charCodeAt(0)+code.length);  
    for(var i=1;i<code.length;i++){        
        c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));  
    }     
    return escape(c);
}
function uncompileStr(code){
    code = unescape(code);        
    var c=String.fromCharCode(code.charCodeAt(0)-code.length);        
    for(var i=1;i<code.length;i++){        
        c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));        
    }        
    return c;
}  

手机_检测IMEI()

var 默认总单数=999//
// login	用户登录 
//  参数	 说明
// 参数1：软件编号	软件的编号，如：10001
// 参数2：账号/卡号	用户账号或卡号
// 参数3：用户密码	用户的密码的小写32位MD5，如果是卡号登录则不填写
// 参数4：软件版本	软件的版本号，用于控制软件强制更新
// 参数5：机器码	用于控制用户本地或异地多开
// 参数6：绑定信息	用户注册时绑定的信息，如果当前值和绑定值不同则登录失败。可空。如：QQ号
// 参数7：返回信息值	
// 1=剩余秒数
// 2=剩余点数
// 3=允许几开
// 4=游戏号
// 5=上次登陆ip
// 6=邮箱
// 7=上次登录机器码
// 8=上次登录时间
// 9=用户权限
// 10=验证码(用于取回附加字符的必须参数)
// 11=到期时间
// 12=用户备注
// 13=注册时间。
// 需要返回多个属性，可以填写多个值用小写逗号分开，
// 比如想获取用户的剩余时间秒数和用户的权限，c7可以填写：1,9
function 超级_post_单码登陆(){//如果不加回调参数，则该请求将阻塞、同步地执行。
    // var url =当前服务器线路+ 调用码_单码用户登录
    // var res = http.post(url, {
    //     "SingleCode": 卡密,
    //     "Ver": "1",
    //     "Mac":IMEI
    // })
    //https://www.wjsrs.com/api.php?name=接口名称&c1=软件编号&c2=账号&c3=密码&c4=软件版本&c5=机器码&c6=绑定信息&c7=1,2,3,4,5,6
    var url =当前服务器线路+ "name=login2&c1="+软件id+"&c2="+卡密+"&c4="+当前版本+"&c5="+IMEI+"&c7=1,2,11"
    var res = http.get(url)//万捷验证
    // toastLog(res.body.string())//.split("<|>")[0]
    return res.body.string()//2591744<|>0<|>2021-01-25 16:46:46<|>1         //Error：卡号不存在或已被删除。//Error:用户已过期。
    // if(html.contains("页面跳转中")){
    //     toast("登录成功")
    // }else{
    //     toast("登录失败")
    // }
}
function 超级_post_单码退出(){//成功返回1失败返回错误代码
    // var url =当前服务器线路+ 调用码_退出登录
    // var res = http.post(url, {
    //     "StatusCode": 状态码,
    //     "UserName": 卡密,
    // })
    // return res.body.string()
}
function 超级_验证卡密(隐藏对话框){//隐藏对话框=1则不显示对话框提示
    if(卡密.length<8){
        toastLog("卡密錯誤")
        storage.put ("card","")
        exit()
        return false
    }else{
        var 返回文本=""
        返回文本=超级_post_单码登陆()//2591744<|>46<|>2021-01-25 16:46:46<|>1     //Error：卡号不存在或已被删除。//Error:用户已过期。
        var 返回文本数组=返回文本.split("<|>")
        if(返回文本.indexOf("<|>")>-1 && 返回文本.indexOf("Error：")==-1){//返回文本=="1" || 
            状态码=返回文本
            到期时间=返回文本数组[2]//超级_post_单码取信息()
            ui.run(function(){
                f.编辑框__到期时间.setText(到期时间)
                f.编辑框__到期时间.setBackgroundColor(colors.parseColor("#008000"))
                f.编辑框__到期时间.setTextColor(colors.parseColor("#ffffff"))
            })
            // 用户数据=超级_post_获取用户数据()
            // if(用户数据==""){
            //     用户数据=默认总单数
            //     超级_post_设置用户数据(用户数据)
                
            // }
            剩余天数3=到整数2(返回文本数组[1])//到整数2(用户数据)
            if(剩余天数3<1){
                toastLog("剩余单数为0")
                exit()
                return false
            }

            ui.run(function(){
                f.编辑框__剩余单.setText(到文本2(剩余天数3))
                // f.编辑框__客户id.setText("  "+卡密.substr(0,5)+"  ")
            })
            if(隐藏对话框!=1){
                toastLog("登陸成功.到期時間:"+到期时间)
            }
            间隔天数=数值_取小数点后n位(到整数2(返回文本数组[0])/3600/24,2)//间隔天数=数值_取小数点后n位(时间_取间隔天数(到期时间,时间_取网络时间()),2)
            
            if(间隔天数<=0){
                toastLog("卡密到期")
                storage.put ("card","")
                exit()
                return false
            }else if(间隔天数<=7){
                if(隐藏对话框!=1){
                    alert("【超級一號】研究室 提醒你 快將到期提醒,請盡快續期,以免耽誤使用 5484 2020","剩餘天數:"+间隔天数)
                }
                
            }
            ui.run(function(){
                f.setSize(screenWidth,screenHeight)
                f.viewpager.setVisibility(android.view.View.VISIBLE)
            })
            storage.put ("card",卡密)
            return true
        }else {
            toastLog("卡密錯誤:"+返回文本)
            storage.put ("card","")
            exit()  
            return false
        }
    }
    return false
}
function 超级_post_单码取信息(){//成功返回时间,失败返回错误代码.
    // var url = 当前服务器线路+调用码_取到期时间
    // var res = http.post(url, {
    //     "UserName":卡密
    // })
    // return res.body.string()
}

//万捷验证后台WebApi开启且WebApi编辑粘贴以下函数
// function  login2($rjbh,$zh,$mm,$bb,$jqm,$yxh,$xxz){
//     $data=login($rjbh,$zh,$mm,$bb,$jqm,$yxh,$xxz);
//     return $data;
//   }

//   function  kd2($rjbh,$zh,$mm,$czlx,$ds){
//     $data=kd($rjbh,$zh,$mm,$czlx,$ds);
//     return $data;
//   }

// kd	扣除和查询用户的点数
//  参数	 说明
// 参数1：软件编号	软件的编号，如：10001
// 参数2：用户账号	用户账号
// 参数3：用户密码	用户密码的小写32位MD5，卡号直接登录的请不要提交密码。
// 参数4：操作类型	操作类型，0=扣除点数，1=查询点数
// 参数5：扣除点数	参数4如果为0，则扣除此数量的点数。
// 访问示例：
// http://服务器地址/api.php?name=接口名称&c1=软件编号&c2=账号&c3=密码&c4=操作类型&c5=扣除的点数
function 超级_post_设置用户数据(数据){//万捷验证扣点
    // var url = 当前服务器线路+调用码_设置用户数据
    // var res = http.post(url, {
    //     "StatusCode":状态码,
    //     "UserName":卡密,
    //     "UserData":数据
    // })
    // return res.body.string()//成功返回1,失败返回错误代码.

    var url =当前服务器线路+ "name=kd2&c1="+软件id+"&c2="+卡密+"&c4=0&c5="+数据
    var res = http.get(url)//万捷验证
    // toastLog(res.body.string())//.split("<|>")[0]
    return res.body.string()//2591744<|>0<|>2021-01-25 16:46:46<|>1         //Error：卡号不存在或已被删除。//Error:用户已过期。
}
function 超级_post_获取用户数据(){//StatusCode=&UserName=    获取用户数据,用户名和单码模式通用.
    // var url = 当前服务器线路+调用码_获取用户数据
    // var res = http.post(url, {
    //     "StatusCode":状态码,
    //     "UserName":卡密
    // })
    // return res.body.string()//成功返回数据,失败返回错误代码.
}
function 超级_get_单码扣点(){//点数http://v1.27yz.net/HttpApi.ashx?action=Discount&UserCode=注册码&Num=点数&AppCode=软件编号&cd=动态随机数&Sign=MD5签名
    // 点数=点数||1//http://web-dx.3600d.net:83/w2731147/api.php?name=kd2&c1=10019&c2=2CDADCFD48DDA7E5C6ABC02D&c4=0&c5=1
    // try {
        var url =当前服务器线路+ "name=kd2&c1="+软件id+"&c2="+卡密+"&c4=0&c5=1"//+点数
        var res = http.get(url, {}, function(res, err){
            if(err){
                console.error(err);
                // return 999;
            }
            log("code = " + res.statusCode);
            log("html = " + res.body.string());
            // return res.body.string()
        })//万捷验证
    // } catch (x) {
    //     toastLog("超级_get_单码扣点错误:" + x)
    // }
    
    // toastLog(res.body.string())//.split("<|>")[0]
    // return res.body.string()//2591744<|>0<|>2021-01-25 16:46:46<|>1         //Error：卡号不存在或已被删除。//Error:用户已过期。
}
function 取剩余单数(){//假单计
    // 用户数据=超级_post_获取用户数据()
    剩余天数3= 到整数(f.编辑框__剩余单.getText())//到整数(用户数据)//
    ui.run(function(){
        f.编辑框__剩余单.setText(到文本2(剩余天数3))
    })
    // if(剩余天数3<1){
    //     toastLog("剩余单数为0")
    //     exit()
    // }
    return 剩余天数3
}
ui.run(function(){
    f.viewpager.setVisibility(android.view.View.GONE)
})

//,现行时间戳=时间_取现行时间戳()//10207

var 到期时间,卡密="",状态码="", storage = storages.create("超级软件:超级一号"),间隔天数=0.001,用户数据=0,剩余天数3=-1
var 服务器数组=["1:Super One Cloud","2:Super Two Cloud","3:Amazon Cloud","4:Google Cloud","5:Alibaba Cloud","6:SME Cloud"]
var 当前服务器线路="http://103.210.238.136:86/api.php?",当前服务器=dialogs.singleChoice("請選擇服務器",服务器数组 ,0)//UserApi
var 调用码_单码用户登录="7a68bdb395ac0569",调用码_取到期时间="40054a445d3ba087",调用码_退出登录="c17af83c9317695d"
var 调用码_设置用户数据="a5f1fea72aeb30eb",调用码_获取用户数据="a5e04dd91995e53e"
var 软件id="10017",当前版本=1,软件信息数组=超级_get_取软件信息().split("<|>")//,现行时间戳=时间_取现行时间戳()//10207
// qrjxx	根据软件编号返回软件的配置信息
//  参数	 说明
// 参数1：软件编号	软件的编号，如：10001
// 参数2：信息值，1-13的数字	
// 1 = 最新版本
// 2  = 公告
// 3 =  更新地址
// 4 = 服务器时间戳
// 5 = 更新信息
// 6= 是否强制更新（yes /no）
// 7= 自助解绑是否开启（yes/no）
// 8= 换机扣除的分钟数
// 9=登录方式(0=禁止，1=不绑定登录，2= 绑定登录)
// 10= 循环检测分钟数
// 11=注册方式（0=禁止注册，1=开放注册，2= 带卡注册）
// 12= 允许几开
// 13= 免费解绑次数（多个信息值用小写逗号隔开）
function 超级_get_取软件信息(){//http://服务器地址/api.php?name=qrjxx&c1=软件编号&c2=1,3,5
    var url =当前服务器线路+ "name=qrjxx2&c1="+软件id+"&c2=1,2,3,4,5,6"
    var res = http.get(url)//更新网址飞书云盘
    // toastLog(res.body.string())//.split("<|>")[0]
    return res.body.string()//1<|>公告<|>https://n8ft7e5o91.feishu.cn/file/boxcnTZNFUmIVHzVjWcb9AlmoDc?from=from_copylink<|>1609239931<|>更新内容 换行 1、xxxxx 换行 2、xxxxx<|>no
}
if(当前版本!=软件信息数组[0]){
    setClip(软件信息数组[2])
    alert("請下載最新版本,已複製下載鏈接",软件信息数组[4])
    app.openUrl(软件信息数组[2])
    if(软件信息数组[5]=="yes"){//强制
        exit()
    }
}

卡密=storage.get ("card","")
if(卡密==""){
    卡密 = rawInput("請輸入超級壹號 激活碼","")
}
// 卡密 ="YUEK5A9AEAB4"
var 验证成功=超级_验证卡密()
setInterval(function(){
    间隔天数=间隔天数-0.5//每12小时-0.5天
    if(间隔天数<=0){
        toastLog("卡密到期")
        storage.put ("card","")
        exit()
    }
    超级_验证卡密(1)
},43200000)//   每14.4分钟-0.01 864000  12小时=43200000毫秒

超级_重启手机提醒()
function 超级_重启手机提醒(){
    setInterval(function(){
        PlaySound(存储卡目录+"Fireflies.mp3")
        alert("【超級壹號研究室】","提醒你每3小時重啟手機會爽好多！")

    }, 60000*18000)//60000*10表示每10分钟提醒一次.60000*180表示每180分钟提醒一次.加一个"提醒：180"，默認180分鈡可修改的，即3小時就彈出信息
}

f.编辑框__转发号.on("key", function(keyCode, event){
    if(event.getAction() == event.ACTION_DOWN && keyCode == keys.back){
        f.disableFocus()
        event.consumed = true;
    }
})
f.编辑框__转发号.on("touch_down", ()=>{
    f.requestFocus()
    f.编辑框__转发号.requestFocus()
})
var storage = storages.create("超级软件:超级二号+");
ui.run(function(){
    f.选择框__转发号.setChecked(整数到逻辑(到整数(storage.get ("选择框__转发号",0))))
    f.编辑框__转发号.setText(到文本2(storage.get ("编辑框__转发号","")))
    // f.单选框__起步第1区.setChecked(整数到逻辑(到整数(storage.get ("单选框__起步第1区",0))))
    f.编辑框__刷新order.setText(到文本2(storage.get ("编辑框__刷新order","4秒")))
})
function 超级_保存配置(){
    storage.put ("选择框__转发号",逻辑到整数(f.选择框__转发号.checked))
    storage.put ("编辑框__转发号",f.编辑框__转发号.text())
    // storage.put ("单选框__起步第1区",逻辑到整数(f.单选框__起步第1区.checked))
    storage.put ("编辑框__刷新order",f.编辑框__刷新order.text())
    
}
function 整数到逻辑(参数_整数){
    var 临时整数=到整数(参数_整数)
    if(临时整数==0){
        return false
    }else{
        return true
    }
}
function 逻辑到整数(参数_逻辑){
    if(参数_逻辑){
        return 1
    }else{
        return 0
    }
}

function 手机_检测IMEI(){
    // if (aimIMEI!=IMEI && 数组_是否包含元素(arrIMEI,IMEI)==false){//IMEI!="810EBM42ZRPU868017023543940" && IMEI!="6d4753c865422034581686" && IMEI!="392fd3e97cf4865030039332136"&& IMEI!="AHK7N17126001999864683030053043" && IMEI!="QKEYC6EQBQG6DMKJ862963036458186"){
    //     toastLog("無法識别手機,已複製")
    //     setClip(IMEI)
    //     exit()
    //     return
    // }
}
var nowDate="2018-08-08 08:08:08",间隔天数=0//时间_取当前日期时间()
function 检测时间(){
    // nowDate=时间_取网络时间()//时间_取当前日期时间()
    // log("nowDate:"+nowDate+":"+nowDate.length)
    // if(nowDate.length!=19){
    //     toastLog("使用時間錯誤")
    //     exit()    
    // }
    // 间隔天数=数值_取小数点后n位(时间_取间隔天数(aimDate,nowDate),2)
    // 检测时间0()
    // ui.run(function(){
    //     f.编辑框__到期时间.setBackgroundColor(colors.parseColor("#008000"))
    // })
}
function 检测时间0(){
    // if(间隔天数<=0){
    //     toastLog("兵器過期了，請電:54842020")
    //     exit()
    // }else if(间隔天数<=7){
    //     toastLog("剩餘天數:"+间隔天数+",請盡快續期,以免耽誤使用.")
    //     超级_悬浮窗显示隐藏(0)
    //     alert("【超級壹號】研究室 提醒你 快將到期提醒,請盡快續期,以免耽誤使用 5484 2020","剩餘天數:"+间隔天数)
    //     超级_悬浮窗显示隐藏(1)
    //     ui.run(function(){
    //         f.viewpager.setVisibility(android.view.View.VISIBLE)
    //     })        
    // }
    // else{
    //     toastLog("有效期至:"+aimDate)
    //     ui.run(function(){
    //         f.viewpager.setVisibility(android.view.View.VISIBLE)
    //     })         
    // }
}

function 延时停止运行(延时时间毫秒){//默认为3000毫秒
    if(延时时间毫秒==null){延时时间毫秒=3000}
    
    setTimeout(function(){
        ui.run(function(){
            device.vibrate(1000);//震动2秒

            f.选择框__开始运行.setText("停止中")
            f.选择框__开始运行.setBackgroundColor(colors.parseColor("#ff0000"))
            f.action.setBackgroundColor(colors.parseColor("#ff0000"))
            // f.编辑框__即时回程.setBackgroundColor(colors.parseColor("#ff0000"))
            
            toastLog("已停止")
            f.setPosition(运行x+停止x偏移,运行y+停止y偏移)//f.setPosition(0, 0)
            f.选择框__开始运行.checked=false
            // f.选择框__自动滚动.checked=f.选择框__开始运行.checked
            f.选择框__自动刷新order.checked=f.选择框__开始运行.checked
        })
        clearInterval(timerid)
    }, 延时时间毫秒)
    
    超级_停止所有线程()
}
var timerid__二次加速=0
f.选择框__开始运行.click(()=>{
    // var 按钮__临时 = className("android.view.View").depth(13).findOne(找控件时间)//className("android.webkit.WebView").findOne(找控件时间)
    // if(按钮__临时==null){
    //     toastLog2("WebViewnull")
    //     return
    // }




    // return

    device.vibrate(1000)
    局_消息界面=false
    ui.run(function(){
        f.选择框__自动刷新order.checked=f.选择框__开始运行.checked
    })
    函数__自动刷新order()
    // 已点击开始驾驶=!f.选择框__开始运行.checked
    超级_保存配置()
    if(f.选择框__开始运行.checked==true){
        device.keepScreenOn(3600*1000*24)//屏幕常亮
        // 手机_检测IMEI()
        // 检测时间0()
        随机延时确认()
        ui.run(function(){
            f.选择框__开始运行.setText("運行中")
            f.选择框__开始运行.setBackgroundColor(colors.parseColor("#008000"))
            f.action.setBackgroundColor(colors.parseColor("#008000"))

            f.setPosition(运行x,运行y)//(-580, screenHeight-1600)//-580,-1200,-1400
        })     
        timerid = setInterval(function(){
            // try {
                main_autojs()
            // } catch (error) {
            //     toastLog("main_错误:" + error)
            // }
            
        }, 1200)

    }else{

        clearInterval(timerid__二次加速)
        停止抢单()
        //exit()
    }    
})
function 停止抢单(){
    device.cancelKeepingAwake()//取消屏幕常亮
    ui.run(function(){
        f.选择框__开始运行.setText("停止中")
        f.选择框__开始运行.setBackgroundColor(colors.parseColor("#ff0000"))
        f.action.setBackgroundColor(colors.parseColor("#ff0000"))

        toastLog("已停止")
        f.setPosition(运行x+停止x偏移,运行y+停止y偏移)
    });
    clearInterval(timerid)
    
}
f.选择框__Exit.click(()=>{
    back()
    shell_结束指定后台进程(gogovanpackagename)
    超级_保存配置()
    clearInterval(timerid_刷新order)
    // clearInterval(timerid_测试)
    // clearInterval(timerid_加速)
    // clearInterval(timerid_清理后台)
    // clearInterval(timerid)
    停止抢单()
    //f.closeAll()
    // setTimeout(function(){
        exit()
    // },1000)
})


f.exitOnClose();

var execution = null;
var timerid=0,timerid_加速=0,timerid_清理后台=0; 

//console.show()
function PlaySound  (文件名) { 
    // return shell("mp3 file located at "+文件名,false);///storage/sdcard0/hello.mp3
    if(files.exists(文件名)){media.playMusic(文件名)}
    
}
function 超级_点击组件_text(参数_text){//"有新柯打！"
    var 返回值=false, 按钮__临时组件 = text(参数_text).clickable(true).findOne(找控件时间)
    if(按钮__临时组件!=null){
        返回值=按钮__临时组件.click()
        toastLog2("点击"+参数_text+"完毕")
    }
    return 返回值
}
var 订单类型=0,数组_历史订单=[],文本__订单信息="",局_消息界面=false
function main_autojs(){    //注意，这里的变量和脚本主体的变量并不共享
    // if(到整数2(f.编辑框__剩余单.getText())<=0){
    //     toastLog("剩余单数不足")
    //     超级_get_单码退出()
    //     停止抢单()
    //     exit()
    // }

    f.disableFocus()
    device.wakeUpIfNeeded()//如果屏幕没有点亮，则唤醒设备。

    var 按钮__传送=device.getBrightness()//0-255
    if(按钮__传送<15){
        toastLog2(按钮__传送+"<15")
        PlaySound(存储卡目录+"叮當.mp3")
        
    }

    if(device.isScreenOn()==false){//需要注意的是，类似于vivo xplay系列的息屏时钟不属于"屏幕亮着"的情况，虽然屏幕确实亮着但只能显示时钟而且不可交互，此时isScreenOn()也会返回false。
        toastLog2("Screenfalse")
        PlaySound(存储卡目录+"叮當.mp3")
        
    }

    按钮__传送=currentPackage()
    if(按钮__传送!=gogovanpackagename){//currentActivity()
        // toastLog2("!"+按钮__传送)
        PlaySound(存储卡目录+"叮當.mp3")
        
    }else{
        按钮__传送=id("activity_main_user").className("RadioButton").text("我的").checked(true).clickable(true).findOne(找控件时间)//
        if(按钮__传送==null){
            toastLog2("!我的")
            PlaySound(存储卡目录+"叮當.mp3")

        }
        // var img = captureScreen();        //获取在点(100, 100)的颜色值
        // var color = images.pixel(img, 1, 1);        //显示该颜色值
        // toastLog(colors.toString(color));

        //     return
        // }
    }


    按钮__传送=className("TextView").text("未讀通知").clickable(false).findOne(找控件时间)
    if(按钮__传送!=null){
        toastLog2("未讀通知")
        按钮__传送=id("tv_title_type").className("TextView").text("客戶WhatsApp查詢").clickable(false).findOne(找控件时间)
        if(按钮__传送!=null){
            按钮__传送=按钮__传送.parent().parent().parent()
            if(按钮__传送!=null){
                按钮__传送.click()
                toastLog2("未讀通知p3click")
                PlaySound(存储卡目录+"Fireflies.mp3")
                setTimeout(function(){
                    点击接柯打()
                    setTimeout(function(){
                        点击接柯打()
                        setTimeout(function(){
                            点击接柯打()

                        },500)
                    },500)
                },500)
            }else{
                toastLog2("未讀通知p3null")
            }
        }
    }

    // desc=傳送,id=send,className=android.widget.ImageButton,clickable=true
    按钮__传送=id("send").desc("傳送").className("ImageButton").clickable(true).findOne(找控件时间)
    if(按钮__传送!=null && 局_消息界面==false){
        局_消息界面=true
        // 按钮__传送.click()
        // 按钮__传送=id("voice_note_btn").textContains("語音訊息").className("ImageButton").clickable(false).findOne(找控件时间)//id("entry").text("訊息").className("EditText")
        // if(按钮__传送!=null){
            
        //     return
        // }else{
        //     toastLog2("!語音訊息")
        // }
        var obj={}
        obj.属性__信息=文本__订单信息
        数组_历史订单.splice(0,0,obj)//第2个参数为0则不删除改为插入数组第0个位置
        ui.run(function(){
            f.列表框__历史订单.setDataSource(数组_历史订单)
        })     
        toastLog2("un傳送")
        PlaySound(存储卡目录+"qiangdanchenggong.mp3")

        剩余天数3=取剩余单数()
        剩余天数3=剩余天数3-1//超级_post_设置用户数据()这个耗时函数必须放在后面
        toastLog2("檢測到成功接單b:"+剩余天数3)
        ui.run(function(){
            f.编辑框__剩余单.setText(到文本2(剩余天数3))
        })
        超级_get_单码扣点()// threads.start(超级_get_单码扣点)//超级_post_设置用户数据(剩余天数3)

        if(f.选择框__转发号.checked==true){
            
                var 局_临时控件=id("conversation_contact_name").className("TextView").findOne(找控件时间)//id("entry").className("EditText").clickable(true).findOne(找控件时间)
                if(局_临时控件==null){
                    toastLog2("客人号码null")
                }else{
                    var 局_客户号码=局_临时控件.text()
                    toastLog2("客人号码:"+局_客户号码)
                    局_临时控件=null
                    while(局_临时控件==null || 局_临时控件.text()=="輸入訊息"){
                        局_临时控件=id("entry").className("EditText").clickable(true).findOne(找控件时间)
                    }
                    var 局_临时控件内容=局_临时控件.text()
                    var 局_消息内容="你放在公司的手机搶了單，快回复"+局_客户号码+"樓盤資信內容……"+局_临时控件内容
                    if(局_临时控件内容.indexOf("你放在公司的手机搶了單")!=-1){
                        局_消息内容=局_临时控件内容
                    }
                    if(launch("com.chaanikya.wadirectmsg")==false){
                        toastLog2("運行wadirectmsg失敗") 
                    }else{
                        setTimeout(function(){
                            f.disableFocus()
                            局_临时控件=id("etMobileNumber").className("EditText").clickable(true).findOne(找控件时间)//找控件时间
                            if(局_临时控件==null){
                                toastLog2("MobileNumbernull")
                            }else{
                                局_临时控件.setText(f.编辑框__转发号.text())
                                局_临时控件=id("etWhatsAppMessage").className("EditText").clickable(true).findOne(找控件时间)
                                if(局_临时控件==null){
                                    toastLog2("WhatsAppMessagenull")
                                }else{
                                    局_临时控件.setText(局_消息内容)
                                    局_临时控件=id("btnSendMessage").text("SEND").className("Button").clickable(true).findOne(找控件时间)
                                    if(局_临时控件==null){
                                        toastLog2("SENDnull")
                                    }else{
                                        局_临时控件.click()
                                        // 局_临时控件=null
                                        // while(局_临时控件==null){
                                        //     局_临时控件=id("send").desc("傳送").clickable(true).findOne(找控件时间)
                                        // }
                                        // f.disableFocus()
                                        setTimeout(function(){
                                            f.disableFocus()
                                            var 局_临时控件2=id("send").desc("傳送").clickable(true).findOne(找控件时间)//.className("ImageButton")
                                            if(局_临时控件2==null){
                                                toastLog2("傳送null2")
                                            }else{
                                                局_临时控件2.click()
                                                toastLog2("傳送2:"+局_消息内容)
                                                PlaySound(存储卡目录+"qiangdanchenggong.mp3")
                                                
                                                setTimeout(() => {// 延时停止运行(10)
                                                    launch(gogovanpackagename)
                                                    setTimeout(() => {
                                                        窗口_跳到我的(1)
                                                        局_消息界面=false
                                                    }, 500);
                                                }, 800);
                                            }
                                        },800)
                                    }
                                }
                            }
                        },500)
    
                    }
                    
                }



        }else{
            toastLog2("未勾选转发")
            // 按钮__传送.click()
            窗口_跳到我的(2)// 延时停止运行(10)
            局_消息界面=false
        }
        
        return
    }else{
        // toastLog2("傳送null")
    }

    
    function 超级_点击x(){
        var 组件__临时=id("iv_left").className("ImageView").clickable(true).findOne(找控件时间)
        if(组件__临时!=null){
            组件__临时.click()
            toastLog2("x")
            组件__临时=id("tips_dialog_right").className("Button").text("確定").clickable(true).findOne()
            if(组件__临时!=null){
                组件__临时.click()
                toastLog2("確定x")
            }
        }else{
            toastLog2("!x")
        }
    }
    function 窗口_跳到我的(n){//n=1从客戶WhatsApp查询界面跳回,n=2不转发,从转发消息界面跳回
        n=n||1
        var 组件__临时=null
        if(n==1){
            超级_点击x()
        }else if(n==2){
            组件__临时=id("conversation_contact_name").className("TextView").findOne(找控件时间)
            if(组件__临时!=null){
                launch(gogovanpackagename)
                setTimeout(function(){
                    超级_点击x()
                },2000)
            }else{
                toastLog2("!客戶號碼")
            }
        }

    }
    按钮__传送=textContains("這個查詢已被其他代理回應了").findOne(找控件时间)
    if(按钮__传送!=null){
        按钮__传送=text("返回").findOne(找控件时间)
        if(按钮__传送!=null){
            按钮__传送.click()
            toastLog2("這個查詢已被其他代理回應了-返回")
            var obj={}
            obj.属性__信息=文本__订单信息+"已被搶答"
            数组_历史订单.splice(0,0,obj)//第2个参数为0则不删除改为插入数组第0个位置
            ui.run(function(){
                f.列表框__历史订单.setDataSource(数组_历史订单)
            })  
            窗口_跳到我的(1)
            局_消息界面=false
        }
    }
    // 按钮__传送=textContains("此查詢已被其他代理回應").findOne(找控件时间)
    // if(按钮__传送!=null){

    //         toastLog2("此查詢已被其他代理回應")
    //         var obj={}
    //         obj.属性__信息=文本__订单信息+"已被搶答"
    //         数组_历史订单.splice(0,0,obj)//第2个参数为0则不删除改为插入数组第0个位置
    //         ui.run(function(){
    //             f.列表框__历史订单.setDataSource(数组_历史订单)
    //         })     

    // }


    function 超级_刷新验证码(){
        var 按钮__刷新验证码 = text("驗證碼").findOne(找控件时间)
        if (按钮__刷新验证码 == null) {
            toastLog2("驗證碼2null") 
            return
        }
        按钮__刷新验证码=className("android.view.View").boundsInside(局_验证码x,局_验证码y,局_验证码x2,局_验证码y2).clickable(true).findOne(找控件时间)//.boundsInside(600,900,900,1200)
        if(按钮__刷新验证码==null){//924,547,1020,646//.indexInParent(0)
            toastLog2("刷新验证码null") 
        }else{
            按钮__刷新验证码.click()
            toastLog2("刷新验证码")
        }
    }
    f.disableFocus()

    按钮__传送=text("向右滑動完成上方拼圖").findOne(找控件时间)
    if(按钮__传送==null){//向右滑動完成上方拼圖
        toastLog2("!上方拼圖")
        f.disableFocus()
        return
    }

    var p, clipx=187,clipy=730,clipx2=891,clipy2=1119,局_偏移=46//三星S20+分辨率1080*2009,clipx=209,clipy=750//20211007:(img, 187,730,891-187,1119-730)    20211107:209,750,869-clipx,1114-clipy
    var 局_验证码x=924,局_验证码y=547,局_验证码x2=1020,局_验证码y2=646
    var 局_滑块x=60,局_滑块y=1096,局_滑块x2=440,局_滑块y2=1819//正方形→右箭头
    if(screenHeight==2400 && release>=12){//三星S21ultra安卓12 分辨率1080*2400,验证码宽高(839,464)  //
        clipx =120//120,1398,240,1518
        clipy =873
        clipx2=959
        clipy2=1337
        局_偏移=46-90
        局_验证码x=724
        局_验证码y=650
        局_验证码x2=1020
        局_验证码y2=900
        局_滑块x=60
        局_滑块y=1096
        局_滑块x2=440
        局_滑块y2=1819
    }else{//三星S20+:2009  验证码宽高(704,389)

    }


    // 滑动距离要加回672-610=62  #FFFFFF 672,959  679,992  635,1022  677,1112  706,1104  724,1068
    // var 按钮__临时=textContains("向右滑動").findOne(找控件时间)
    // if(按钮__临时==null){
    //     toastLog2("向右滑動null")
    //     f.disableFocus()
    //     return
    // }
    // 按钮__传送=按钮__临时.parent().findOne(className("android.view.View").clickable(true))//text("挱")
    按钮__传送=className("android.view.View").boundsInside(局_滑块x,局_滑块y,局_滑块x2,局_滑块y2).clickable(true).findOne(找控件时间)
    //按钮__传送=className("android.view.View").boundsInside(80,1196,340,1719).clickable(true).findOne(找控件时间)//text("挱").clickable(true).className("android.view.View").boundsInside(120,1396,240,1519)
    if(按钮__传送==null){//向右滑動完成上方拼圖
        toastLog2("挱null")//实际订单120,1396,240,1519  历史订单120,1399,240,1522
        // 超级_刷新验证码()
        f.disableFocus()
        return
    }
    局_消息界面=false
    var img = captureScreen()
    images.saveImage(img, "/sdcard/zhongyuandichanyzm0.jpg")


    var clip = images.clip(img, clipx,clipy,clipx2-clipx,clipy2-clipy)//(img, 120,873,959-120,1337-873)//images.clip(img, 240, 988-200, 690-240, 200)//images.clip(img, rect.left, rect.top, rect.width, rect.height);
    images.saveImage(clip, "/sdcard/zhongyuandichanyzm.jpg")
    // var p = images.findMultiColors(clip, "#FFFFFF", [[7, 992-959, "#FFFFFF"], [677-672, 1112-959, "#FFFFFF"], [706-672, 1104-959, "#FFFFFF"], [724-672, 1068-959, "#FFFFFF"], [709-672, 1104-959, "#FFFFFF"], [780-672, 1076-959, "#FFFFFB"]], {//, [635-672, 1022-959, "#FFFFFF"]
    //     threshold: 1//{number} 找色时颜色相似度的临界值，范围为0 ~ 255（越小越相似，0为颜色相等，255为任何颜色都能匹配）。默认为4。threshold和浮点数相似度(0.0~1.0)的换算为 similarity = (255 - threshold) / 255.
    // })
    // var 局_白边偏移=0, p1 = images.pixel(clip, 0, 0), p2 = images.pixel(clip, 10, 172), p3 = images.pixel(clip, 20, 384)
    // var p4 = images.pixel(clip, 338, 8), p5 = images.pixel(clip, 676, 17)
    // toastLog("p1:"+p1)
    // if(p1=="#FFFFFF" && p2=="#FFFFFF" && p3=="#FFFFFF" && p4=="#FFFFFF" && p5=="#FFFFFF"){//0xFFFFFF需要断开team viewQS否则截图不对
    //     clip = images.clip(img, 22,20,clipx2-clipx-22*2,clipy2-clipy-20)//验证码宽高(704,389)(839,464)
    //     images.saveImage(clip, "/sdcard/zhongyuandichanyzm.jpg")
    //     toastLog2("白边")
    // }
    if(screenHeight==2400 && release>=12){
        // p = images.findMultiColors(clip, "#FDFFFF", [[552-526,47-47, "#FFFFFF"],[497-526,96-47, "#FFFEFE"],[599-526,95-47, "#FFFDFF"],[652-526,152-47, "#FDFFFD"]], {//526,47 坐标颜色为#FDFFFF
        //     threshold: 2//652,152
        // })
        p = images.findMultiColors(clip, "#FFFEFF", [[440-368,172-136, "#FFFAFF"],[496-368,225-136, "#FEFFFF"],[440-368,284-136, "#FAFFFF"],[332-368,280-136, "#FFFEFE"]], {
            threshold: 3//322+46,136 坐标颜色为#FFFEFF
        })

    }else{
        p = images.findMultiColors(clip, "#FFFFFB", [[563-484,896-892, "#FEFFFF"], [599-484,932-892, "#FFFEFC"], [478-484,972-892, "#FDFFFE"], [564-484,972-892, "#FFFEFC"]], {
            threshold: 2//{number} 找色时颜色相似度的临界值，范围为0 ~ 255（越小越相似，0为颜色相等，255为任何颜色都能匹配）。默认为4。threshold和浮点数相似度(0.0~1.0)的换算为 similarity = (255 - threshold) / 255.
        })
    }

    if(p==null){//需要断开team viewQS否则截图不对
        f.disableFocus()
        // PlaySound(存储卡目录+"buyao.mp3")
        toastLog2("clipnull")
        超级_刷新验证码()
        return
    }
    f.disableFocus()
    threads.start(function(){
        var centerX=按钮__传送.bounds().centerX(),centerY=按钮__传送.bounds().centerY()
        swipe(centerX,centerY,centerX+p.x+局_偏移,centerY,100*到整数(random(1,3)))//centerx 滑动距离要加回再减去滑块一半宽度672-610=62  gesture(100*到整数(random(5,10)), [romx, romy], [romx+5, romy+700])//
    })
    PlaySound(存储卡目录+"qiangdanchenggong.mp3")
    toastLog2("向右滑動完成上方拼圖:"+p.x+","+p.y)


}

function 延时运行函数(fn,毫秒时间){//默认为3000毫秒
    毫秒时间=毫秒时间||3000
    setTimeout(fn, 毫秒时间)
}
// function 延时接柯打(毫秒时间){
//     setTimeout(function(){
        
//     }, 毫秒时间); 
// }
var thread =null,timerid_点击接柯打=null
/**
 * 返回0表示没找到接柯打
 * 返回1表示找到了
 */
function 点击接柯打(){
    var 按钮__接柯打 =null
    按钮__接柯打 = text("驗證碼").className("TextView").findOne(找控件时间)
    if (按钮__接柯打 != null) {
        toastLog2("驗證碼") 
        return
    }
    按钮__接柯打 = text("WhatsApp 搶答").findOne(找控件时间)
    if (按钮__接柯打 == null) {
        toastLog2("沒有找到WhatsApp 搶答") 
        按钮__接柯打 = text("WhatsApp 回答").findOne(找控件时间)//查看柯打詳情
    }
    if (按钮__接柯打==null) {
        toastLog2("沒有找到WhatsApp 回答") 
        // return 0
    }else{
        // setTimeout(function(){
            // PlaySound(存储卡目录+"Fireflies.mp3")
            if(!f.选择框__五秒延时接.checked){
                setTimeout(function(){
                    // if(按钮__接柯打.click()){
                        // 按钮__接柯打.click()
                        // 按钮__接柯打.parent().click()
                        // 按钮__接柯打.parent().parent().click()
                        // 按钮__接柯打.parent().parent().parent().click()
            
                        threads.start(function(){
                            click(按钮__接柯打.bounds().centerX(), 按钮__接柯打.bounds().centerY())//(screenWidth/2,screenHeight/2)//线程执行
                        })
                        // toastLog2("點擊WhatsApp 搶答成功")
                        toastLog2("點擊確認接單成功:" + 按钮__接柯打.bounds().centerX()+","+按钮__接柯打.bounds().centerY())

                        // var 按钮__临时 = className("android.webkit.WebView").findOne(找控件时间)
                        // if(按钮__临时==null){
                        //     toastLog2("WebViewnull")
                        //     return
                        // }

                        PlaySound(存储卡目录+"qiangdanchenggong.mp3")
                        // 延时停止运行(0)
                    // }else{
                    //     toastLog2("點擊確認接單失败")
                    // }
                },到数值(延时确认)*1000)//到数值(f.编辑框__延时确认.text())*1000
                
            }else{
                toastLog2("已勾選5秒考虑")
    
            }

        // }, 100)
    }   
    // return 1   
}





events.observeNotification()//需要开启通知权限
events.onNotification(function(notification){
    if(f.选择框__监听通知栏.checked){
        if(f.选择框__开始运行.checked){
            if(超级_判断通知(notification)){
                notification.click()
                PlaySound(存储卡目录+"Fireflies.mp3")
                setTimeout(function(){
                    点击接柯打()
                    setTimeout(function(){
                        点击接柯打()
                        setTimeout(function(){
                            点击接柯打()

                        },500)
                    },500)
                },500)
            }
        }else{
            // toastLog2("開始運行未勾選")
        }

    }else{
        toastLog2("通知欄未勾選")
    }

})
toast("開始監聽通知欄...")

function 超级_判断通知(notification){
    log("包名:" + notification.getPackageName())//com.centaline.aplus
    log("标题:" + notification.getTitle())//
    log("文本:" + notification.getText())//南華大廈 2房 高層 D室(LDM973)//聚賢逸居 2房 中層 A室(LDP555)
    log("优先:" + notification.priority)//优先级//2
    log("目录:" + notification.category)//null
    log("时间:" + new Date(notification.when))//Wed Feb 24 2021 18:42:42 GMT+0800(GMT+08:00)
    log("数量: " + notification.number)//1
    log("摘要: " + notification.tickerText)//提示信息//null
    if(notification.getPackageName()==gogovanpackagename ){
        文本__订单信息=notification.getText()
        return true
    }else{
        return false
    }
}


//记录按键被按下时的触摸坐标
var x = 0, y = 0;
//记录按键被按下时的悬浮窗位置
var windowX, windowY;
//记录按键被按下的时间以便判断长按等动作
var downTime;

f.action.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = f.getX();
            windowY = f.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置
            f.setPosition(windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y));
            //如果按下的时间超过1.5秒判断为长按，退出脚本
            // if(new Date().getTime() - downTime > 2500){
            //     exit();
            // }
            return true;
        case event.ACTION_UP:
            if(Math.abs(event.getRawY()-y)<5 && Math.abs(event.getRawX()-5)<5){
                action_onclick()
            }
            return true
        }
        return true
})


var timerid_测试=0
超级_五秒不接()
function 超级_三秒不接(){
    // clearInterval(timerid_测试)
    // if(f.选择框__测试.checked){
    //     timerid_测试 = setInterval(function(){
    //         超级_测试()
    //     }, 5000)
    // }else{
    //     clearInterval(timerid_测试)
    // }
}

f.选择框__五秒延时接.click(()=>{
    // // 组件_选择框单选框不能改(f.选择框__测试)
    // // 超级_三秒不接()

    // clearInterval(timerid_测试)
    超级_五秒不接()
})
function 移动悬浮_置内容(s){
    s=s||"壹移            號動"//"移動    懸浮"
    ui.run(function(){
        f.action.setText(s)
    })
}
function 超级_测试(){
    var 按钮__確定接柯打 = id("iv_left").findOne(找控件时间)//按钮__確定接柯打 = id("takeorder_cancel").findOne(找控件时间)
    // if(按钮__確定接柯打==null){
    //     按钮__確定接柯打 = text("WhatsApp 回答").findOne(找控件时间)
    // }
    if(按钮__確定接柯打==null || f.选择框__开始运行.checked==false || f.选择框__五秒延时接.checked==false){
        // toastLog("非確認接柯打界面")
        五秒不接_开始倒计时=false
        移动悬浮_置内容()
        return
    }
    if(五秒不接_开始倒计时==false){
        五秒不接_倒计时=5
        五秒不接_开始倒计时=true
    }else{
        五秒不接_开始倒计时=true
        五秒不接_倒计时=五秒不接_倒计时-1
        if(五秒不接_倒计时<=0){
            var 按钮__取消=按钮__確定接柯打
            if(按钮__取消!=null){
                // if(按钮__取消.click()){
                    按钮__取消.click()
                    按钮__確定接柯打 = id("tips_dialog_right").text("確定").findOne(找控件时间)//text = 是否退出客戶WhatsApp查詢？,id = tv_content
                    if(按钮__確定接柯打!=null){
                        按钮__確定接柯打.click()
                        toastLog2("點擊確定成功")
                    }else{
                        toastLog2("未找到確定")
                    }
                    // threads.start(function(){
                    //     click(按钮__取消.bounds().centerX(), 按钮__取消.bounds().centerY())//(screenWidth/2,screenHeight/2)//线程执行
                    // })
                    
                    // //延时停止运行(0)
                    移动悬浮_置内容()
                    // // 超级_返回订单界面()
                // }
                
            }
            //點擊確定,返回
            五秒不接_开始倒计时=false
            移动悬浮_置内容()
        }
    }
    移动悬浮_置内容(五秒不接_倒计时+"")
    // toastLog("五秒不接倒計時:"+五秒不接_倒计时)
}
var 五秒不接_倒计时=5,五秒不接_开始倒计时=false
function 超级_五秒不接(){
    移动悬浮_置内容()
    clearInterval(timerid_测试)
    if(f.选择框__五秒延时接.checked){
        //ui.run(function(){
            // f.选择框__5分钟.setChecked(false)
            // f.选择框__10分钟.setChecked(false)
        //})
        
        timerid_测试 = setInterval(function(){
            超级_测试()

        }, 1000)
    }
}

setInterval(()=>{}, 1000);//保持悬浮窗不被关闭

function 超级_停止所有线程(){
    if(thread!=null){
        thread.interrupt()
    }
    threads.shutDownAll()
}

function toastAt(msg,x,y){//调用方法ui.run(()=>toastAt("在屏幕其他坐标显示提示信息",500,1000))
    importClass(android.widget.Toast)
    importClass(android.view.Gravity)
    var toast=Toast.makeText(context,msg,Toast.LENGTH_SHORT)
    toast.setGravity(Gravity.TOP | Gravity.LEFT,x,y)
    toast.show()
}

function 时间_取当前日期时间() {//获取当前的日期时间 格式“yyyy-MM-dd HH:MM:SS”
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var strHours = date.getHours();
    if (strHours >= 0 && strHours <= 9) {
        strHours = "0" + strHours;
    } 
    var strMinutes = date.getMinutes();
    if (strMinutes >= 0 && strMinutes <= 9) {
        strMinutes = "0" + strMinutes;
    } 
    var strSeconds = date.getSeconds();
    if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = "0" + strSeconds;
    }     
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + strHours + seperator2 + strMinutes
            + seperator2 + strSeconds;
    return currentdate;
}

function 时间_取间隔天数(startDate,endDate)  
{  
    var startTime = new Date(Date.parse(startDate.replace(/-/g,   "/"))).getTime();     
    var endTime = new Date(Date.parse(endDate.replace(/-/g,   "/"))).getTime();     
    var dates = ((startTime - endTime))/(1000*60*60*24);     
    return  dates;    
}

// 格式化日期，如月、日、时、分、秒保证为2位数
function 数值_补零 (n) {
    n = n.toString()
    return n[1] ? n : '0' + n;
}

/** 参数number为毫秒时间戳，format为需要转换成的日期格式
 * 时间_时间戳到时间(1545903266795, 'Y年M月D日 h:m:s')或者 时间_时间戳到时间(1545903266795, 'Y-M-D h:m:s')即可
 * @param {*} 时间戳 
 * @param {*} format 
 */
function 时间_时间戳到时间 (时间戳, format) {
    let time = new Date(时间戳)
    let newArr = []
    let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
    newArr.push(time.getFullYear())
    newArr.push(数值_补零(time.getMonth() + 1))
    newArr.push(数值_补零(time.getDate()))

    newArr.push(数值_补零(time.getHours()))
    newArr.push(数值_补零(time.getMinutes()))
    newArr.push(数值_补零(time.getSeconds()))

    for (let i in newArr) {
        format = format.replace(formatArr[i], newArr[i])
    }
    return format;
}
/** 参数number为毫秒时间戳，format为需要转换成的日期格式
 * 时间_取现行时间('Y年M月D日 h:m:s')或者 时间_取现行时间('Y-M-D h:m:s')即可
 * @param {*} format 
 */
 function 时间_取现行时间 (format) {
    let time = new Date()
    let newArr = []
    let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
    newArr.push(time.getFullYear())
    newArr.push(数值_补零(time.getMonth() + 1))
    newArr.push(数值_补零(time.getDate()))

    newArr.push(数值_补零(time.getHours()))
    newArr.push(数值_补零(time.getMinutes()))
    newArr.push(数值_补零(time.getSeconds()))

    for (let i in newArr) {
        format = format.replace(formatArr[i], newArr[i])
    }
    return format;
}
function 时间_时间到时间戳(时间){
    return 时间.getTime()  // 将转换后的标准日期转换为时间戳。
}
/**
 * 2017-12-08 20:5:30 返回 2017-12-08T12:05:30.000Z
 * Fri Dec 08 2017 20:05:30 GMT+0800 返回 Fri Dec 08 2017 20:05:30 GMT+0800
 * @param {*} 时间文本 标准时间格式:"Fri Dec 08 2017 20:05:30 GMT+0800"加8个小时
 */
function 时间_文本到时间(时间文本){
    return new Date(时间文本)  // 将指定日期转换为标准日期格式。Fri Dec 08 2017 20:05:30 GMT+0800 (中国标准时间)
}
function 时间_取网络时间(){//"2019-09-04 06:06:06"
    // var r = http.get("http://bjtime.cn", {}, function(res, err){
    //     if(err){
    //         console.error(err);
    //         log(err)
    //         return "err";
    //     }
    //     log("code = " + r.statusCode);
    //     log("html = " + r.body.string());
    //     return r.statusCode
    // });

    
// https://biaozhunshijian.51240.com/
// http://time.tianqi.com/

    // var r = http.get("http://118.25.40.210:8080/time.txt")
    // log("time.tx code = " + r.statusCode )
    // if(r.statusCode>=200 && r.statusCode<300){
        var r2 = http.get("https://www.baidu.com", {//var r2 = http.get(r.body.string(), {
            headers: {
                "If-Modified-Since" : "bjtime"
            }
        })//<p id="times">Thu, 12 Sep 2019 00:28:26 GMT</p>
        log("tsa code = " + r2.statusCode + "," + r2.headers["Date"])
        // for(var headerName in r2.headers){
        //     log(headerName +"," + r2.headers[headerName]);
        // }
        if(r2.statusCode>=200 && r2.statusCode<300){
            var 时间=时间_文本到时间(r2.headers["Date"]) //r2.body.string()
            var 返回时间文本=正则匹配时间(时间_时间戳到时间(时间_时间到时间戳(时间),'Y-M-D h:m:s'))//时间_时间戳到时间(时间.setHours(时间.getHours() + 8),'Y-M-D h:m:s')
            log(返回时间文本)
            // if(返回时间文本==""){
            //     返回时间文本=正则匹配时间(时间_时间戳到时间(网页源码, 'Y-M-D h:m:s'))
            // }
            return 返回时间文本//"2019-09-12 01:20:06"
        }else{
            return ""
        }
    // }else{
    //     return ""
    // }

    //"http://time1903.beijing-time.org/time.asp"   t0=new Date().getTime(); nyear=2019; nmonth=7; nday=12; nwday=5; nhrs=21; nmin=16; nsec=47;
    var r = http.get("http://time1903.beijing-time.org/time.asp")
    log("code = " + r.statusCode);
    if(r.statusCode==200){
        var 网页源码=r.body.string()
        var 年=文本_取出中间文本3(网页源码,"nyear=",";")//\nnmonth
        var 月=文本_取出中间文本3(网页源码,"nmonth=",";")//\nnday
        var 日=文本_取出中间文本3(网页源码,"nday=",";")//\nnwday
        var 时=文本_取出中间文本3(网页源码,"nhrs=",";")//\nnmin
        var 分=文本_取出中间文本3(网页源码,"nmin=",";")//\nnsec
        var 秒=文本_取出中间文本3(网页源码,"nsec=",";")//"00"//
        log("src2:"+年+"-"+格式化文本补零(月)+"-"+格式化文本补零(日)+" "+格式化文本补零(时)+":"+格式化文本补零(分)+":"+格式化文本补零(秒))
        return 年+"-"+格式化文本补零(月)+"-"+格式化文本补零(日)+" "+格式化文本补零(时)+":"+格式化文本补零(分)+":"+格式化文本补零(秒)
    }else{
        return ""
    }
}
function 正则匹配时间(str){
    var rg = /([0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2})/;
    rg.test(str);
    return RegExp.$1
}
function 格式化文本补零(文本,位数){
    位数=位数 || 2
    if(文本.length>=位数){
        return 文本
    }
    return 取重复文本 ("0",位数 - 文本.length) + 文本
}
function 取文本长度_中文(str) {
    return str.replace(/[\u0391-\uFFE5]/g,"aa").length;   //先把中文替换成两个字节的英文，在计算长度
};  
function 取重复文本(str, num){
    let repeatStr = '';
    for(let i = 0; i < num; i++){
      repeatStr += str;
    }
    return repeatStr; 
    //return new Array( num + 1 ).join( str );
}
function 数值_取小数点后n位(num,n){
    return num.toFixed(n)
}
function 数值_取小数点后n位2(num,n)
{
    return(Math.round(num*Math.pow(10,n))/Math.pow(10,n));
}
function 数值_取小数点后n位3(num,n)
{
    var re = /([0-9]+\.[0-9]{n})[0-9]*/;
    return num.toString().replace(re,"$1");
}
function 数值_取小数点后n位4(num,n)
{
    var str=num.toString()
    return str.substring(0,str.indexOf(".")+n+1);
}
function 求次方(底数,指数){
    return Math.pow(底数,指数)
}
function 数组_到文本(数组,连接符){//连接符默认为|
    // 数组 = new Array(0,1,2,3,4);
    连接符=连接符 || "|"; 
    return 数组.join(连接符);
}
function 文本_到数组(文本,分隔符){//分隔符默认为|
    // var 文本 = "abc,abcd,aaa";
    分隔符=分隔符 || "|"; 
    return 文本.split(分隔符);// 在每个逗号(|)处进行分解。
}
function 文本_取出中间文本(str, 左边文本, 右边文本){
	var deps = str.indexOf(左边文本) + 左边文本.length;//如果结束字符为空,则取从开始字符到结束字符的所有字符串
	if (右边文本 == "")
	var depe = str.length;
	else
	var depe = str.indexOf(右边文本);
	var dep = str.substr(deps, depe - deps);
	return dep;
}
function 文本_取出中间文本2(str, 左边文本, 右边文本){
    var tempstr=("/^"+左边文本+"(.+?)"+右边文本+"$/")
    return tempstr.exec(str)[1]
}
function 文本_取出中间文本3(str, 左边文本, 右边文本){
    return str.split(左边文本)[1].split(右边文本)[0]
}
function 文本_取出中间文本_批量(str, 左边文本, 右边文本){
	return ("/^"+左边文本+"(.+?)"+右边文本+"$/").exec(str)
}
function 到数值(str){
    return Number(str)
    // 注意：
    // a) 如果转换的内容本身就是一个数值类型的字符串，那么将来在转换的时候会返回自己。
    // b) 如果转换的内容本身不是一个数值类型的字符串，那么在转换的时候结果是NaN.
    // c) 如果要转换的内容是空的字符串，那以转换的结果是0.
    // d) 如果是其它的字符，那么将来在转换的时候结果是NaN.
}
function 到小数(str){//与parseInt一样，唯一区别是parseFloat可以保留小数。
    return parseFloat(str)
    // a) 忽略字符串前面的空格，直至找到第一个非空字符,还会将数字后面的非数字的字符串去掉。
    // b) 如果第一个字符不是数字符号或者负号，返回NaN
    // c) 会将小数取整。（向下取整）
}
function 到整数(str){
    return parseInt(str,10)//为什么parseInt("08")返回的不是8了吧，因为把它当八进制了，而八进制是没有8的，所以要想得到8，那就parseInt("08",10)。 
    // a) 忽略字符串前面的空格，直至找到第一个非空字符,还会将数字后面的非数字的字符串去掉。
    // b) 如果第一个字符不是数字符号或者负号，返回NaN
    // c) 会将小数取整。（向下取整）
}
function 到整数2(str){//文本区分_只取数字   "价格04500元100"返回4500100
    str=str+""//String(str)
    var num= str.replace(/[^-0-9]/ig,"")
    // num=String(num)
    if(num=='' || num==""){return 0}//isNaN(num) || 
    return parseInt(num,10)
}
function 到文本(num){
    return String(num)
}
function 到文本2(num){//undefined，null不能用toString。
    return num.toString()
}
function 到逻辑(str){//注意：在进行boolean转换的时候所有的内容在转换以后结果都是true，除了：false、""（空字符串）、0、NaN、undefined
    return Boolean(str)
}
function 取反(逻辑型){
    return !逻辑型
}

function shell_结束指定后台进程(包名){//终止与 package（应用包名）关联的所有进程。此命令仅终止可安全终止且不会影响用户体验的进程。
    return shell("am kill "+包名).result
}
function shell_结束所有后台进程(){
    return shell("am kill -all").result
}

/**
 * 判断安卓系统7+
 */
function isAndroid7() {
    if (device.sdkInt >= 24) {
        return true;
    }
}

/**
 * 判断安卓系统ROOT
 */
function isRoot() {
    if (files.exists('/su/bin/su') == true || files.exists('/system/bin/su') == true || files.exists('/system/xbin/su') == true) {
        return true;
    }
}
function 文本_是否为数值(val){ //是数值返回true,不是返回false.isNaN()的缺点就在于 null、空格以及空串会被按照0来处理// isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除
    if(val === "" || val ==null){
        return false;
    }
    if(!isNaN(val)){
        return true;
    }else{
        return false;
    }
}  
function 组件_取顶级(组件){
    var 临时组件=组件
    while(临时组件!=null){
        临时组件=临时组件.parent()
    }
    return 临时组件
}
/**
 * 
 * @param {*} 组件 
 * @param {*} 几级 默认为1,取1级父组件
 */
function 组件_取父级(组件,几级){
    几级=几级||1
    var 临时组件=组件
    while(临时组件!=null && 几级>0){
        临时组件=临时组件.parent()
        几级=几级-1
    }
    return 临时组件
}
function 组件_选择框单选框不能改(选择框或单选框){
    var 局部_选中状态= !选择框或单选框.checked
    ui.run(function(){
        选择框或单选框.setChecked(局部_选中状态)
    })
}
function 组件_选择框单选框切换状态(选择框或单选框){
    var 局部_选中状态= 选择框或单选框.checked
    ui.run(function(){
        选择框或单选框.setChecked(!局部_选中状态)
    })
}
/**
 * 组件的第一层所有子组件.只返回满足条件的第一个组件
 * @param {*} 组件 
 * @param {*} 关键词 
 * @param {*} 精确寻找 默认为1精确寻找,2为模糊寻找
 * @param {*} 从上到下 默认为1从上到下,2为从下到上
 */
function 组件_寻找所有子组件关键词(组件,关键词,精确寻找,从上到下){
    精确寻找=精确寻找||1
    从上到下=从上到下||1
    var childCount=组件.childCount(),临时组件=null
    if(childCount<1){return null}
    if(从上到下==1){
        for(var i=0;i<childCount;i++){
            临时组件=组件.child(i)
            if(精确寻找==1){
                if(临时组件.text()==关键词){return 临时组件}
            }else{
                if(临时组件.text().indexOf(关键词)>-1){return 临时组件}
            }
        }
    }else{
        for(var i=childCount-1;i>=0;i--){
            临时组件=组件.child(i)
            if(精确寻找==1){
                if(临时组件.text()==关键词){return 临时组件}
            }else{
                if(临时组件.text().indexOf(关键词)>-1){return 临时组件}
            }
        }
    }
    return 临时组件
}
/**
 * 组件递归所有子组件.只返回满足条件的第一个组件
 * @param {*} 组件 
 * @param {*} 关键词 
 * @param {*} 精确寻找 默认为1精确寻找,2为模糊寻找
 * @param {*} 从上到下 默认为1从上到下,2为从下到上
 */
function 组件_寻找所有子组件关键词_递归(组件,关键词,精确寻找,从上到下){
    精确寻找=精确寻找||1
    从上到下=从上到下||1
    var 临时组件=null
    // if(childCount<1){return null}
    // 临时组件=组件_寻找所有子组件关键词(组件,关键词,精确寻找,从上到下)
    if(组件==null){return null}
    var childCount=组件.childCount()

    if(从上到下==1){
        for(var i=0;i<childCount;i++){
            临时组件=组件.child(i)
            if(精确寻找==1){
                if(临时组件.text()==关键词){
                    return 临时组件
                }else{
                    组件_寻找所有子组件关键词_递归(临时组件,关键词,精确寻找,从上到下)
                }
            }else{
                if(临时组件.text().indexOf(关键词)>-1){
                    return 临时组件
                }else{
                    组件_寻找所有子组件关键词_递归(临时组件,关键词,精确寻找,从上到下)
                }
            }
        }
    }else{
        for(var i=childCount-1;i>=0;i--){
            临时组件=组件.child(i)
            if(精确寻找==1){
                if(临时组件.text()==关键词){
                    return 临时组件
                }else{
                    组件_寻找所有子组件关键词_递归(临时组件,关键词,精确寻找,从上到下)
                }
            }else{
                if(临时组件.text().indexOf(关键词)>-1){
                    return 临时组件
                }else{
                    组件_寻找所有子组件关键词_递归(临时组件,关键词,精确寻找,从上到下)
                }
            }
        }
    }
    return null
}
/**
 * JS函数返回多个值
 */
function getData()
{
    var info={"name":"oec2003","age":"25"};
    return info;
}
function getInfo()
{
    var info=getData();
    var name=info["name"];
    var age=info["age"];
    alert("姓名："+name+" 年龄："+age);
}
/**
 * 
 * @param {*} 组件 
 * @param {*} 颜色1 "#0E6251"
 * @param {*} 颜色2 "#00FF00"
 */
function 组件_切换背景颜色(组件,颜色1,颜色2){
    // 颜色1=颜色1||"#0E6251"
    // 颜色2=颜色2||"#00FF00"
    // var 颜色 =组件.getBackgroundColor()
    // if(颜色==颜色1){
    //     颜色=颜色2
    // }
    // ui.run(function(){
    //     组件.setBackgroundColor(colors.parseColor(颜色))
    // })
}
function 选择框_切换背景颜色(obj,选中颜色,未选中颜色){
    if(选中颜色==null){选中颜色="#A0522d"}//选中颜色="#013ADF"
    if(未选中颜色==null){未选中颜色="#1A5276"}
    if(obj.checked){
        ui.run(function(){
            obj.setBackgroundColor(colors.parseColor(选中颜色))
        })
    }else{
        ui.run(function(){
            obj.setBackgroundColor(colors.parseColor(未选中颜色))
        })
    }
}
function ocr_字母数字(图片路径,链接) {//易语言服务器通杀识别库+服务端
    图片路径=图片路径||"/sdcard/zhongyuandichanyzm.jpg"//"/sdcard/Pictures/zhongyuandichanyzm.jpg"
    链接=链接||"http://121.4.104.127:5658"
    var 获取 =""
    var thread_局=threads.start(function(){
        获取 = http.postMultipart(链接, {
            "file": open(图片路径),
        });
        
    })
    thread_局.join()
    return 获取.body.string();

    // threads.start(function() {
    //     var res = http.postMultipart(链接, {
    //         "file": open(图片路径),
    //     });
    //     console.log(res.statusCode+","+res.body.string());
    //     // var 返回 = res.body.string();
    //     // res = http.get("http://pic.sogou.com/pic/ocr/ocrOnline.jsp?query=" + 返回);
    //     // 数据 = res.body.string();
    //     // //log(数据);
    //     // const json = JSON.parse(数据)
    //     // 处理 = json.result.map(val => val.content)
    //     // 处理 = 处理.join('\n')

    // });
}

function toasts(text, time) {//toast替代函数
    text = text || null;
    time = time || 5000;
    if (isNaN(time)) return;
    let arr = engines.all(),
        run = false;
    for (i in arr) {
        if (files.getName(arr[i].getSource()) == "toast.js") {
            run = true;
            break;
        }
    }
    if (!run) {
        let tex = "var t = toasts();\nevents.broadcast.on(\"toast\", (arr) => {\nif (arr.length != 2) return;\nlet time = new Number(arr[1][1]),text = arr[1][0];\nif(isNaN(time)) time = 5000;\nif(!text) return;\nt(text, time);});\nsetInterval(() => {}, 10000);\nfunction toasts() {\nvar th = \"\",Y = device.width / 4,X = Y,x = Y * 2;\nvar flo = floaty.rawWindow(\n<frame gravity=\"center\" bg=\"#00000000\">\n<text id=\"message\"  bg=\"#70000000\" textColor=\"#ffffff\" textSize=\"15sp\" gravity=\"center\" w=\"auto\" padding=\"1\"/>\n</frame>);\nflo.setTouchable(false);\nflo.setSize(0, 0);\nreturn doflo;\nfunction doflo(mes, time) {\nmes = \" \" + mes.toString().split(\"\\n\").join(\" \\n \") + \" \";\nif (th != \"\") {\nth.interrupt();\nth = \"\";}\nui.run(function() {\nflo.message.setText(mes);});\nflo.setPosition(X, Y);\nflo.setSize(x, -2);\nth = threads.start(function() {\nsleep(time);\nui.run(function() {\nflo.message.setText(\"\");});\nflo.setSize(0, 0);\nth = \"\";});}}";
        engines.execScript("toast", tex);
        sleep(500);
    }
    events.broadcast.emit("toast", [[engines.myEngine(),[text, time]]]);
}
function 窗口_打开指定页面(包名,页面窗口){
    包名=包名||"com.samsung.android.lool"
    页面窗口=页面窗口||"com.samsung.android.sm.ram.RamActivity2"
    let intent = new Intent();
    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    let componentName = new android.content.ComponentName(包名, 页面窗口);
    intent.setComponent(componentName);
    context.startActivity(intent);
}
/**
 * @param {*} 信息 提示 返回找到的组件或null
 * @param {*} 查找组件表达式  数组 [idEndsWith("button1"),textContains("開"),className("Button")]  idEndsWith("button1").textContains("開").className("Button")
 * @param {*} 点击前延时 默认为1000毫秒 <0的话等待直到找到控件
 * @param {*} 点击后延时 默认为0毫秒
 * @param {*} 点击类型 -1:不点击,0:点击查找到的组件,1:父组件,2:父父组件
 */
function 组件_延时点击(信息,查找组件表达式,点击前延时,点击后延时,点击类型){
    点击前延时=点击前延时||1000
    点击后延时=点击后延时||0
    信息=信息||"信息"
    点击类型=点击类型||0
    if(点击前延时>=0){
        sleep(点击前延时)
    }
    var 组件__临时=null
    if(点击前延时<0){
        组件__临时=查找组件表达式.findOne()
    }else{
        组件__临时=查找组件表达式.findOne(找控件时间)
    }
    if(组件__临时!=null){
        if(点击类型==0){
            组件__临时.click()
        }else if(点击类型==1){
            组件__临时.parent().click()
        }else if(点击类型==2){
            组件__临时.parent().parent().click()
        }else if(点击类型==3){
            组件__临时.parent().parent().parent().click()
        }else{

        }
        
        toastLog2(信息)
    }else{
        toastLog2(信息+"null")
        
    }
    sleep(点击后延时)
    // if(组件__临时!=null){
    //     return true
    // }else{
    //     return false
    // }
    return 组件__临时
}
/**
 * //先上划到最上再慢慢向下滑
 * @param {*} 信息 提示 返回找到的组件或null
 * @param {*} 查找组件表达式  数组 [idEndsWith("button1"),textContains("開"),className("Button")]  idEndsWith("button1").textContains("開").className("Button")
 * @param {*} 点击类型 -1:不点击,0:点击查找到的组件,1:父组件,2:父父组件
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * @param {*} 最大次数 <=0则永久循环
 * @param {*} 间隔时间 
 * @returns 
 */
function 组件_滚动查找(信息,查找组件表达式,点击类型,x1,y1,x2,y2,最大次数,间隔时间){
    信息=信息||"信息"
    点击类型=点击类型||0
    最大次数=最大次数||10
    间隔时间=间隔时间||500
    x1=x1||30
    y1=y1||1500
    x2=x2||20
    y2=y2||500
    var 组件__临时=null,ii=0
    threads.start(function(){//先上划到最上
        swipe(30,500,20,2000,500)
    })
    do {
        if(组件__临时==null){
            组件__临时=组件_延时点击(信息,查找组件表达式,100,0,点击类型)
        }else{
            break
        }       
        threads.start(function(){
            swipe(30,1000,20,300,500)
        })
        sleep(间隔时间)
        if(最大次数>0){
            ii=ii+1
            if(ii>最大次数){
                toastLog("ii>"+最大次数)
                break
            }
        }

    } while (组件__临时==null)
    return 组件__临时
}
//自動滾動 线程_自动滚动  取剩余单数  选择框__五秒延时接  observeNotification

// var 当前服务器线路="http://103.210.238.136:86/api.php?",当前服务器=dialogs.singleChoice("請選擇服務器",服务器数组 ,0)//UserApi
// var 调用码_单码用户登录="7a68bdb395ac0569",调用码_取到期时间="40054a445d3ba087",调用码_退出登录="c17af83c9317695d"
// var 调用码_设置用户数据="a5f1fea72aeb30eb",调用码_获取用户数据="a5e04dd91995e53e"
// var 软件id="10017",当前版本=1,软件信息数组=超级_get_取软件信息().split("<|>")//,现行时间戳=时间_取现行时间戳()//10207



