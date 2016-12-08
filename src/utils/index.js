export const reduce = actions => (state, action) => {
  try {
    return actions[action.type](state, action)
  } catch (e) {
    return state
  }
}
