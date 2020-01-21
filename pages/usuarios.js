

import Layout from '../components/Layout';
import  TableUsers  from "../components/TableUsers";
import React, { Component } from 'react';
import { _loadUsuarios } from "../actions/userAction";

/* PARA COMPILAR LA APLICACION CORRECTAMENTE _ 
   EJECUTAR NPM RUN DEV DESPUES DE HABER INGRESADO CORRECTAMENTE AL PATH DEL PROYECTO
*/

/*const style = {
  background: 'linear-gradient(45deg, #66bb6a 30%, #a5d6a7 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};
const stylemodify = {
  background: 'linear-gradient(45deg, #ffeb3b 30%, #fff176 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};*/


class usuarios extends Component {
  constructor(props) { 
    super(props)
    this.state = { users: [], numRows:0}
  }
  
  render() {
    console.log("RENDER")
    return (
      <Layout>
        <TableUsers/>  
      </Layout>
   
    );
  }
}

export default usuarios;





