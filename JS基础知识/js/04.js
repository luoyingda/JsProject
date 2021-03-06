let person = {
    name: '罗英达',
    age: '24',
    height: '178',
    weight: '80kg',
    1: 100

};
//获取属性名对应的属性值
//=>1-对象.属性名
//=>2-对象['属性名'] 属性名是数字或者字符串格式的
//如果当前的属性名不存在，默认的属性值是undefined
//如果属性是数字，则不能使用.的方式获取属性值
console.log(person.name);
console.log(person['age']);
console.log(person.sex); //undefined
console.log(person[1]);
// console.log(person.1); //=>SyntaxError:语法错误

//设置属性名属性值
//属性名不能重复，如果属性名已经存在，不属于新增属于修改属性值
person.GF = '圆圆';
person.age = '23';
console.log(person['GF']);
console.log(person['age']);

//删除属性
//=>真删除:把属性彻底干掉
delete person[1];
//=>假删除：属性还在，值为空
person.weight = null;
console.log(person.weight);

//==================数组========================
/*
 * 数组是特殊的对象
 *  1.我们中括号中设置得是属性值，它的属性名是默认生成的数字，从零开始递增，而且这个数字代表每一项的位置，我们把其称为“索引”=>从零开始，连续递增，代表每一项位置的数字属性名
 *  2.天生默认一个属性名length，存储数组的长度
 */
let ary = [12, 'hah', true, 13];
console.log(ary);
console.log(ary.length);
console.log(ary['length']);
console.log(ary[1]);
// 第一项索引0 最后一项索引 ary.length-1
console.log(ary[0]);
console.log(ary[ary.length-1]);
//向数组末尾追加内容
ary[ary.length]=100;
console.log(ary);