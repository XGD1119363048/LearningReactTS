import React, { useRef, useState } from 'react'

export default function App() {
  const mytext = useRef<HTMLInputElement>(null)
  const [list, setList] = useState<string[]>([])
  return (
    <div>
      <input ref={mytext} />
      <button onClick={() => {
        console.log((mytext.current as HTMLInputElement).value)
        
        setList([...list, (mytext.current as HTMLInputElement).value])
      }}>click</button>

      {
        list.map(item => <li key={item}>{item}</li>)
      }
    </div>
  )
}
