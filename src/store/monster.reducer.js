export const SET_MONSTERS = 'SET_MONSTERS'
export const SET_SOP_COUNT = 'SET_SOP_COUNT'
export const SET_SMASH_LIST = 'SET_SMASH_LIST'
export const SET_PASS_LIST = 'SET_PASS_LIST'

export const ADD_MONSTER = 'ADD_MONSTER'
export const UPDATE_MONSTER = 'UPDATE_MONSTER'
export const UPDATE_SOP_COUNT = 'UPDATE_SOP_COUNT'

const initialState = {
    monsters: [],
    smashList: [],
    passList: [],
    sopCount: {
        smash: 3,
        pass: 0,
    },
}

export function monsterReducer(state = initialState, action) {
    var newState = state
    var monsters
    var sopCount
    switch (action.type) {
        case SET_MONSTERS:
            newState = { ...state, monsters: action.monsters }
            break
        case SET_SMASH_LIST:
            newState = { ...state, smashList: action.smashList }
            break
        case SET_PASS_LIST:
            newState = { ...state, passList: action.passList }
            break
        case SET_SOP_COUNT:
            newState = { ...state, sopCount: action.sopCount }
            break
        case ADD_MONSTER:
            newState = { ...state, monsters: [...state.monsters, action.monster] }
            break
        case UPDATE_MONSTER:
            monsters = state.monsters.map(monster => (monster.id === action.monster.id) ? action.monster : monster)
            newState = { ...state, monsters }
            break
        // case UPDATE_SOP_COUNT:
        //     sopCount = state.sopCount.map(monster => (monster.id === action.monster.id) ? action.monster : monster)
        //     newState = { ...state, monsters }
        //     break
        default:
    }
    return newState
}
