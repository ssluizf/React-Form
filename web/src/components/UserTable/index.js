import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import * as Actions from '../../store/actions'

function UserTable({ activeModal, submitted, serverRunning, dispatch }) {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        const getUsers = () => {
            axios('http://localhost:3001/users')
                .then(resp => {
                    dispatch(Actions.setServerStatus(''))
                    setData(resp.data)
                })
                .catch(err => {
                    if (err.message === 'Network Error') dispatch(Actions.setServerStatus('Servidor fora de ar'))
        })}

        getUsers()
    }, [serverRunning])

    useEffect(() => {
        if (activeModal === false && serverRunning) setShow(true)
    }, [activeModal])

    useEffect(() => {
       setData([...data, ...submitted]) 
    }, [submitted])

    return (
    <>
        <Row className="align-items-center mt-4 pb-5">
            <Col md="8" lg="9" xl="10" className="pb-2"><h1 className="flow-text">Listagem de usuários</h1></Col>
            <Col md="4" lg="3" xl="2"><Button onClick={() => dispatch(Actions.setModalActive())}>Cadastrar Usuário</Button></Col>
        </Row>
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header>
                <strong className="mr-auto">{serverRunning}</strong>
            </Modal.Header>
            <Modal.Body>Items cadastrados podem ser perdidos.</Modal.Body>
        </Modal>
        <Row>
            {data.length === 0
            ?
            <Col lg="12">
                <Alert variant="danger"><Alert.Heading className="text-center">Nenhum Item Cadastrado</Alert.Heading></Alert>
            </Col>
            :
            <Col lg="12">
                <Table className="text-center" bordered responsive>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Idade</th>
                            <th>Escolaridade</th>
                            <th>Qtd skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                                <td>{user.age}</td>
                                <td>{user.grade}</td>
                                <td><OverlayTrigger key="bottom" placement="bottom"
                                    overlay={
                                        <Tooltip id="tooltip-bottom">
                                            {user.skills.map((skill) => (
                                                <p key={skill}>{skill}</p>
                                            ))}
                                        </Tooltip>
                                    }
                                >
                                    <Badge variant="primary">{user.skills.length}</Badge>
                                </OverlayTrigger></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
            }
        </Row>
    </>
    )
}

export default connect(state => ({ activeModal: state.activeModal, submitted: state.submitted, serverRunning: state.serverRunning }))(UserTable)