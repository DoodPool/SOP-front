import { store } from "./store"
import { TOGGLE_MENU } from "./system.reducer"


export function toggleMenu(toggle) {
    try {
        store.dispatch({
            type: TOGGLE_MENU,
            toggle
        })

    } catch (err) {
        console.log('Cannot toggle menu', err)
        throw err
    }
}