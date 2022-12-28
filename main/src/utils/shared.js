import store from "../store";

class Shared {
  getNum () {
    const num = store.state.global.num
    return num
  }
  setNum (num) {
    store.dispatch('global/setNum', num)
  }
  getMessage () {
    const message = store.state.global.message
    return message
  }
  setMessage (message) {
    store.dispatch('global/setMessage', message)
  }
  getList () {
    const list = store.state.global.list
    return list
  }
  addList (item) {
    store.dispatch('global/addList', item)
  }
  getObj () {
    const obj = store.state.global.obj
    return obj
  }
  setObj (obj) {
    store.dispatch('global/setObj', obj)
  }
}

const shared = new Shared()
export default shared