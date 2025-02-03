import { useSelector } from 'react-redux'

export function SopCounter({ isMediumLayout }) {
    const { smash, pass } = useSelector(storeState => storeState.monsterModule.sopCount)

    return (
        <div className='counter-container'>
            {!isMediumLayout && <h2>Counter:</h2>}
            <h4>Smash<span>: {smash}</span></h4>
            <h4>Pass<span>: {pass}</span></h4>
        </div>
    )
}