import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '@/store/types'

const state = {
  count: 0
}

const getters = {
  getCount: state => state.count
}

const actions = {
  [COUNTER_INCREMENT] ({state, commit}) {
    commit(COUNTER_INCREMENT)
  },
  [COUNTER_DECREMENT] ({state, commit}) {
    commit(COUNTER_DECREMENT)
  }
}

const mutations = {
  [COUNTER_INCREMENT]: (state) => {
    const obj = state
    obj.count += 1
  },
  [COUNTER_DECREMENT]: (state) => {
    const obj = state
    obj.count -= 1
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
