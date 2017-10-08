/*
* @Author: DELL-PC
* @Date:   2017-09-19 16:08:30
* @Last Modified by:   DELL-PC
* @Last Modified time: 2017-09-19 17:55:33
*/
function getClass(classname){
	if(document.getElementsByClassName){
		return document.getElementsByClassName(classname);
	}else{
		var newarr = [];
		var all = document.getElementsByTagName('*');
		for(var i=0;i<all.length;i++){
		   	if(checkClass(all[i].className,classname)){
		   		newarr.push(all[i]);
		   	}
		}
		return newarr;
	}
}
/*
checkClass(className,classname)
className 里面是否包含 classname
className 'box box1 box2'
classname 'box'
 */
function checkClass(className,classname){
	var arr = className.split(' ');
	for(var i=0;i<arr.length;i++){
		if(arr[i] == classname){
			return ture;
		}
	}
	return false;
}
/*
 
 */
function $(select,ranger){
	ranger = ranger || document;
	var first = select.charAt(0);
	if(first =='.'){
		// class
		return getClass(select.substring(1),ranger);
	}else if(first=='#'){
		// id
		return document.getElementById(select.substring(1));
	}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
        // tag
        return ranger.getElementsByTagName(select);
	}
}