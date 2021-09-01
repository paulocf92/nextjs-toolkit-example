export function Counter() {
  return (
    <div style={{ border: '2px solid #444', padding: 15, borderRadius: 3, width: '50%', marginBottom: 20}}>
      <h1>Welcome to the awesome counter app!</h1>
      <h2>The current number is 0</h2>

      <input type="text" name="increaseBy" id="increaseBy" />
      <button type="button">Increment by amount</button>
      <div>
        <button type="button">Decrement by 1</button>
        <button type="button">Increment by 1</button>
      </div>
    </div>
  )
}
