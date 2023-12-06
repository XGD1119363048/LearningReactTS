var list: string[] = ['1', '2', '3']
// for(var i in list) {
//   list[i].substring(0, 1)
// }
list.push('4')

var list2: number[] = [1, 2, 3]
list2.push(4)

var list3: (string | number)[]  = [1, '2', 3]
list3.push('4')
list3.push(5)

// ----------------------------------
// 泛型写法
var mylist1: Array<string> = ['aa', 'bb', 'cc']
mylist1.push('dd')

var mylist2: Array<string|number> = ['aa', 'bb', 'cc', 1]
mylist2.push(2)

export default {}