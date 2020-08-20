import React from 'react'
import Container from 'react-bootstrap/Container'

import UserTable from '../../components/UserTable'
import Register from '../../components/Register'

function Home() {
    return (
        <Container>
            <Register />
            <UserTable />
        </Container>
    )
}

export default Home;