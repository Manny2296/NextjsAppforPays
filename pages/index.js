import Link from "next/link";

import Layout from "../components/Layout";
import { makeStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import "../components/index.scss"


class Index extends Component {
  render() {
    return (
      <Layout>
    
    <div className="containerIndex">
    
      <h3 className="firstlbl"> Bienvenido a PAGOSAPP por:</h3>
      
   
    <a href="http://eco2.com.co">
    <img className="imgstyle"  src={require('../components/image/flower-2.png')}/>
    </a>
    </div>
  </Layout>
    );
  }
}





export default Index;