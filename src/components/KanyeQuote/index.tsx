import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getKanyeQuote, kanyeQuoteSelector } from '../../features/kanye';

export function KanyeQuote() {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(kanyeQuoteSelector);

  return (
    <div
      style={{
        border: '2px solid #444',
        padding: 15,
        borderRadius: 3,
        width: '50%',
      }}
    >
      <h1>Generate random Kanye West quote</h1>
      {pending && <p>Loading...</p>}
      {data && <p>{data.quote}</p>}
      {error && <p>Oops, something went wrong</p>}
      <button onClick={() => dispatch(getKanyeQuote())} disabled={pending}>
        Generate Kanye Quote
      </button>
    </div>
  );
}
