import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'
import Home from "./Home";
import Posts from './Posts';





function App() {
  return (
    <BrowserRouter>
   
    <div className="App">
    <Switch> 
    <Header />
      <Route exact path='/' component={Home}/>
      <Route path='/:post_id' component={Posts}/>
    </Switch>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
