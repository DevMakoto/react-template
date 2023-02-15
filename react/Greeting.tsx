import React from 'react'

type Props = {
  name: string
}

function Greeting({ name }: Props) {
  return <div>Hey friend, {name}</div>
}

export default Greeting
