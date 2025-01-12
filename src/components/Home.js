import React, { useState } from 'react';
import './Home.css';

// Department-specific credentials
const DEPARTMENT_CREDENTIALS = {
  cs: { userId: 'CSE', password: 'CSE1' },
  it: { userId: 'IT', password: 'maxloc' },
  ee: { userId: 'EE', password: 'EE3' },
  ece: { userId: 'ECE', password: 'ECE4' },
  mech: { userId: 'ME', password: 'ME5' },
};

const departments = [
  { id: 'cs', name: 'Computer Science' },
  { id: 'it', name: 'Information Technology' },
  { id: 'ee', name: 'Electrical Engineering' },
  { id: 'ece', name: 'Electronics and Communication Engineering' },
  { id: 'mech', name: 'Mechanical Engineering' },
];

const Home = ({ onSelectDepartment }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSelectChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = DEPARTMENT_CREDENTIALS[selectedDepartment];
    
    if (credentials && userId === credentials.userId && password === credentials.password) {
      setLoginError('');
      onSelectDepartment(selectedDepartment);
    } else {
      setLoginError('Invalid ID or password for the selected department');
    }
  };

  return (
    <div className="home-container">
      <h1 className="college-name"> Prof.Ram Meghe College of Engineering & Management</h1>
      <h2>Select a Department</h2>
      <form onSubmit={handleLogin}>
        <select value={selectedDepartment} onChange={handleSelectChange}>
          <option value="" disabled>Select a department</option>
          {departments.map(department => (
            <option key={department.id} value={department.id}>
              {department.name}
            </option>
          ))}
        </select>
        {selectedDepartment && (
          <>
            <input 
              type="text" 
              placeholder="ID" 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </>
        )}
        <button type="submit" className="submit-btn">Login</button>
        {loginError && <p className="error">{loginError}</p>}
      </form>
    </div>
  );
};

export default Home;
