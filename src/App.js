
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import UserDetails from './Components/UserDetails';
import UserList from './Components/UserList';
import HomePage from './Components/HomePage';
import SortedUser from './Components/SortedUser';

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users/sort" element={<SortedUser />} />
      </Routes>
    </div>
  );
}

export default App;
