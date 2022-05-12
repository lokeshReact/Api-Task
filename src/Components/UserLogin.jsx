import React, { useState } from 'react'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function UserLogin({ userDetail }) {

    const [useremail, setUseremail] = useState("")
    const [loginUser, setLoginUser] = useState({})
    const navigate = useNavigate();

    const loginAuth = async (e) => {

        e.preventDefault();
        console.log(useremail, "user")
        await axios.get("https://reqres.in/api/users")
            .then((res) => {
                let user = res.data.data;
                const userdet = user.find((data) => {
                    if (useremail === data.email) {
                        return data
                    }
                })
                console.log(userdet);
                if (userdet.email) {
                    // setLoginUser(userdet)
                    userDetail(userdet)
                    navigate("/list")
                }
            })
            .catch((err) => {
                alert("user not found")
            })
    }

    return (
        <Form style={{ marginLeft: '20%', marginTop: '5%' }} onSubmit={loginAuth}>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={useremail} onChange={(e) => { setUseremail(e.target.value) }} placeholder="Enter Email" style={{ width: '25%' }} />
                <Form.Text className="text-muted">
                    We'll never share your Email with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default UserLogin