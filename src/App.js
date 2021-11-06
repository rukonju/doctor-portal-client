import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
