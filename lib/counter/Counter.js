import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    increment,
    decrement,
    incrementAsync,
    incrementByAmount,
    selectCount,
} from './counterSlice'

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [ incrementAmount, setIncrementAmount ] = useState('2');

    return (
        <div>
            <button class="border-2 border-gray-900 p-3" onClick={() => dispatch(increment())}>+</button>
            <button class="border-2 border-gray-900 p-3" onClick={() => dispatch(decrement())}>-</button>
            <span class="border-2 border-violet-600 p-4 text-2xl">{count}</span>
            <input value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}/>
            <button class="border-2 border-gray-900 p-3" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
            <button onClick={() => dispatch(incrementAsync(Number(incrementAmount)))}>Add Async</button>
        </div>
    )
}

export default Counter;

