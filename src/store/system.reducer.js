export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const TOGGLE_MENU = 'TOGGLE_MENU'


const initialState = {
  isLoading: false,
  isMenuOpen: false,
};

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: action.toggle }
    default: return state
  }
}
