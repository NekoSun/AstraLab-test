export default {
  actions: {
    async getUser({ commit }, items = []) {
      const item = items
      console.log('getUser', item)
      commit('getUser', item)
    }
  },
  mutations: {
    getUser(state, data) {
      state.data = data
    }
  },
  state: {
    data: [],
  },
  getters: {
    User(state) {
      return state.data
    }
  },
}
