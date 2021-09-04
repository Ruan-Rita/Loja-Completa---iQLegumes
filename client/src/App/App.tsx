import React from 'react';
import Routes from './Routes';
import './global-styles.css';
import Layout from './components/Layout';
import HeaderBar from './components/HeaderBar';
import Content from './components/Content';
const App : React.FC = () => {
  return (
      <Layout>

        <HeaderBar />

        <Content >
          <Routes />
        </Content>

      </Layout>
  );
}

export default App;
