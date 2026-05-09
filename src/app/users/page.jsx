import React from 'react';
import { getUsers } from '../lib/data';
import UserTable from '../Components/UserTable';

const UsersPage = async () => {
    const users= await getUsers()
    
    return (
        <div>
           <h2>User Management: {users.length}</h2> 
           <UserTable users={users}></UserTable>
        </div>
    );
};

export default UsersPage;