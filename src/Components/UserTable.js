import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableContainer, TableBody, Table, TableRow, TableHead, TableCell, Paper, Button } from '@mui/material';
import { deleteUserService, fetchUsersService } from '../Services/Users/userActions';
import UpdateForm from './UpdateForm';

const UserTable = () => {
    const state = useSelector((state) => state);
    const [isLoaded, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [update, setUpdate] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUsersService());
        console.log("useEffect", state);
        setLoading(true)
    }, [])


    if (isLoaded)
        return (<TableContainer component={Paper}>
            {console.log("Main Component", state)}

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='left'>ID</TableCell>
                        <TableCell align='left'>First Name</TableCell>
                        <TableCell align='left'>Last Name</TableCell>
                        <TableCell align='left'>Email Address/Picture</TableCell>
                        <TableCell align='left'>Delete</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {isLoaded && state.users.users.map((val) => {
                        return(<TableRow>
                            <TableCell>
                                {val.id}
                            </TableCell>
                            <TableCell>
                                {val.firstName}
                            </TableCell>
                            <TableCell>
                                {val.lastName}
                            </TableCell>
                            <TableCell>
                                {val.email} {val.picture && <img src={`${val.picture}`}/>}
                            </TableCell>
                            <TableCell>
                                <Button onClick={(e)=>{dispatch(deleteUserService(val.id))}}>Delete</Button>
                                <Button onClick={(e)=>{setUpdate(true); setUser(val);}}>Update</Button>
                            </TableCell>
                        </TableRow>)
                    })}

                </TableBody>

            </Table>
            <UpdateForm update={update} setUpdate={setUpdate} user={user} />
        </TableContainer>)
    return (<div>Loading</div>)


}

export default UserTable;