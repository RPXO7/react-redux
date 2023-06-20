import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { connect } from 'react-redux';
import addTodo from '../Redux/actions/todo'
import { v4 } from 'uuid';


const AddTodo = ({addTodo}) => {

  const [todo, setTodo] = useState({
    title: '',
    description: '',
    id:''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('todo', JSON.stringify(todo));
    addTodo({...todo, id: v4()})
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
                    required
                    value={todo.title}
                    onChange={event => setTodo({ ...todo, title: event.target.value })}
                  />
                </Form.Group>

                <Form.Group className='mt-2'>
                  <Form.Label>description</Form.Label>
                  <Form.Control as={'textarea'}
                    type='text'
                    placeholder='Enter here'
                    required
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
  addTodo:(todo)=>(dispatch(addTodo(todo)))
})


export default connect(mapStateToProps, mapDispatchToProps) (AddTodo)