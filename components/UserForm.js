
import "../components/Table.scss";
import "./Layout.scss";


class UserForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {idusuario:43,name: '',surname:'',id_Document:'',mail:'',password:'',telephone:''};
      this.dataUser = []
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleSurnameChange = this.handleSurnameChange.bind(this);
      this.handleNoDocChange = this.handleNoDocChange.bind(this);
      this.handleMailChange = this.handleMailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
     this.handleTelephoneChange = this.handleTelephoneChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      //console.log(this.state.numRows)
      
    }
    static getDerivedStateFromProps(props,state) {
          console.log("App" + props.numRows + "- " + state.numRows)
         // console.log(state.users.length)
          if(props.numRows != state.numRows){
            return {
                users: props.users,
                numRows : props.numRows 
               };
          }
          
          return null;
          //{}
    
     }
   
    handleNameChange(event) {
      this.setState({name: event.target.value});
    }
    handleSurnameChange(event)
    {
        this.setState({surname: event.target.value});
      }
      handleNoDocChange(event)
    {
        this.setState({id_Document: event.target.value});
      }
      handleSurnameChange(event)
    {
        this.setState({surname: event.target.value});
      }
    handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.dataUser = [{idusuario:this.state.idusuario, name:this.state.name,surname:this.state.surname,id_Document:this.state.id_Document,mail:this.state.mail,password:this.state.password,telephone:this.state.telephone }],
      
    console.log("d"+ this.state.idusuario);
      console.log("Handle" + this.props.numRows + "- " + this.state.numRows)
      //console.log("users" + this.state.users)
    }
    handleMailChange(event)
    {
        this.setState({mail: event.target.value});
      }
      handlePasswordChange(event)
    {
        this.setState({password: event.target.value});
      }
      handleTelephoneChange(event)
      {
          this.setState({telephone: event.target.value});
        }
    render() {
      return (
          <div className="Content">
        <form  onSubmit={this.handleSubmit}>
    
          <label>
            Nombre :
            <input type="text" value={this.state.name} onChange={this.handleNameChange()} />
          </label>
          <br />
          <label>
            Apellido :
            <input type="text" value={this.state.surname} onChange={this.handleSurnameChange()} />
          </label>
          <br />
          <label>
            No Documento :
            <input type="text" value={this.state.noDoc} onChange={this.handleNoDocChange} />
          </label>
          <br />
          <label>
            Mail :
            <input type="text" value={this.state.mail} onChange={this.handleMailChange} />
          </label>
          <br />
          <label>
            Password :
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
          <br />
          <label>
            Telefono :
            <input type="text" value={this.state.telephone} onChange={this.handleTelephoneChange} />
          </label>
          <br />
          <input type="submit" value="Envoyer" />
        </form>
        
      
      </div>
    );
    }
  }
  export default UserForm;