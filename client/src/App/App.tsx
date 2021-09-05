import React from 'react';
import Routes from './Routes';
import './global-styles.css';
import Layout from './components/Layout';
import HeaderBar from './components/HeaderBar';
import Content from './components/Content';
import Footer from './components/Footer';
const App : React.FC = () => {
  return (
      <Layout>

        <HeaderBar />

        <Content >
          <Routes />
        </Content>

        <Footer />
      </Layout>
  );
}

export default App;
