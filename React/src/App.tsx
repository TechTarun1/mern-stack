import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Tasks from './pages/tasks/Tasks';
import Profile from './pages/profile/Profile';
import Expense from './pages/expenses/Expense';
import Smoke from './pages/smoke/Smoke';
import Car from './pages/car/Car';
import Book from './pages/bookAuthor/Book';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/expense' element={<Expense />} />
          <Route path='/smoke' element={<Smoke />} />
          <Route path='/car' element={<Car />} />
          <Route path='/book' element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
