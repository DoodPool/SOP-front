
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

async function query(filterBy = { choice: '' }) {
    var monsters = await storageService.query(STORAGE_KEY)
    if (filterBy.choice === 'smash') {
        const regex = new RegExp(filterBy.choice, 'i')
        monsters = monsters.filter(monster => regex.test(monster.sopChoice))
    }
    if (filterBy.choice === 'pass') {
        const regex = new RegExp(filterBy.choice, 'i')
        monsters = monsters.filter(monster => regex.test(monster.sopChoice))
    }
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
            {
                id: '110',
                name: 'Paolumu',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012959/MH-sop/MHW/xwj2uah4qeh1kyafcju3.webp',
                sopChoice: null,
            },
            {
                id: '111',
                name: 'Great Girros',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012959/MH-sop/MHW/ajmmnki2rjdp6jduakvf.webp',
                sopChoice: null,
            },
            {
                id: '112',
                name: 'Radobaan',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012992/MH-sop/MHW/dfxs6j3f8sgj3gmsvcon.webp',
                sopChoice: null,
            },
            {
                id: '113',
                name: 'Legiana',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012992/MH-sop/MHW/ins0iicuvnnw1lpyzt1h.webp',
                sopChoice: null,
            },
            {
                id: '114',
                name: 'Odogaron',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012959/MH-sop/MHW/igetqzbnkpiodoxxcez6.webp',
                sopChoice: null,
            },
            {
                id: '115',
                name: 'Rathalos',
                game: 'MHW',
                // iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013108/MH-sop/MHW/piulpaqwogwq29azog36.png',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1730646492/MH-sop/MHW/zvfmfyc6ad1oaixopqjl.webp',
                sopChoice: null,
            },
            {
                id: '116',
                name: 'Diablos',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012985/MH-sop/MHW/a95a9ltfpcdpyl80cp0l.png',
                sopChoice: null,
            },
            {
                id: '117',
                name: 'Zorah Magdaros',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012987/MH-sop/MHW/han2ifs5llurldmefstx.webp',
                sopChoice: null,
            },
            {
                id: '118',
                name: 'Dodogama',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012993/MH-sop/MHW/lamsoxlxtrqcannr5lym.webp',
                sopChoice: null,
            },
            {
                id: '119',
                name: 'Lavasioth',
                game: 'MHW',
                // iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012959/MH-sop/MHW/hnjqaeimmvihyustejmr.webp',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1730646480/MH-sop/MHW/nfixvrk5x908dcilkq5m.png',
                sopChoice: null,
            },
            {
                id: '120',
                name: 'Uragaan',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013096/MH-sop/MHW/e65iyogx4li7xvpkv46b.png',
                sopChoice: null,
            },
            {
                id: '121',
                name: 'Azure Rathalos',
                game: 'MHW',
                // iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012991/MH-sop/MHW/syajr0imtuonbxgnryv3.webp',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1730646491/MH-sop/MHW/cwovnyg7m2w7r88sceqv.webp',
                sopChoice: null,
            },
            {
                id: '122',
                name: 'Bazelgeuse',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013096/MH-sop/MHW/ew4jkytjm65lyddlyyhp.webp',
                sopChoice: null,
            },
            {
                id: '123',
                name: 'Black Diablos',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012985/MH-sop/MHW/qvdvhfaarinmu8x6ss8h.webp',
                sopChoice: null,
            },
            {
                id: '124',
                name: 'Kirin',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012960/MH-sop/MHW/s9pj3hws45aefz1vcuae.png',
                sopChoice: null,
            },
            {
                id: '125',
                name: 'Nergigante',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012991/MH-sop/MHW/uqn7ozpidh2udaoqmytt.webp',
                sopChoice: null,
            },
            {
                id: '126',
                name: 'Teostra',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012958/MH-sop/MHW/cnht7gq7yk82l9shmrig.webp',
                sopChoice: null,
            },
            {
                id: '127',
                name: 'Kushala Daora',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012958/MH-sop/MHW/a5fqdohov5kukeb8fgw2.webp',
                sopChoice: null,
            },
            {
                id: '128',
                name: 'Deviljho',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012992/MH-sop/MHW/xi3exxjsyaesds2katbe.webp',
                sopChoice: null,
            },
            {
                id: '129',
                name: 'Pink Rathian',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012959/MH-sop/MHW/uoae27fcmi9kjqiihzhd.webp',
                sopChoice: null,
            },
            {
                id: '130',
                name: 'Vaal Hazak',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012960/MH-sop/MHW/e0okpjmv1wzhazqv9erg.webp',
                sopChoice: null,
            },
            {
                id: '131',
                name: `Xeno'jiiva`,
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012989/MH-sop/MHW/ql1bqgaq6sisaiejifdu.webp',
                sopChoice: null,
            },
            {
                id: '132',
                name: 'Kulve Taroth',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012991/MH-sop/MHW/nw0w0kkxnivbhqijc5up.webp',
                sopChoice: null,
            },
            {
                id: '133',
                name: 'Lunastra',
                game: 'MHW',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012958/MH-sop/MHW/hurdiyanvildk2aygitw.webp',
                sopChoice: null,
            },
            {
                id: '134',
                name: 'Beotodus',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013105/MH-sop/MHW/pl2u9o6bkbvou1wvbzgb.png',
                sopChoice: null,
            },
            {
                id: '135',
                name: 'Banbaro',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013098/MH-sop/MHW/js3ygwa18st2k1qiklog.webp',
                sopChoice: null,
            },
            {
                id: '136',
                name: 'Viper Tobi-Kadachi',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012984/MH-sop/MHW/mepvmk3qprbtnsmajsqh.webp',
                sopChoice: null,
            },
            {
                id: '137',
                name: 'Nightshade Paolumu',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012982/MH-sop/MHW/ormtuuju8p5wkvdsymwh.webp',
                sopChoice: null,
            },
            {
                id: '138',
                name: 'Coral Pukei-Pukei',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012988/MH-sop/MHW/kvcgqe0ytrvehvzuhveo.webp',
                sopChoice: null,
            },
            {
                id: '139',
                name: 'Barioth',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013118/MH-sop/MHW/qxhqiwafpajl3ynra4te.png',
                sopChoice: null,
            },
            {
                id: '140',
                name: 'Nargacuga',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013100/MH-sop/MHW/m0apuqaxytkfjxmd2fhu.webp',
                sopChoice: null,
            },
            {
                id: '141',
                name: 'Glavenus',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013106/MH-sop/MHW/twt3qlrbcuyxwibbugyr.png',
                sopChoice: null,
            },
            {
                id: '142',
                name: 'Tigrex',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012990/MH-sop/MHW/nkyitdngi02celljcvz5.webp',
                sopChoice: null,
            },
            {
                id: '143',
                name: 'Brachydios',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013050/MH-sop/MHW/erzjrkdaefkbjukqgolr.png',
                sopChoice: null,
            },
            {
                id: '144',
                name: 'Shrieking Legiana',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013093/MH-sop/MHW/vfotqevi29eqv7ts3dcr.webp',
                sopChoice: null,
            },
            {
                id: '145',
                name: 'Fulgur Anjanath',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013111/MH-sop/MHW/avv2gvg2vmrbhdlv1gip.png',
                sopChoice: null,
            },
            {
                id: '146',
                name: 'Acidic Glavenus',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012991/MH-sop/MHW/tww0z09k0sjexnlixjci.webp',
                sopChoice: null,
            },
            {
                id: '147',
                name: 'Ebony Odogaron',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013117/MH-sop/MHW/dys7ts7xsowcep1firbp.png',
                sopChoice: null,
            },
            {
                id: '148',
                name: 'Velkhana',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013092/MH-sop/MHW/sxdsqmm1r6b1ebklte6i.webp',
                sopChoice: null,
            },
            {
                id: '149',
                name: 'Seething Bazelgeuse',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012986/MH-sop/MHW/qd5hrkgavfe1p53w9xdj.webp',
                sopChoice: null,
            },
            {
                id: '150',
                name: 'Blackveil Vaal Hazak',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013093/MH-sop/MHW/wbxoqdnz9uqbbmvovbyr.webp',
                sopChoice: null,
            },
            {
                id: '151',
                name: 'Namielle',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013111/MH-sop/MHW/dgvkqv9lv40l7xagpd7g.png',
                sopChoice: null,
            },
            {
                id: '152',
                name: 'Savage Deviljho',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012987/MH-sop/MHW/xqtj3bhkjy1t4ndh1hkm.webp',
                sopChoice: null,
            },
            {
                id: '153',
                name: 'Ruiner Nergigante',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013096/MH-sop/MHW/r31t3rww9190fqs5mfiv.webp',
                sopChoice: null,
            },
            {
                id: '154',
                name: 'Shara Ishvalda',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012982/MH-sop/MHW/jumeo5htrodaj4anw9c7.webp',
                sopChoice: null,
            },
            {
                id: '155',
                name: 'Zinogre',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013095/MH-sop/MHW/ysg6owsche05rzullon6.webp',
                sopChoice: null,
            },
            {
                id: '156',
                name: 'Yian Garuga',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013102/MH-sop/MHW/pttqnio2fsxct7yeqty5.png',
                sopChoice: null,
            },
            {
                id: '157',
                name: 'Scarred Yian Garuga',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012984/MH-sop/MHW/fus12po6ljztznvn4jzo.webp',
                sopChoice: null,
            },
            {
                id: '158',
                name: 'Silver Rathalos',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012990/MH-sop/MHW/teqzantue7ajglld8u2q.webp',
                sopChoice: null,
            },
            {
                id: '159',
                name: 'Gold Rathian',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012982/MH-sop/MHW/cncrjjcdruhimlhltxeq.webp',
                sopChoice: null,
            },
            {
                id: '160',
                name: 'Brute Tigrex',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012988/MH-sop/MHW/qnjiye9lat4fw4sjaock.webp',
                sopChoice: null,
            },
            {
                id: '161',
                name: 'Frostfang Barioth',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012987/MH-sop/MHW/d4o8asprcohsdbko0qdy.png',
                sopChoice: null,
            },
            {
                id: '162',
                name: 'Stygian Zinogre',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012958/MH-sop/MHW/npldbxftkoavh6b5xuos.webp',
                sopChoice: null,
            },
            {
                id: '163',
                name: 'Rajang',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012989/MH-sop/MHW/te6uj5mjpgng3lrp4szu.webp',
                sopChoice: null,
            },
            {
                id: '164',
                name: 'Furious Rajang',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012982/MH-sop/MHW/vlh2zp3xpnsf45a1xozp.webp',
                sopChoice: null,
            },
            {
                id: '165',
                name: 'Raging Brachydios',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013081/MH-sop/MHW/cireabuabscxdunlf7r7.webp',
                sopChoice: null,
            },
            {
                id: '166',
                name: `Safi'jiiva`,
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729012988/MH-sop/MHW/d0jptyvj9jsny8m6ogiu.webp',
                sopChoice: null,
            },
            {
                id: '167',
                name: 'Alatreon',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013098/MH-sop/MHW/qzspeltnqeob5ggywgp7.webp',
                sopChoice: null,
            },
            {
                id: '168',
                name: 'Fatalis',
                game: 'MHWIB',
                iconImg: 'https://res.cloudinary.com/dlnkzbe0y/image/upload/v1729013108/MH-sop/MHW/u5mfrqkpcbtqqwiunvp6.png',
                sopChoice: null,
            },
        ]
        utilService.saveToStorage(STORAGE_KEY, monsters)
    }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))
