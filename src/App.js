import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment/>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
