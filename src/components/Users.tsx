import React from 'react';
import UserItem from './UserItem';

interface User {
    name: string;
    email: string;
    active: boolean;
    role: 'user' | 'editor' | 'admin';
}

interface UsersProps {
    users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
    return (
        <div>
            {users.map((user, index) => (
                <UserItem key={index} user={user} />
            ))}
        </div>
    );
};

export default Users;
