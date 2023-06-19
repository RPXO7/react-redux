import React, { useState } from 'react'
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'

const DisplayTodo = () => {
    const [todos, setTodos] = useState([
        {
            title: 'first One',
            description: 'first title '
        },
        {
            title: 'second One',
            description: 'second title '
        }
    ])
    
    return (
        <Container className='mt-3'>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h3>All todo are</h3>
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

export default DisplayTodo