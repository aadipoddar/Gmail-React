import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import EmailList from './EmailList'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              {/* <Mail /> */}
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  )
}

export default App
