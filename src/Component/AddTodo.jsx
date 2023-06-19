import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
// import addTodoList from '../Redux/actions/todo'
import addTodoList from '../Redux/actions/todo'

const AddTodo = ({addTodoList}) => {

  const [todo, setTodo] = useState({
    title: '',
    description: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodoList(todo)
    console.log(todo)
    setTodo({
      title: '',
      description: ''
    })
  }

  return (

    <Container>
      <Row>
        <Col md={12}>
          <Card className='shadow-sm'>
            <Card.Body>
              <h3>TO DO LIST</h3>
              <DisplayCount />

              <Form onSubmit={handleSubmit}>

                <Form.Group>
                  <Form.Label>To do List</Form.Label>

                  <Form.Control
                    type='text'
                    placeholder='Enter here'
                    value={todo.title}
                    onChange={event => setTodo({ ...todo, title: event.target.value })}
                  />
                </Form.Group>

                <Form.Group className='mt-2'>
                  <Form.Label>description</Form.Label>
                  <Form.Control as={'textarea'}
                    type='text'
                    placeholder='Enter here'
                    value={todo.description}
                    onChange={event => setTodo({ ...todo, description: event.target.value })}
                  />
                </Form.Group>

                <Container className='text-center mt-4'>
                  <Button type='submit' variant='primary'>
                    Add To
                  </Button>
                </Container>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps=(state)=>({})

const mapDispatchToProps=(dispatch)=>({
  addTodoListList:(todo)=>(dispatch(addTodoList(todo)))
})


export default AddTodo