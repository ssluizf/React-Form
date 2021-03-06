import React, { useState } from 'react'
import { connect } from 'react-redux'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'

import { Formik, Form as FormikForm, Field, FieldArray, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './styles.css'
import * as Actions from '../../store/actions'

function Register({ activeModal, submitted, dispatch }) {
    const [skill, setSkill] = useState('')
    const [range, setRange] = useState(0)
    const [skills, setSkills] = useState([])
    const formData = { name: '', lastName: '', age: '', grade: '', skills: [] }

    const schema = yup.object().shape({
        name: yup.string().required(),
        lastName: yup.string().required(),
        age: yup.number().positive().integer().required(),
        grade: yup.string().required(),
        skills: yup.array().of(yup.string()).required()
    })

    function handleSkill(event) {
        setSkill(event.target.value)
    }

    function handleSkills(push) {
        const skillsCapitalize = skills.map(skill => skill.toUpperCase())
        const skillCapitalize = skill.toUpperCase()

        if (!skillsCapitalize.includes(skillCapitalize) && skillCapitalize) {            
            push(skill);
            setSkills([...skills, skill])
        }
    }

    function cleanForm() {
        setSkills([])
        setSkill('')
        setRange(0)
    }

    return (
    <Modal show={activeModal} onHide={() => dispatch(Actions.setModalInactive())} dialogClassName="main-modal">
        <Formik initialValues={formData} onSubmit={data => { cleanForm(); dispatch(Actions.handleSubmit(data, dispatch)) }} validationSchema={schema}>
            <FormikForm>
                <Modal.Header>
                    <Modal.Title>
                        Cadastro de usuários
                    </Modal.Title>
                    <Button type="submit">Cadastrar</Button>
                </Modal.Header>
                <Modal.Body as={Row}>
                    <Col sm="6" className="pb-4">
                        <Row>
                            <Col><Form.Text as="h5">Dados pessoais</Form.Text></Col>
                        </Row>
                        <Row>
                            <Form.Group as={Col} lg="6">
                                <Form.Label>Nome</Form.Label>
                                <Field className="form-control" name="name" type="text"></Field>
                                <ErrorMessage component="small" className="text-danger" name="name"></ErrorMessage>
                            </Form.Group>

                            <Form.Group as={Col} lg="6">
                                <Form.Label>Sobrenome</Form.Label>
                                <Field className="form-control" name="lastName" type="text"></Field>
                                <ErrorMessage component="small" className="text-danger" name="lastName"></ErrorMessage>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} lg="6">
                                <Form.Label>Idade <Badge variant="primary">{range}</Badge></Form.Label>
                                <Field className="form-control-range" onClick={event => { setRange(event.target.value) }} name="age" type="range"></Field>
                                <ErrorMessage component="small" className="text-danger" name="age"></ErrorMessage>
                            </Form.Group>

                            <Form.Group as={Col} lg="6">
                                <Form.Label>Escolaridade</Form.Label>
                                <Field className="form-control" name="grade" as="select" type="text">
                                    <option value="0">Grau de Escolaridade</option>
                                    <option value="Fundamental">Fundamental</option>
                                    <option value="Médio">Médio</option>
                                    <option value="Superior Cursando">Superior Cursando</option>
                                    <option value="Superior Completo">Superior Completo</option>
                                    <option value="Mestrado/Doutorado">Mestrado/Doutorado</option>
                                </Field>
                                <ErrorMessage component="small" className="text-danger" name="grade"></ErrorMessage>
                            </Form.Group>
                        </Row>
                    </Col>

                    <Col sm="6">
                        <Row>
                            <Col className="pb-4"><Form.Text as="h5">Tecnologias com conhecimentos</Form.Text></Col>
                        </Row>
                        <Row>
                            <Form.Group lg="12" as={Col}>
                                <FieldArray name="skills" render={({push}) => (
                                        <Row>
                                            <Col md="6" className="pb-2" lg="6">
                                                <input className="form-control" onChange={handleSkill} value={skill} type="text" placeholder="EX: Javascript"></input>
                                            </Col>
                                            <Col>
                                                <Button variant="outline-primary" type="button" onClick={() => handleSkills(push)}>Adicionar</Button>
                                            </Col>
                                        </Row>
                                    )}>
                                </FieldArray>
                                <ErrorMessage component="small" className="text-danger" name="skills"></ErrorMessage>
                            </Form.Group>
                            <Col>
                                <Table className="text-center" bordered>
                                    <thead>
                                        <tr><th>Tecnologias</th></tr>
                                    </thead>
                                    <tbody>
                                        { skills.map((skill) => (
                                            <tr key={skill}><td>{skill}</td></tr>
                                        ))
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Modal.Body>
            </FormikForm>
        </Formik>
    </Modal>
    )
}

export default connect(state => ({ activeModal: state.activeModal, submitted: state.submitted }))(Register)