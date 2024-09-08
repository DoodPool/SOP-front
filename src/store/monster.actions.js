import { monsterService } from "../services/monster.service.local.js";
import { store } from './store.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { ADD_MONSTER, SET_SOP_COUNT, SET_MONSTERS, UPDATE_MONSTER, UPDATE_SOP_COUNT } from "./monster.reducer.js";

// Action Creators:
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

export async function loadCount() {
    try {
        let sopCount = {
            smash: 0,
            pass: 0,
        }

        const monsters = await monsterService.query()
        monsters.forEach(monster => {
            if (monster.sopChoice === 'smash') sopCount.smash++
            if (monster.sopChoice === 'pass') sopCount.pass++
        })

        store.dispatch({
            type: SET_SOP_COUNT,
            sopCount
        })

    } catch (err) {
        console.log('cannot load monsters', err);
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
