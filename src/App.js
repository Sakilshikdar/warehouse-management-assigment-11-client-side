import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Items from './components/Manageitem/Items';
import ErrorPage from './components/Shear/ErrorPage/ErrorPage';
import Header from './components/Shear/Header/Header';
import Home from './components/Shear/Home/Home';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        
      </Routes>
    </div> 
  );
}

export default App;