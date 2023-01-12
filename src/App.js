import React, { useEffect, useState } from 'react';
import './App.css';
import { Home } from './components/home';
import 'bootstrap/dist/css/bootstrap.css';
import './css/master.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store/store';
import { MENULINK, ADMINMENULINK } from './content';
import { Provider } from 'react-redux';
import { Contact } from './components/contact';
import { AboutUs } from './components/about';

import { Login } from './components/login';
import { SignUp } from './components/singUp';
import { Footer } from './components/footer';
import { User } from './components/user';
import { Service } from './components/service';
import { Careers } from './components/careers';

import { Admin } from './components/admin';
import { HeaderConnect } from './components/header';

function App() {
  const stringifiedPerson = JSON.parse(localStorage?.getItem('user-info'));
  const [userLogin, setUserLogin] = useState(
    JSON.parse(localStorage.getItem('user-info'))?.loggedinUser?.userName
  );
  const [successMsg, setSuccessMsg] = useState('');
  const [serviceClicked, setServiceClicked] = useState({});
  const url = window.location.pathname;
  useEffect(() => {
    setUserLogin(userLogin);
  }, [userLogin]);
  const homeCallback = () => {
    setUserLogin(userLogin);
    window.location.reload();
  };
  useEffect(() => {
    setUserLogin(userLogin);
  }, []);

  const loginCallback = () => {
    setUserLogin(userLogin);
    window.location.reload();
  };
  const successMessage = (e) => {
    if (e) setSuccessMsg(e);
  };
  const itemClick = (e) => {
    setServiceClicked(e.id);
    window.location.href = '/services';
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          {userLogin === 'admin' ? (
            <HeaderConnect
              menuLink={ADMINMENULINK}
              className={'app-header'}
              type={'adminpage'}
              fluid={true}
              fixed='top'
              loggedin={stringifiedPerson}
              clickEvent={() => homeCallback()}
            />
          ) : userLogin && userLogin !== 'admin' ? (
            <HeaderConnect
              menuLink={MENULINK}
              selectedMenu={url === '/' ? 'home' : url.replace('/', '')}
              className={'app-header'}
              type={'selfpage'}
              fixed=''
              loggedin={stringifiedPerson}
              clickEvent={() => homeCallback()}
            />
          ) : (
            <HeaderConnect
              menuLink={MENULINK}
              selectedMenu={url === '/' ? 'home' : url.replace('/', '')}
              className={'app-header'}
              type={'homepage'}
              fixed=''
              clickEvent={() => homeCallback()}
            />
          )}
        </>
        <Routes>
          <>
            <Route
              path='/'
              element={<Home clickedItem={(e) => itemClick(e)} />}
            />
            <Route index element={<Home clickedItem={(e) => itemClick(e)} />} />
            <Route
              path='/home'
              element={<Home clickedItem={(e) => itemClick(e)} />}
            />
            <Route index element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/user' element={<User />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route
              path='/services'
              element={<Service serviceSelected={serviceClicked} />}
            />
            <Route path='/careers' element={<Careers />} />
            <Route path='/contact' element={<Contact />} />
          </>
          <Route
            path='/login'
            element={
              <Login loginCall={loginCallback} signupSuccess={successMsg} />
            }
          />
          <Route
            path='/signup'
            element={<SignUp successMessage={(e) => successMessage(e)} />}
          />
        </Routes>
        <Footer type={userLogin === 'admin' ? true : false} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
