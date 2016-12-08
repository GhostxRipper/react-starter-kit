import React from 'react'

import { Button, Input } from './Styled'

const Home = () => (
  <div>
    <Input placeholder="YOLO" />
    <Button
      onClick={() => console.warn('clicked')}
    >
      Button
    </Button>
  </div>
)

export default Home
