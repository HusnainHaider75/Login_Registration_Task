import {Route, Switch} from "react-router-dom";
import './App.css';
import Register from './register';
import Login from './login';
import Dashboard from "./dashboard";
function App() {
  return (
    <div >
      <Switch>
        <Route exact path ="/" component={Register} />
        <Route exact path ="/login" component={Login} />
        <Route exact path ="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );

}

export default App;
