import Layout from "../components/Layout";
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Router from 'next/router'
import { Button, Box, TextField} from "@material-ui/core";
import "../components/Table.scss"
import { _getUserbyid } from "../actions/userAction";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

import MoreVertIcon from '@material-ui/icons/MoreVert';
const stylebackbutton = {
  background: 'linear-gradient(45deg, #409946 30%, #66BB6A 90%)',
  color:'white'
}
class pagos extends Component {
 
  constructor(props){
    super(props)
    this.state ={
      queryval : this.props.queryval,
      userdata : this.props.userdataprops,
      dataExist : this.props.dataexistprops,
      noDocument :this.props.queryval,
    }
    this._handleNoDocChange = this._handleNoDocChange.bind(this);
  }
  
  _handleNoDocChange(event){
 
   this.setState({noDocument: event.target.value});
  
  }
  _handleLoadUser(){
    if(this.state.noDocument != ''){
      //console.log("entre")
      return _getUserbyid(this.state.noDocument).then(res => {
        if(res !== null){
          this.setState({userdata : res[0],
            dataExist: true,
            })
             this._doclick()
        }
    }    ).catch(error => console.log(error))
  }
     else{
       console.log("else entre")
       return(
      this.setState({userdata : [],
        dataExist: false,
        }))
        // this._doclick()
     }
    }

   // console.log('get user> ' + data)
   
  

  _rendercardPrestamos()
  {
 //  console.log(this.state.userdata + '---------->')
    
    if(this.state.dataExist)  
     {
      if(this.state.userdata !== undefined  && this.state.userdata.prestamos !== null )
      
      return(
        
      this.state.userdata.prestamos.map(prestamo => (
        
       // console.log("valor prestamo" + prestamo.prestamo_valor),
      <div className={useStyles.card_div_cotainer} key={prestamo.idprestamo}>
    <Card className={useStyles.card}>
      
      <CardHeader
        avatar={
          
          <Avatar  aria-label="recipe" style={{backgroundColor:"#409946"}} >
            P{prestamo.idprestamo}
          </Avatar>
      
        }

        /*action={
         <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }*/
        
        title={"Prestamo No: " + prestamo.idprestamo}
        subheader={"Fecha: " + prestamo.fecha_prestamo}
  
      />
    
      <CardActionArea>
        <CardMedia
          className={useStyles.media}
          image="../../components/image/"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             Prestamo No {prestamo.idprestamo} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             Valor Prestamo : {prestamo.prestamo_valor} <br/>
             No de Cuotas :{prestamo.prestamo_cuotas} <br/>
             Interes aplicado : {prestamo.prestamo_tax}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver detalles
        </Button>
    
      </CardActions>
    </Card>
    </div>
  ))) }
}

  _renderbasedonQueryvalue(){
  //  console.log('RENDERRRS'+this.state.queryval)
    //console.log("fuck"+ this.state.userdata.name)
    //console.log("Data " +  this.state.userdata.prestamos)
    if(this.state.queryval ==undefined){
      return(
        <div className='divPrestamos'>  
       <Box className='containerDataUser' >
          
         <TextField value={this.state.noDocument || ''} onChange={this._handleNoDocChange} label="Numero de Documento" />
         <Button  variant="contained" style={stylebackbutton}  onClick={this._handleLoadUser.bind(this)} >Consultar </Button>
       </Box>
       <br/>
           <Box className='containerDataUser'>
        
         {this._rendercardPrestamos()
         }
           </Box>
           </div>
      )
    }
    //{}  <label>{this.state.userdata.name}</label>
    else
       
    //console.log('RENDERRRS BASADO EN USUARIO OK')
    return(
      <div className='divPrestamos'>  
      <Box className='containerDataUser' >
         
        <TextField value={this.state.noDocument || ''} onChange={this._handleNoDocChange} label="Numero de Documento" />
        <Button variant="contained" style={stylebackbutton}  onClick={this._handleLoadUser.bind(this)} >Consultar </Button>
      </Box>
      <br/>
          <Box className='containerDataUser'>
       
        {this._rendercardPrestamos()
        }
          </Box>
          </div>
    )
  }

  _doclick(){
    const href = `/prestamos?user=`+ this.state.noDocument
    Router.push(href, href, { shallow: true })
  }
  
  
  render() {
    return (
      <Layout>
        
  
     {this._renderbasedonQueryvalue()}
          
      
    </Layout>
    );
  }
}
 pagos.getInitialProps = async({query}) =>{
  //console.log("valor"+query.user)
  var queryval
  var userdataprops = []
  var dataexistprops = false
  if(query.user ==undefined){
   // console.log("Render normal")
    queryval = undefined,
    userdataprops = [],
    dataexistprops = false    
  }
  else{
    //console.log("Render based on user " + query.user)
    const resp = await _getUserbyid(query.user)
    queryval = query.user
    userdataprops = resp[0]
    dataexistprops = true

    //console.log("!Jso" + JSON.stringify(resp))
    
    
  }
  return {
    queryval : queryval,
    userdataprops : userdataprops,
    dataexistprops : dataexistprops
  }
  


}

const useStyles = makeStyles( theme => ({
  card: {
    maxWidth: 345,
    
  },
  media: {
    height: 140,
  },
   card_div_cotainer: {
    margin: "5px"
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
 
}));


export default pagos;

