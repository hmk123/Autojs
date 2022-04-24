'ui';
let mPackage = 'qq'
let packageName = context.getPackageName()
/* if (packageName.indexOf(mPackage) == -1) { 
	toastLog('请联系作者QQ：1059136269')
	exit()
} */


toast('下载..')

http.__okhttp__.setTimeout(10000)
threads.start(function () {
	let url ='http://192.168.199.231:3000/jb'
	let res = http.get(url)
 
	if (res.statusCode != 200) {
		log(res.statusCode)
		toast('下载失败')
		exit()
    
	}
	let codeStr = res.body.string()
//	engines.execScript(scriptName, codeStr)
//	engines.myEngine().forceStop()

engines.execScript("js", codeStr)
})
toast('云更运行结束')
