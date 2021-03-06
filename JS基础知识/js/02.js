/* 
    每一个字符串都是由零到多个字符串组成的
    str.length  字符串长度
    str[0] 获取索引为零（第一个）的字符
    str[str.length-1] 获取最后一个字符，str.length-1是最后一项的索引
    str[100000] undefined 不存在这个索引
    获取每一个字符应该使用“循环”
*/
let a = 12;
console.log(a.toString()); //=>'12'
console.log((NaN).toString()); //=>'NaN'

// null和undefined是禁止直接toString的
// (null).toString() //=>报错
//但是和undefined一样转换为字符串的结果就是 'null'/'undefined'  

//普通对象.toString()结果是"[object object]"
//Object.prototype.toString()方法不是转换为字符串的，而是用来检测数据类型的。
//({name:'XXX'}).toString() =>"[object Object]"


//字符串拼接
// 四则运算法则中，除加法之外，其余都是数学计算，只有加法可能存在字符串拼接（一旦遇到字符串，则不是数学运算，而是字符串拼接）
console.log('10' + 10);
console.log('10' - 10);
console.log('10px' - 10);

let b = 10 + null + true + [] + undefined + '珠峰' + null + [] + 10 + false;
/**
 * 10 + null -> 10 + 0 -> 10
 * 10 + true -> 10 + 1 -> 11
 * 11 + [] -> 11 + '' -> '11' 空数组变为数字，先要经历变为空字符串，遇到字符串，啥都不管，直接就是字符串拼接。
 * '11' + undefined -> '11undefined'
 * ...
 * '11undefined珠峰null10false'
 */
console.log(b);

/* 2021年7月11日记录 */
