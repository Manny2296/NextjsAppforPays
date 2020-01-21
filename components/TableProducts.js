import  { Component } from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { _createProduct } from "../actions/productAction";
import { _updateProduct } from "../actions/productAction";
import { _deleteProduct } from "../actions/productAction";
import "./Table.scss"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const columns =  [
 {title:'Id', field:'id', type:'numeric', hidden: true},
  { title: 'Producto', field: 'name' },
  { title: 'Descripcion', field: 'description' },
  {
    title: 'Codigo del Producto',
    field:'cod_product',
    type: 'numeric',
  },
  {
    title: 'Cantidad',
    field:'quantity',
    type: 'numeric',
  },
  {
    title: 'Precio / Unidad',
    field:'price_unity',
    type: 'numeric',
  },
  {
    title: 'Precio Total',
    field:'total_price',
    type: 'numeric',
  }

]
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  
};

class TableProduct extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [],
      
      //isLoading: false // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche        
     }
     this._loadProducts() 
  }
  async _loadProducts(){
    const res = await fetch('http://localhost:8080/products/');
    const data = await res.json();
    
    //console.log(`Show data fetched. Count: ${data.length}`  );
    
 
    this.setState(
      { 
        products: [...this.state.products, ...data],  // une autre sintaxys  films: this.state.films.concat(data.results)
       // films: data.results,  // une autre sintaxys  films: this.state.films.concat(data.results)
     
       
      }
    )
  //  console.log("Rowsusu"+this.state.numRows)
  }
 
  render() {
  
   
    return (
      
     <Paper className='container'>
    <MaterialTable
       icons={tableIcons}
       
       title="Lista de Productos"
       columns={columns}
       data={this.state.products}
       actions={[
        {
          
          icon: LocalMallIcon,
          tooltip: 'Detalles producto',
          onClick: (event, rowData) => //alert("You saved " + rowData.name)window.location.href
          window.location.href = `/producto/${rowData.id}`
           
        }
       ]}
    
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              _createProduct(newData)
             
              this.setState(
                { 
                  products: [...this.state.products,newData]
                }
              )              
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {                            
                let toPut = Object.values(newData);
                let tmp 
                var arraytoPut = [{id:toPut[0],name:toPut[1],description:toPut[2],cod_product:parseInt(toPut[3]),quantity:parseInt(toPut[4]),price_unity:parseInt(toPut[5]),total_price:parseInt(toPut[6])}]
               //   console.log("toPut> " + JSON.stringify(toPut))
                  _updateProduct(arraytoPut);
               
                  this.setState(prevState => {
                    const products = [...prevState.products];
                    products[products.indexOf(oldData)] = newData;
                    return { ...prevState, products };
                  });
                                                         
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              console.log(JSON.stringify(oldData))
              _deleteProduct(oldData)
              this.setState(() => {
      
                return { products:this.state.products.filter(item => item.id !== oldData.id) };
              });
            }, 600);
          }),
     
      }}
    />
    </Paper>
    
    
    );
  }
}


export default TableProduct;
