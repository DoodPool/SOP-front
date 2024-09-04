import { monsterService } from "../services/monster.service.local.js";
import { store } from './store.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { ADD_MONSTER, REMOVE_MONSTER, SET_MONSTERS, UNDO_REMOVE_MONSTER, UPDATE_MONSTER } from "./monster.reducer.js";

// Action Creators:
export function getActionRemoveMonster(monsterId) {
    return {
        type: REMOVE_MONSTER,
        monsterId
    }
}
export function getActionAddMonster(monster) {
    return {
        type: ADD_MONSTER,
        monster
    }
}
export function getActionUpdateMonster(monster) {
    return {
        type: UPDATE_MONSTER,
        monster
    }
}

export async function loadMonsters() {
    try {
        const monsters = await monsterService.query()
        console.log('Monsters from DB:', monsters)
        store.dispatch({
            type: SET_MONSTERS,
            monsters
        })

    } catch (err) {
        console.log('Cannot load monsters', err)
        throw err
    }

}

export async function removeMonster(monsterId) {
    try {
        await monsterService.remove(monsterId)
        store.dispatch(getActionRemoveMonster(monsterId))
    } catch (err) {
        console.log('Cannot remove monster', err)
        throw err
    }
}

export async function addMonster(monster) {
    try {
        const savedMonster = await monsterService.save(monster)
        console.log('Added Monster', savedMonster)
        store.dispatch(getActionAddMonster(savedMonster))
        return savedMonster
    } catch (err) {
        console.log('Cannot add monster', err)
        throw err
    }
}

export async function updateMonster(monster) {
    try {
        const savedMonster = await monsterService.save(monster)
        console.log('Updated Monster:', savedMonster)
        store.dispatch(getActionUpdateMonster(savedMonster))
        return savedMonster
    } catch (err) {
        console.log('Cannot save monster', err)
        throw err
    }
}
