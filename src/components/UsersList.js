import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getFirestore, collection, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore'
import appFirebase from '../firebase-config'
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { async } from '@firebase/util';

const db = getFirestore(appFirebase)

export default function UsersList() {

    const [users, setUsers] = useState([])
    const [subId, setSubId] = useState('')
    const usersCollectionRef = collection(db, 'users')

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })))
        };
        getUsers()
    }, [users]);

    //edit user
    const getOne = async (id) => {
        try {
            const docRef = doc(db, 'users', id)
            const docSnap = await getDoc(docRef)
            //setUser(docSnap.data())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (subId !== '')
            console.log('from use effect:', subId)
        getOne(subId)
    }, [subId])

    //function para eliminar el usuario = function to delete the user
    const handleDeleteAction = async (id) => {
        console.log(id)
        await deleteDoc(doc(db, 'users', id))
    }

    //User table




    //user table

    return (
        <>
            <h1>User List</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Age</TableCell>
                            <TableCell align="left">Job</TableCell>
                            <TableCell align="left">Hobby</TableCell>
                            <TableCell align="left">Adress</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => {
                            return (
                                <TableRow
                                    key={user.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {user.name}
                                    </TableCell>
                                    <TableCell align="left">{user.age}</TableCell>
                                    <TableCell align="left">{user.job}</TableCell>
                                    <TableCell align="left">{user.hobby}</TableCell>
                                    <TableCell align="left">{user.address}</TableCell>
                                    <TableCell align="left">
                                        <IconButton aria-label="edite" onClick={() => setSubId(user.id)}>
                                            <EditIcon color="primary" />
                                        </IconButton>
                                        <IconButton aria-label="delete" onClick={() => handleDeleteAction(user.id)}>
                                            <DeleteIcon color="secondary" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
