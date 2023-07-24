import { Button, Result } from 'antd';
import React from 'react';
import {history} from 'umi';


const App: React.FC = () => (
  <Result
    status="success"
    title="welcome"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console" onClick={ ()=> history.push('/home') }>
        welcome
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
);

export default App;