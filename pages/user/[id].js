
import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch';
import "../../components/Table.scss"
import {imgupload} from '../../components/image/outbox.png'
import React, { Component } from 'react';
import Router from 'next/router'
import { Button, Container,Box } from '@material-ui/core';
import { _updateUser } from "../../actions/userAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { _updateImageUser } from "../../actions/userAction";
import { faBackward, faUserEdit, faSave } from '@fortawesome/free-solid-svg-icons';


const stylebutton = {
  background: 'linear-gradient(45deg, rgb(254, 107, 139) 30%, rgb(255, 142, 83) 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  width : '100%',
  height: 48,
  padding: '0 10px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
 // marginLeft: 20,
  marginTop: 5,
 // marginRight: 20
};
const stylebackbutton = {
 background: 'linear-gradient(45deg, #00e676 30%, #66ffa6 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  width : '100%',
  height: 48,
  padding: '0 20px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
 // marginRight: 20,
  marginTop: 5,
  marginBottom: 10,
  //marginLeft: 20,
};
const textinput = {
  background: 'linear-gradient(45deg, #fafafa 30%, #f5f5f5 90%)',
  borderRadius: 3,
  fontSize: 18,
  fontFamily: 'Garamond',
  color: 'black',
  height: 35,
  padding: '0 10px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  
}
const imgstyle ={
  
  width: 100,
  height:100,
 // padding: '0 5px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  marginLeft: 30,
 // resizeMode: 'stretch',
  
}
const imguplod = {
    display: 'none'
  
}
const textinputdisabled = {
  background: '#e0e0e0',
  borderRadius: 3,
  fontSize: 18,
  fontFamily: 'Garamond',
  color: 'black',
  height: 35,
  
  padding: '0 20px',
 
 
}
class userprofile extends Component {
  constructor(props){
    super(props)
    this.state = {
      disable : true,
      user : this.props.user,
      idusuario: this.props.user[0].idusuario,
      name : this.props.user[0].name,
      surname : this.props.user[0].surname,
      id_Document : this.props.user[0].id_Document,
      mail : this.props.user[0].mail,
      telephone : this.props.user[0].telephone,
      password : this.props.user[0].password,
      image_user: this.props.user[0].image_user,
      selectedFile: null,
      imagePreviewUrl : null,
    
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlesurnameChange = this.handlesurnameChange.bind(this);
    this.handleNoDocumentChange = this.handleNoDocumentChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this)
    this.URL_IMAGE_COMMON = 'http://localhost:8080/users/';
    
  }
  handleNameChange(event) { 
    this.setState({name: event.target.value});
  }
  handlesurnameChange(event) {  
    this.setState({surname: event.target.value});
  }
  handleNoDocumentChange(event) {  
    this.setState({id_Document: event.target.value});
  }
  handleEmailChange(event) {  
    this.setState({mail: event.target.value});
  }
  handleTelephoneChange(event) {  
    this.setState({telephone: event.target.value});
  }
  handlepasswordChange(event) {  
    this.setState({password: event.target.value});
  }


  handleUpdateUser() {
    if(this.state.disable){
      this.setState( {disable: !this.state.disable} )
    }  
  } 
  
  handleSaveUser(){
    var _userupdt = [{idusuario:this.state.idusuario,name:this.state.name,surname:this.state.surname,id_Document:this.state.id_Document,mail:this.state.mail,password:this.state.password,telephone:parseInt(this.state.telephone)}]
     console.log("toupdate" + _userupdt)
    _updateUser(_userupdt)
    _updateImageUser(this.state.selectedFile,this.state.idusuario)
    this.setState({disable: true})

  }
  handleUploadImage(event){
    this.setState({
      selectedFile: event.target.files[0]
    })
  
    let reader = new FileReader();
     
    reader.onloadend = () => {
     
      this.setState({
        imagePreviewUrl: reader.result
      });
   
    }
    
    try {
      reader.readAsDataURL(event.target.files[0])
    } catch (error) {
    
    }
   
 
  }

  imgbasedonstate(){
    if(this.state.image_user != "" || this.state.imagePreviewUrl !== null )
    {
      
      //console.log('ppar if' + this.state.image_user )
      return (
        <img style={imgstyle}  src={(this.state.imagePreviewUrl !== null)? this.state.imagePreviewUrl :  this.URL_IMAGE_COMMON + this.state.image_user}/>


      )
    }
    else 
   // console.log('ppar else - -' + this.state.image_user + '.')
    return(
      
      <img style={imgstyle}  src={require('../../components/image/images.png')}/>

    )
  }
  render() {
  
    return (
      <Layout>    
     
         <Box className="containerDataUser" > 
            <Button title="Volver al menu de usuarios" style={stylebackbutton} size='large' variant='contained' onClick={() => Router.back()}><FontAwesomeIcon icon={faBackward}/>&nbsp;Volver</Button>
            <table>
           
            <tbody>
              <tr>
                <th>
                Nombre
                </th>
                <th>
            <input type="text" style={(this.state.disable)? textinputdisabled : textinput}  disabled={(this.state.disable)? "disabled" : ""} value={this.state.name} onChange={this.handleNameChange} />
                
                </th>
              </tr>
              <tr>
                <th>
                Apellido 
                </th>
                <th>
            <input type="text" style={(this.state.disable)? textinputdisabled : textinput} disabled={(this.state.disable)? "disabled" : ""} value={this.state.surname} onChange={this.handlesurnameChange} />
                </th>
              </tr>
              <tr>
                <th>
                No Documento 
                </th>
                <th>
                <input type="number" style={(this.state.disable)? textinputdisabled : textinput} disabled={(this.state.disable)? "disabled" : ""} value={this.state.id_Document} onChange={this.handleNoDocumentChange} />

                </th>
              </tr>
             
              <tr>
                <th>
                 E-mail
                </th>
                <th>
                <input type="email" style={(this.state.disable)? textinputdisabled : textinput} disabled={(this.state.disable)? "disabled" : ""} value={this.state.mail} onChange={this.handleEmailChange} />
                </th>
              </tr>
              <tr>
                <th>
                 Telefono
                </th>
                <th>
                <input type="text" style={(this.state.disable)? textinputdisabled : textinput} disabled={(this.state.disable)? "disabled" : ""} value={this.state.telephone} onChange={this.handleTelephoneChange} />
                </th>
              </tr>
              <tr>
                <th>
                 Contraseña 
                </th>
                <th>
                <input type="password" style={(this.state.disable)? textinputdisabled : textinput} disabled={(this.state.disable)? "disabled" : ""} value={this.state.password} onChange={this.handlepasswordChange} />
                </th>
              </tr>
            </tbody>
          </table>
          
        
          
        <div>
        <div >
         {this.imgbasedonstate()}
        <label >  
       <img title="Cargar imagen para usuario" src={require('../../components/image/outbox.png')}/>
       <input style={imguplod} id="file-input" type="file" onChange={this.handleUploadImage}/>
        </label>
          </div>
        <img   />
        <br/>
           <Button title="Modificar Usuario" onClick={this.handleUpdateUser.bind(this)} variant="contained" style={stylebutton}>&nbsp;Modificar usuario</Button>
        <br/>
           <Button title="Guardar cambios Usuario" onClick={this.handleSaveUser.bind(this)} variant="contained" style={stylebutton}><FontAwesomeIcon icon={faSave}/>&nbsp; Guardar</Button>
     
           </div>
           </Box>
    </Layout>
    );
  }
}

userprofile.getInitialProps = async({ query }) => {
  
  const res = await fetch('http://localhost:8080/users/'+ query.id);
  const data = await res.json();
  //console.log('https://winged-pen-261210.appspot.com/users/'+ query.id)
    //console.log(JSON.stringify(data));
  return {
    user: data
  }
}

export default userprofile