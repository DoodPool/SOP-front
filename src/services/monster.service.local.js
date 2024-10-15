
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'monster'

export const monsterService = {
    query,
    getById,
    save,
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
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012959/MH-sop/MHW/l6hgp3tzi1muh5lgdkry.webp',
                sopChoice: null,
            },
            {
                id: '102',
                name: 'Anjanath',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013095/MH-sop/MHW/xvplkxyiyi0df1cnpy1u.webp',
                sopChoice: null,
            },
            {
                id: '103',
                name: 'Barroth',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012984/MH-sop/MHW/mhfb8eyzlqbetgh7q1ha.webp',
                sopChoice: null,
            },
            {
                id: '104',
                name: 'Kulu-Ya-Ku',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013101/MH-sop/MHW/a9urlr2mgt9jyinhwy4b.webp',
                sopChoice: null,
            },
            {
                id: '105',
                name: 'Pukei-Pukei',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012909/MH-sop/MHW/kxq6owy7fxmssiwax2co.webp',
                sopChoice: null,
            },
            {
                id: '106',
                name: 'Jyuratodus',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012986/MH-sop/MHW/fotvajqg5mkfh5msvwcy.webp',
                sopChoice: null,
            },
            {
                id: '107',
                name: 'Tobi-Kadachi',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012982/MH-sop/MHW/v8wrua6tddxrbqahkxrv.webp',
                sopChoice: null,
            },
            {
                id: '108',
                name: 'Rathian',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012988/MH-sop/MHW/jyx3lj72rbdidruvxi18.png',
                sopChoice: null,
            },
            {
                id: '109',
                name: 'Tzitzi-Ya-Ku',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012992/MH-sop/MHW/jasexq3m2achvcwvfc6t.webp',
                sopChoice: null,
            },
        ]
        utilService.saveToStorage(STORAGE_KEY, monsters)
    }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))
