import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StRedirect from './pages/stRedirect/StRedirect'
import Activities from './pages/activities/Activities'
import Strava from './pages/strava/Strava'
import Goals from './pages/goals/Goals'
function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home />}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {user && user.displayName && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
            <Route path="/stredirect">
              {!user && <Redirect to="/login" />}
              {user && <StRedirect />}
            </Route>
            <Route path="/strava">
              {!user && <Redirect to="/login" />}
              {user && <Strava />}
            </Route>
            <Route path="/activities">
              {!user && <Redirect to="/login" />}
              {user && <Activities  />}
            </Route>
            <Route path="/goals">
              {!user && <Redirect to="/login" />}
              {user && <Goals  />}
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App