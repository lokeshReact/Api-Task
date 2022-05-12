import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, Spinner, Button } from 'react-bootstrap';
import UserDetails from './userDetails';

function UserList({ loginUser }) {
    const [userList, setUserList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (loginUser.id) {
            console.log(loginUser.email);
            axios.get("https://reqres.in/api/users")
                .then((res) => {
                    setTimeout(() => {
                        setIsLoading(false)
                        setUserList(res.data.data)
                    }, 1000);
                        // setIsLoading(false)
                    console.log(userList);
                })
        }
    }, [loginUser])
    const showUserDetail = (id) => {
        console.log(id);
    }

    return (
        <div id='userList'>
            {
                isLoading && userList.length === 0 ?
                    <Spinner id='spinner' animation="border" /> :
                    <>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>userID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userList.map((user) => {
                                        return (

                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.first_name}</td>
                                                <td>{user.last_name}</td>
                                                <td>{user.email}</td>
                                                <td ><UserDetails userId={user.id} /></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>

                    </>
            }

        </div>
    )
}

export default UserList