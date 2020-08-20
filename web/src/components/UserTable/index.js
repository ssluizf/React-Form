import React from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function UserTable() {
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Col>
    </Row>
    )
}

export default UserTable