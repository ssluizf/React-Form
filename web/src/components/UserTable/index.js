import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
                            <td>{user.skills.length}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Col>
    </Row>
    )
}

export default UserTable