import React, { useState } from 'react';
import UserForm from './components/UserForm';
import Users from './components/Users';

interface User {
    name: string;
    email: string;
    active: boolean;
    role: 'user' | 'editor' | 'admin';
}

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (user: User) => {
        setUsers([...users, user]);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <UserForm addUser={addUser} />
                </div>
                <div className="col-md-6">
                    <Users users={users} />
                </div>
            </div>
        </div>
    );
};

export default App;
