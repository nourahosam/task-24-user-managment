import { Button } from '@mui/material';
import React, { useState } from 'react';
import UserForm from '../Components/UserForm';
import UserTable from '../Components/UserTable';
import Header from '../Layouts/Header';
const Dashboard = () =>{
    const [modal, setModal] = useState(false);
return(
    <div>
        <Button variant='contained' onClick={(e)=>{setModal(true)}}>Add New</Button>
        <UserForm modal={modal} setModal={setModal}/>
        {/* <Header /> */}
        <UserTable />
    </div>
)
}

export default Dashboard;