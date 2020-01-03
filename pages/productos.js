import React, { Component } from 'react';
import Layout from '../components/Layout';
import  TableProducts  from "../components/TableProducts";
class productos extends Component {
  render() {
    return (
        <Layout>
       <TableProducts/> 
      </Layout>
    );
  }
}

export default productos;
