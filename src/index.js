import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';


import Header from './components/HomePage/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/HomePage/Footer';
import SignIn from './components/LogInAndSignUp/SignIn';
import ProductDetail from './components/Court/CourtDetail';
import ListCourt from './components/Court/ListCourt';
import PaymentMethod from './components/Payment/Payment';
import SearchList from './components/Court/SearchList';
import Search from './components/HomePage/Search';
import BookedList from './components/Booked/BookedList';
import TimeSlots from './components/time/TimeSlot';
import CourtReview from './components/Court/CourtReview';
import LoginPopup from './components/LogInAndSignUp/LoginWithPhone';
import GoogleOAuth from './components/LogInAndSignUp/Google_OAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Home = () => {
    return (
      <>
        <Header/>
        <HomePage />
        <Footer /> 
      </>
    );
  };
  const Login = () => {
    return (
      <>
        <Header/>
        <SignIn/>
      </>
    );
  };
  const Detail = () => {
    return (
      <>
        <Header/>
        <ProductDetail/>
        <ListCourt/>
        <CourtReview/>
        <Footer/>
      </>
    );
  };
  const OAuth = () => {
    return (
      <>
        <GoogleOAuthProvider clientId="21328047732-02qfv7vb9ku5n0ov51v8d3k8vqb7e1ab.apps.googleusercontent.com">
          <GoogleOAuth/>  
        </GoogleOAuthProvider>
      </>
    )
  }
  const Payment = () => {
    return (
      <>
        <Header/>
        <PaymentMethod/>
      </>
    );
  };
  const Searchs = () => {
    return (
      <>
        <Header/>
        <SearchList/>
        <Footer/>
      </>
    );
  };
  
  
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="view" element={<Detail />} />
        <Route path="home" element={<Home />}/>
        <Route path="login" element={<Login />} />
        <Route path="payment" element={<Payment />} />
        <Route path="search" element={<Searchs />} />
        <Route path="booked" element={<><Header/><BookedList /></>} />
        <Route path="booking" element={<><Header/><TimeSlots /></>} />
        <Route path="loginpopup" element={<><LoginPopup/></>} />
        <Route path="GoogleOAuth" element={<><OAuth/></>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


