
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import News from "./pages/news";
import Login from "./pages/login";
import Header from "./components/header";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {login} from "./redux/actions/userAction";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {

   if( localStorage.getItem('user')){
     dispatch(login())
   }


  }, [dispatch])
  return (
    <Router>
      <Header/>
    <PrivateRoute exact path='/' component={Dashboard}/>
    <PrivateRoute exact path='/news' component={News}/>
    <Route exact path='/login' component={Login}/>
    </Router>
  );
}

export default App;
