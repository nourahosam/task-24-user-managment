import React from 'react';
import { TableContainer, TableBody, Table, TableRow, TableHead, TableCell, Paper, TextField, MenuItem } from '@mui/material';

const UserTable = () => {
    return (<TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align='left'>Name</TableCell>
                    <TableCell align='left'>Username</TableCell>
                    <TableCell align='left'>Email Address</TableCell>
                    <TableCell align='left'>Group</TableCell>
                    <TableCell align='left'>Status</TableCell>
                    <TableCell align='left'>Created on</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key={1}>
                    <TableCell>
                        Noura
                    </TableCell>
                    <TableCell>
                        Noura
                    </TableCell>
                    <TableCell>
                        Noura
                    </TableCell>
                    <TableCell>
                        Noura
                    </TableCell>
                    <TableCell>
                        <TextField
                            sx={{width: 200}}
                            id='standard-select'
                            select
                            value='Activee'
                            variant='standard'>
                                <MenuItem key='active' value='active'>
                                Active
                                </MenuItem>
                                <MenuItem key='inactive' value='inactive'>
                                Inactive
                                </MenuItem>
                        </TextField>
                    </TableCell>
                    <TableCell>
                        Noura
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>)
}

export default UserTable;