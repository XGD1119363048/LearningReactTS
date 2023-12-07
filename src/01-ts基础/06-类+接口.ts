
interface IFunc {
  getName: () => string,
  getAge: () => number
}

class A implements IFunc {
  getAge() {
    return 100
  }
  a1() {}

  a2() {}

  getName() {
    return 'AAA'
  }
}

class B implements IFunc {
  getAge() {
    return 100
  }
  b1() {}

  b2() {}

  getName() {
    return 'BBB'
  }
}

class C implements IFunc {
  getAge() {
    return 100
  }
  getName() {
    return 'CCC'
  }
}

function init(obj: IFunc) {
  obj.getName()
  obj.getAge()
}
var objA = new A()
var objB = new B()
var objC = new C()

init(objA)
init(objB)
init(objC)


export default {}