import React, { Component } from 'react';
import Layout from '../components/Layout';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const rootdiv = {
  width: '100%',
  maxWidth: 360,
  backgroundColor: "white",
  height: 450,
  overflow: 'auto',
  //alignContent: 'center
  //  display:'flex'

}
const colorlistitem={
 color: '#2a3747'

}
const gridList = {
 
   flexDirection: 'row',
    flexGrow: 1
   
  
}
const gridtotal = {
  width: '100%',
  maxWidth: 360,
  padding:4
}
const inline = {
  display: 'inline'
}
const paper ={
    padding:2,
    //textAlign: 'center',
    color: "white",
    
}
const paper_options = {
  height: 350,
  width: 360,
  overflow: 'auto',
  marginBottom: 20,
 // maxWidth: 360,

}
const styletotalbutton = {
  background: 'linear-gradient(45deg, #409946 30%, #66BB6A 90%)',
  color:'white',
  width:'40%' 
}


class Caja extends Component {
   
  render() {

    return (
      <Layout>
       <Grid container spacing={8}>
        <Grid item>
        <List style={rootdiv}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp">RS</Avatar>
        </ListItemAvatar>
        <ListItemText
        style={colorlistitem}
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Cindy Baker">CB</Avatar>
        
        </ListItemAvatar>
        <ListItemText
           style={colorlistitem}
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Cindy Baker">CB</Avatar>
        
        </ListItemAvatar>
        <ListItemText
           style={colorlistitem}
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Cindy Baker">CB</Avatar>
        
        </ListItemAvatar>
        <ListItemText
           style={colorlistitem}
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>

    </List>
    <Grid item xs={12} sm={6} style={gridtotal}>
          <Paper style={paper}>
          <Button variant="contained" disabled style={styletotalbutton}>
    Total
   </Button>
          </Paper>
   </Grid>
   </Grid>
   <Grid item xs={0}>
   <Paper style={paper_options}>
 

   </Paper>
   </Grid>
   </Grid>
      </Layout>
    );
  }
}

export default Caja;
