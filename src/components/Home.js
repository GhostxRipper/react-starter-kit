import React from 'react'

import { Button, Input } from './Styled'

const Home = () => (
  <form style={{ width: 300 }} onSubmit={event => event.preventDefault()}>
    <Input placeholder="Username" />
    <Input placeholder="Password" type="password" />
    <Button>Login</Button>
  </form>
)

export default Home
