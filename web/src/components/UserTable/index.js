import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import axios from 'axios'

function UserTable() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios('http://localhost:3001/users').then(resp => {
            setData(resp.data)
        })
    }, [])

    return (
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
                                        <p key="skill">{skill}</p>
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
    )
}

export default UserTable