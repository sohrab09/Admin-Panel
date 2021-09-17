import './App.css';
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AdminPanel from './Components/AdminPanel/AdminPanel/AdminPanel';
import AdminHome from './Components/AdminPanel/Pages/AdminHome/AdminHome';
import AddProduct from './Components/AdminPanel/Pages/AddProduct/AddProduct';
import EditProduct from './Components/AdminPanel/Pages/EditProduct/EditProduct';
import DeleteProduct from './Components/AdminPanel/Pages/DeleteProduct/DeleteProduct';
import Dashboard from './Components/AdminPanel/Pages/Dashboard/Dashboard';
function App() {

  const pathName = window.location.pathname

  return (
    <Router >
      { pathName.includes("admin") ? <AdminPanel /> : null }
      <Switch >
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/admin">
          <AdminHome />
        </Route>
        <Route exact path = "/admin/addProduct">
          <AddProduct />
        </Route>
        <Route exact path = "/admin/editProduct">
          <EditProduct />
        </Route>
        <Route exact path = "/admin/deleteProduct">
          <DeleteProduct />
        </Route>
        <Route exact path = "/admin/statistics">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
