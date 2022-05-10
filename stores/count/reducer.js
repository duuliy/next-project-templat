const initState = {
  number: 0,
  number2: 222,
  data: []
}

const reducers = {
  add(state, action) {
    state.number+=1
  },
  reduce(state, action) {
    state.number -= 1
  },
  reduce2(state, action) {
    state.number2 = action.number2
  },
  getData(state, action) {
    state.data = action.data
  },
}


export default{
  namespace: 'count',
  initState,
  reducers
}
