import React, { useState } from 'react';

interface UserFormProps {
    addUser: (user: { name: string; email: string; active: boolean; role: 'user' | 'editor' | 'admin' }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [active, setActive] = useState(false);
    const [role, setRole] = useState<'user' | 'editor' | 'admin'>('user');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addUser({ name, email, active, role });
        setName('');
        setEmail('');
        setActive(false);
        setRole('user');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="active" checked={active} onChange={(e) => setActive(e.target.checked)} />
                <label className="form-check-label" htmlFor="active">Активен</label>
            </div>
            <div className="mb-3">
                <label htmlFor="role" className="form-label">Роль</label>
                <select className="form-select" id="role" value={role} onChange={(e) => setRole(e.target.value as 'user' | 'editor' | 'admin')}>
                    <option value="user">Пользователь</option>
                    <option value="editor">Редактор</option>
                    <option value="admin">Администратор</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Создать пользователя</button>
        </form>
    );
};

export default UserForm;

