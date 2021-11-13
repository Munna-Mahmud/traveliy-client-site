import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import ExoticPlaces from './pages/ExoticPlaces/ExoticPlaces';
import Offers from './pages/Offers/Offers';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Firebase/Login';
import AuthProvider from './pages/AuthProvider/AuthProvider';
import Booking from './pages/Booking/Booking';
import UsersDetails from './pages/UsersDetails/UsersDetails';
import PrivateRoute from './pages/Login/Firebase/PriavteRouter/private';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/exoticPlaces">
              <ExoticPlaces></ExoticPlaces>
            </Route>

            <Route exact path="/offers">
              <Offers></Offers>

            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/contact">
              <Contact></Contact>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/registration">
              <Register></Register>
            </Route>

            <PrivateRoute path="/booking/:servicesId">
              <Booking></Booking>
            </PrivateRoute>   

            <PrivateRoute exact path="/userdetails">
              <UsersDetails></UsersDetails>
            </PrivateRoute>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
