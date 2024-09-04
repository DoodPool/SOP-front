
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'monster'

export const monsterService = {
    query,
    getById,
    save,
    remove,
}
window.cs = monsterService

_createMonsters()

async function query(filterBy = { txt: '', price: 0 }) {
    var monsters = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     monsters = monsters.filter(monster => regex.test(monster.vendor) || regex.test(monster.description))
    // }
    // if (filterBy.price) {
    //     monsters = monsters.filter(monster => monster.price <= filterBy.price)
    // }
    return monsters
}

function getById(monsterId) {
    return storageService.get(STORAGE_KEY, monsterId)
}

async function remove(monsterId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, monsterId)
}

async function save(monster) {
    var savedMonster
    if (monster.id) {
        savedMonster = await storageService.put(STORAGE_KEY, monster)
    } else {
        savedMonster = await storageService.post(STORAGE_KEY, monster)
    }
    return savedMonster
}

function _createMonsters() {
    let monsters = utilService.loadFromStorage(STORAGE_KEY)
    if (!monsters || !monsters.length) {
        const monsters = [
            {
                id: '101',
                name: 'Great Jagras',
                game: 'MHW',
                iconImg: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-great_jagras_icon.png',
                sopChoice: null,
            },
            {
                id: '102',
                name: 'Anjanath',
                game: 'MHW',
                iconImg: 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-anjanath_icon.png',
                sopChoice: null,
            },
            {
                id: '103',
                name: 'Barroth',
                game: 'MHW',
                iconImg: 'https:    //monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/MHW-Barroth_Icon.png',
                sopChoice: null,
            },
        ]
        utilService.saveToStorage(STORAGE_KEY, monsters)
    }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))
