/* Taken from https://link.medium.com/qQRJEwQdHT */

const loadingReducer = (state = {}, action) => {
  const { type } = action
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE|RESET)/.exec(type)

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state

  const [, requestName, requestState] = matches
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    // e.g. will be true when receiving GET_TODOS_REQUEST
    //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
    [requestName]: requestState,
  }
}

/* Return true only when all actions are no longer loading */
export const createLoadingSelector = actions => state =>
  actions.some(action => state.loading[action] === 'REQUEST')

/* Return true only when all actions are successful */
export const createSuccessSelector = actions => state =>
  actions.every(action => state.loading[action] === 'SUCCESS')

/* Return true only when any action has failed */
export const createFailureSelector = actions => state =>
  actions.some(action => state.loading[action] === 'FAILURE')

export default loadingReducer
