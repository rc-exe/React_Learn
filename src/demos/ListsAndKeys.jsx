import { useState } from 'react'

const initialItems = [
  { id: 'a', name: 'Apple' },
  { id: 'b', name: 'Banana' },
  { id: 'c', name: 'Cherry' },
]

export function ListsAndKeysDemo() {
  const [items, setItems] = useState(initialItems)

  const remove = (id) => setItems(items.filter(item => item.id !== id))

  return (
    <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
      {items.map(item => (
        <li key={item.id} style={{ marginBottom: '0.25rem' }}>
          {item.name}
          <button onClick={() => remove(item.id)} style={{ marginLeft: '0.5rem', fontSize: '0.75rem' }}>Remove</button>
        </li>
      ))}
    </ul>
  )
}
