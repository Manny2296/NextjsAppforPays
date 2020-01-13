import React, { Component } from 'react';
import Layout from '../../components/Layout';


class productDetail extends Component {
  constructor(props){
      super(props)
      this.state = {
          product : this.props.product,
         queryval : this.props.queryval
      }
  }
  render() {
    return (
        <Layout>
      <div> textInComponent for product {this.state.queryval}  Product : {this.state.product[0].name} </div>
      </Layout>
    );
  }
  
}

productDetail.getInitialProps = async({ query }) => {
  
    const res = await fetch('http://localhost:8080/products/'+ query.id);
    const data = await res.json();
    //console.log('https://winged-pen-261210.appspot.com/users/'+ query.id)
      //console.log(JSON.stringify(data));
    return {
      product: data,
      queryval : query.id
    }
  }

export default productDetail;
