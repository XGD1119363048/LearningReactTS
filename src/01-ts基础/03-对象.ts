interface IObj {
  name: string,
  age: number,
  location?: string, // 可选属性
  [propName: string]: any // 剩下的其他属性（类型任意，key任意）
}
var obj1: IObj = {
  name: 'xgd',
  age: 100,
  location: '上海',
  grade: '7.7',
  isPresale: true,
  isSale: false,
  item: {name: '4D', type: 13}
}
console.log(obj1.name.substring(1, 2))
console.log(obj1.location)

export default {}