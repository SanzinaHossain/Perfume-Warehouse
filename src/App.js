import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NoPageFound from './Components/NoPageFound/NoPageFound';
import ManageItem from './Components/ManageItem/ManageItem';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import Alldata from './Components/Alldata/Alldata';
import Additem from './Components/Additem/Additem';
import ShowDataTable from './Components/ShowDataTable/ShowDataTable';
import MyItem from './Components/MyItems/MyItem';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/showdatatable" element={<ShowDataTable></ShowDataTable>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/items/:id" element={<ItemDetails></ItemDetails>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/manageitem/:id" element={
          <RequireAuth>
            <ManageItem ></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path="/additem" element={
          <RequireAuth>
             <Additem></Additem>
          </RequireAuth>
        }></Route>
         <Route path="/alldata" element={
          <RequireAuth>
             <Alldata></Alldata>
          </RequireAuth>
        }></Route>
        <Route path="myitem" element={
          <RequireAuth>
             <MyItem></MyItem>
          </RequireAuth>
        }></Route>
      <Route path="*" element={<NoPageFound></NoPageFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
