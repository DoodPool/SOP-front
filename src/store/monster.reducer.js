export const SET_MONSTERS = 'SET_MONSTERS'
export const REMOVE_MONSTER = 'REMOVE_MONSTER'
export const ADD_MONSTER = 'ADD_MONSTER'
export const UPDATE_MONSTER = 'UPDATE_MONSTER'
export const UNDO_REMOVE_MONSTER = 'UNDO_REMOVE_MONSTER'

const initialState = {
    monsters: [],
    lastRemovedMonster: null
}

export function monsterReducer(state = initialState, action) {
    var newState = state
    var monsters
    switch (action.type) {
        case SET_MONSTERS:
            newState = { ...state, monsters: action.monsters }
            break
        case REMOVE_MONSTER:
            const lastRemovedMonster = state.monsters.find(monster => monster._id === action.monsterId)
            monsters = state.monsters.filter(monster => monster._id !== action.monsterId)
            newState = { ...state, monsters, lastRemovedMonster }
            break
        case ADD_MONSTER:
            newState = { ...state, monsters: [...state.monsters, action.monster] }
            break
        case UPDATE_MONSTER:
            monsters = state.monsters.map(monster => (monster._id === action.monster._id) ? action.monster : monster)
            newState = { ...state, monsters }
            break
        case UNDO_REMOVE_MONSTER:
            if (state.lastRemovedMonster) {
                newState = { ...state, monsters: [...state.monsters, state.lastRemovedMonster], lastRemovedMonster: null }
            }
            break
        default:
    }
    return newState
}
