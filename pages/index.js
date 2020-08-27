import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import IndexHeader from '../components/IndexHeader';

import HomePage from './HomePage';
import SebNav from '../components/SebNav';
import SebFooter from '../components/SebFooter';

export default function Home() {
  const navItems = [
    //{link:"blog", text: "blog"},
  ];

  return (
    <div className="App">
    <body id="page-top">
      <SebNav items={navItems} />
      <HomePage />
      <SebFooter />

    </body>

    </div>
  )
}
