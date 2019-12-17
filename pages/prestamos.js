import Layout from "../components/Layout";
import Link from "next/link";
import React, { Component } from 'react';
import Router from 'next/router'
import { Button, Box, TextField} from "@material-ui/core";
import "../components/Table.scss"
import { _getUserbyid } from "../actions/userAction";

class pagos extends Component {
 
  constructor(props){
    super(props)
    this.state ={
      queryval : this.props.queryval,
      userdata : [],
      noDocument : '',
    }
    this._handleNoDocChange = this._handleNoDocChange.bind(this);
  }
  static getInitialProps({query}) {
    console.log("valor"+query.user)
    if(query.user ==undefined){
      console.log("Render normal")
    }
    else
   
    console.log("Render based on user " + query.user)

    return {queryval:query}
  }
  _handleNoDocChange(event){
    
    this.setState({noDocument: event.target.value});

  }
  _handleLoadUser(){
    return _getUserbyid(this.state.noDocument).then(res => {
      this.setState({userdata : res[0]})
     
    }
    ).catch(error => console.log(error))
   // console.log('get user> ' + data)
   
  }

  _renderbasedonQueryvalue(){
    console.log('RENDERRRS')
    console.log("fuck"+ this.state.userdata.name)
  
    if(this.state.queryval.user ==undefined){
      return(
        <div className='divPrestamos'>  
       <Box className='containerDataUser' >
          
         <TextField value={this.state.noDocument} onChange={this._handleNoDocChange} label="Numero de Documento" />
         <Button variant="contained" color="primary" onClick={this._handleLoadUser.bind(this)} >Consultar </Button>
       </Box>
       <br/>
           <Box className='containerDataUser'>
         <label>{this.state.userdata.name}</label>
           </Box>
           </div>
      )
    }
    else
   
    return(
    <div>Render with value {query}</div>
    )
  }

  _doclick(){
    const href = `/prestamos?user=15155`
    Router.push(href, href, { shallow: true })
  }
  
  render() {
    return (
      <Layout>
        
      <br />
     {this._renderbasedonQueryvalue()}
      
    </Layout>
    );
  }
}

export default pagos;

