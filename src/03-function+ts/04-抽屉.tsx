import React, { useState } from 'react'

export default function App() {
  const [isShow, setIsShow] = useState<boolean>(true)
  return (
    <div>
      <Navbar cb={() => {
        console.log('11111')

        setIsShow(!isShow)
      }} />
      {isShow && <Sidebar />}
    </div>
  )
}

interface IProps {
  title?: string, // 可选
  cb: () => void
}

function Navbar(props: IProps) {
  return <div>
    navbar-<button onClick={() => {
      props.cb()
    }}>click</button>
  </div>
}

function Sidebar() {
  return <div>
    sidebar
  </div>
}
