import { TEST_GET } from '@/store/types'
import { getTestData } from '@/utils/api'
const state = {
  test: ''
}

const getters = {
  getTest: state => state.test
}

const actions = {
  async [TEST_GET] ({state, commit}) {
    let result = await getTestData()
    commit(TEST_GET, result)
  }
}

const mutations = {
  [TEST_GET]: (state, res) => {
    state.test = res
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
