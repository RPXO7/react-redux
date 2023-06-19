import React from 'react'
import { Card, Container } from 'react-bootstrap'

const DisplayCount = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <h4>Number of Todos: 3</h4>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default DisplayCount