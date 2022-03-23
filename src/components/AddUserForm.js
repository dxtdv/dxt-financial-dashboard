import { Button, FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'

import appFirebase from '../firebase-config'

const db = getFirestore(appFirebase)

export default function AddUserForm() {

    const userInitialValues = {
        name: '',
        age: '',
        job: '',
        hobby: '',
        address: ''
    }

    const [user, setUser] = useState(userInitialValues)
    const [message, setMessage] = useState([])

    const getUserValues = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(user)
        try {
            await addDoc(collection(db, 'users'), {
                ...user
            })
            setMessage('User added successfuly')
        } catch (error) {
            console.log(error)
        }
        setUser({ ...userInitialValues })
    }

    return (
        <FormControl>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& > :not(style)': {
                        m: 1, width: '40ch',
                        display: 'flex', flexDirection: 'column',
                    },
                }}
                noValidate
                autoComplete="off"
            >
                <h3 color='green'>{message}</h3>
                <TextField required name="name" label="Name" variant="outlined" onChange={getUserValues} value={user.name} />
                <TextField required name="age" label="Age" variant="outlined"  onChange={getUserValues} value={user.age} />
                <TextField required name="job" label="Job" variant="outlined"  onChange={getUserValues} value={user.job} />
                <TextField required name="hobby" label="Hobby" variant="outlined"  onChange={getUserValues} value={user.hobby} />
                <TextField required name="address" label="Address" variant="outlined"  onChange={getUserValues} value={user.address} />
                <Button type="submit" variant="contained" >Submit</Button>
            </Box>
        </FormControl>
    )
}
