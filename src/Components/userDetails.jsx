import axios from "axios";
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';

export default function UserDetails({ userId }) {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({})

    const handleClose = () => setShow(false);
    const userDetail = () => {
        setShow(true);
        axios.get(`https://reqres.in/api/users/${userId}`)
            .then((res) => {
                setUser(res.data.data)
            })
    }

    return (
        <>
            <Button variant="primary" onClick={userDetail}>
                UserDetail
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{user.first_name} {user.last_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: "flex" }}>
                        <img src={user.avatar} alt="user.first_name" />
                        <div style={{margin:"30px"}}>
                            UserId : <span>{user.id}</span> <br />
                            firstName : <span>{user.first_name}</span> <br />
                            lastName : <span>{user.last_name}</span> <br />
                            email : <span>{user.email}</span> <br />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
