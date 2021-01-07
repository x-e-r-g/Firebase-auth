import React, { useState } from 'react';
import { Button, Card, Alert, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from "./../contexts/AuthContext"

const Dashboard = () => {
    const [error, setError] = useState("");
    const { currentUser, signout } = useAuth();
    const history = useHistory();
    const handleLogout = async () => {
        setError('');
        try {
            await signout().then(()=>{
                history.push("/login");
            });
            
        } catch (error) {
            setError(error)
        }
    }
    return (
        <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh" }}>
        <div>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>
                        profile
                    </h2>
                    {error ? (<Alert variant="danger">{JSON.stringify(error)}</Alert>) : ("")}
                    <strong>
                        Email: 
                    </strong>
                    {currentUser.email && currentUser.email}
                    <Link to="/update-profile" className='btn btn-primary w-100 mt-3'>Update Profile</Link>
                </Card.Body>
            </Card>
            <div>
                <Button variant='Link' onClick={handleLogout}>Logout</Button>
            </div>
        </div>
        </Container>
    )
}
export default Dashboard;