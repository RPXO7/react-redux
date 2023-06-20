import React, { useState } from 'react'
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { connect } from 'react-redux'


const DisplayTodo = ({todos}) => {
   
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
                                        <ListGroupItem key={index}>
                                            <h4>{todo.title}</h4>
                                            <p>{todo.description}</p>
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

const mapStateToProps=(state) =>{
    return{todos:state.todos}
}

const mapDispatchToProps=(dispatch)=>({})

export default connect(mapStateToProps, mapDispatchToProps) (DisplayTodo)