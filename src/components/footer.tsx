import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const MyFooter = () => (
    <Footer style={{ textAlign: 'center', padding: '20px 50px', backgroundColor: '#001529', color: '#fff' }}>
      © 2024 Game of Thrones {new Date().getFullYear()} . All Rights Reserved.
    </Footer>
  );
  
  export default MyFooter;