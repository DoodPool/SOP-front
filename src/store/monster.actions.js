import { monsterService } from "../services/monster.service.local.js";
import { store } from './store.js'
import { SET_SOP_COUNT, SET_MONSTERS, UPDATE_MONSTER, SET_CURR_MONSTER, SET_SMASH_LIST, SET_PASS_LIST } from "./monster.reducer.js";

export function getActionUpdateMonster(monster) {
    return {
        type: UPDATE_MONSTER,
        monster
    }
}

export async function loadMonsters() {
    try {
        const monsters = await monsterService.query()
        // console.log('Monsters from DB:', monsters)
        store.dispatch({
            type: SET_MONSTERS,
            monsters
        })

    } catch (err) {
        console.log('Cannot load monsters', err)
        throw err
    }
}

export async function setCurrMonster(id) {
    try {
        const currMonster = await monsterService.getById(id)
        store.dispatch({
            type: SET_CURR_MONSTER,
            currMonster
        })
    } catch (err) {
        console.log('Cannot load curr monster', err)
        throw err
    }
}

export async function loadSopList() {
    try {
        const smashList = await monsterService.query({ choice: 'smash' })
        // console.log('Smash from DB:', smashList)
        store.dispatch({
            type: SET_SMASH_LIST,
            smashList
        })

        const passList = await monsterService.query({ choice: 'pass' })
        // console.log('Smash from DB:', passList)
        store.dispatch({
            type: SET_PASS_LIST,
            passList
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
        console.log('cannot load counter', err)
    }
}

export function onResetMonsters(ev) {
    ev.stopPropagation()
    monsterService.resetMonsters()
}

export async function updateMonster(monster) {
    try {
        const savedMonster = await monsterService.save(monster)
        store.dispatch(getActionUpdateMonster(savedMonster))
        return savedMonster
    } catch (err) {
        console.log('Cannot save monster', err)
        throw err
    }
}
