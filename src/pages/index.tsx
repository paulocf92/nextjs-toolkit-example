import { useAppSelector } from '../app/hooks';
import { selectCount } from '../features/counter/counterSlice';

import { Counter } from '../components/Counter';
import { KanyeQuote } from '../components/KanyeQuote';

export default function Home() {
  const count = useAppSelector(selectCount);

  return (
    <>
      <Counter />
      <span
        style={{
          display: 'block',
          padding: '10px 0',
          color: '#3377ff',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
        }}
      >
        Relaying count from Home: {count}
      </span>
      <KanyeQuote />
    </>
  );
}
