import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MENULINK, ADMINMENULINK } from '../content';

import { Header } from './header';
import { Service } from './service';
import { Home } from './home';
import { AdminHome } from './admin';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/master.scss';

function Main() {
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  const loginUser = stringifiedPerson?.loggedinUser?.userName;
  console.log(loginUser);

  return (
    <>
      <Header
        menuLink={loginUser === 'admin' ? ADMINMENULINK : MENULINK}
        className={'app-header'}
        type={
          loginUser
            ? loginUser === 'admin'
              ? 'adminpage'
              : 'selfpage'
            : 'homepage'
        }
        fixed='top'
        fluid={loginUser === 'admin' ? true : false}
        loggedin={stringifiedPerson}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/self' element={<Home />} />
        <Route path='/services' element={<Service />} />
      </Routes>
    </>
  );
}

export { Main };
