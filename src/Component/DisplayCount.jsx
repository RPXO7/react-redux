import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

const DisplayCount = ({todos}) => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <h4>Number of Todos: {todos.length}</h4>
        </Card.Body>
      </Card>
    </Container>
  )
}

const mapStateToProps=(state)=>({todos:state.todos})

const mapDispatchToProps=(dispatch)=>({})

export default connect(mapStateToProps, mapDispatchToProps) (DisplayCount)