import React from 'react';
import { getUsers } from '../lib/data';
import UserTable from '../Components/UserTable';
import { createUser, deleteUser } from '../lib/actions';
import AddUserModal from '../Components/AddUserModal';

const UsersPage = async () => {
    const users= await getUsers()
    
    return (
        <div >
           
           <div className='flex justify-between p-5'><h2>User Management: {users.length}</h2> 
           <AddUserModal createUserAction={createUser}/>
           </div>
           <UserTable users={users} deleteUserAction={deleteUser}></UserTable>
           
        </div>
    );
};

export default UsersPage;