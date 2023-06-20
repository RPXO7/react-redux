import React, { useState } from 'react'
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { connect } from 'react-redux'
import { deleteTodo } from './../Redux/actions/todo';


const DisplayTodo = ({ todos, deleteTodo }) => {

    return (
        <Container className='mt-3'>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h3>All todo are here!</h3>
                            <DisplayCount />

                            <ListGroup className='mt-2'>
                                {
                                    todos.map((todo, index) => (
                                        <ListGroupItem style={{display: 'flex',justifyContent:'space-between',}} key={index}>
                                            <div>
                                            <h4>{todo.title}</h4>
                                            <p>{todo.description}</p>
                                            </div>
                                          
                                            <div >
                                                <Button onClick={event => deleteTodo(todo.id)} variant='danger' size='sm'>Delete</Button>
                                            </div>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return { todos: state.todos }
}

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (id) => (dispatch(deleteTodo(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo)