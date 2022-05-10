import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Blogs from './components/Blogs/Blogs';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Items from './components/Manageitem/Items';
import Orders from './components/Orders/Orders';
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
        <Route path='/items' element={<RequireAuth>
          <Items></Items>
        </RequireAuth>}></Route>
        <Route path='/itemsAdd' element={<AddProduct></AddProduct>}></Route>
        <Route path='/myiItems' element={<Orders></Orders>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <ToastContainer />
    </div> 
  );
}

export default App;