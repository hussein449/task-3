import { BrowserRouter as Router , Route , Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Navbar from './navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetail';
import NotFound from './NotFound';
/*this is a component
and it use jsx identical to javascript */
  /*!!!!{id is a route parameter used with :} */

function App() {
  const value = "welcome to the new blog";
  return (
    <Router>
    <div className="App">
      <Navbar/>
   <div className="content">
   <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
              </Route>
              <Route path="/blog/:id">
              <BlogDetails/> 
            </Route>
            <Route  path ="*">
              <NotFound/>
            </Route>
          </Switch>
   </div>
    </div>
    </Router>
  );
}

export default App;
