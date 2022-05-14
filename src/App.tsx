import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';
import './App.css';
import './assets/css/main.css';
import './assets/css/noscript.css';
// import {Routes, Route, Link} from 'react-router-dom';
import Navigation from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Layout from './components/Layout'

export default function App() {
  return (
    <>
      <Layout />
    </>
  );
}

 