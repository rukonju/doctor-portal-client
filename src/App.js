import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
