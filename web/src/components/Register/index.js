import React from 'react'
import { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { Formik } from 'formik';

import './styles.css'

function Register() {
    const [show, setShow] = useState(false)
    const [data, setData] = useState({ name: '', lastName: '', age: 0, grade: '', skills: [] })

    function handleSubmit() {

    }

    return (
    <Row className="align-items-center mt-4 pb-5">
        <Col lg="10"><h1>Listagem de usuários</h1></Col>
        <Col lg="2"><Button onClick={() => setShow(true)}>Cadastrar Usuário</Button></Col>
        <Modal show={show} onHide={() => setShow(false)} dialogClassName="main-modal">
            <Modal.Header>
                <Modal.Title>
                    Cadastro de usuários
                </Modal.Title>
                <Button>Cadastrar</Button>
            </Modal.Header>
            <Modal.Body>
                <Formik initialValues={data} onSubmit={handleSubmit}>
                    <Form>
                        <Row>
                            <Col sm="6">
                                <Row>
                                    <Col><Form.Text as="h5">Dados pessoais</Form.Text></Col>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} lg="6">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} lg="6">
                                        <Form.Label>Sobrenome</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} lg="6">
                                        <Form.Label>Idade</Form.Label>
                                        <Form.Control type="range"></Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} lg="6">
                                        <Form.Label>Escolaridade</Form.Label>
                                        <Form.Control as="select" custom type="text">
                                            <option value="0">Grau de Escolaridade</option>
                                            <option value="1">Fundamental</option>
                                            <option value="2">Médio</option>
                                            <option value="3">Superior Cursando</option>
                                            <option value="4">Superior Completo</option>
                                            <option value="5">Mestrado/Doutorado</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Row>
                            </Col>

                            <Col sm="6">
                                <Row>
                                    <Col className="pb-4"><Form.Text as="h5">Tecnologias com conhecimentos</Form.Text></Col>
                                </Row>
                                <Row>
                                    <Form.Group lg="6" as={Col}>
                                        <Form.Control type="text" placeholder="EX: Javascript"></Form.Control>
                                    </Form.Group>
                                    <Col lg={{ offset: 3 }}><Button variant="outline-primary">Adicionar</Button></Col>
                                    <Col>
                                        <Table className="text-center" bordered>
                                            <thead>
                                                <tr><th>Tecnologias</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr><td></td></tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    </Row>
    )
}

export default Register