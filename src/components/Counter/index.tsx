import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../../features/counter';

export function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <div
      style={{
        border: '2px solid #444',
        padding: 15,
        borderRadius: 3,
        width: '50%',
        marginBottom: 20,
      }}
    >
      <h1>Welcome to the awesome counter app!</h1>
      <h2>The current number is {count}</h2>

      <div>
        <input
          value={incrementAmount}
          onChange={e => setIncrementAmount(Number(e.target.value))}
          type='number'
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </div>
  );
}
