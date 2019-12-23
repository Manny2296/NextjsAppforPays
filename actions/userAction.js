import fetch from 'isomorphic-fetch';
export function _createUser(data) {
    return fetch('http://localhost:8080/users/', {
        method: 'POST',
         
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
       console.log("Reponse" + JSON.stringify(res))
        return res;
    }).catch(err => err);
}
export function _updateUser(data) {
  //  console.log("toPut> " + JSON.stringify(data))
    return fetch('http://localhost:8080/users/', {
        method: 'PUT',
         
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
       console.log("Reponse" + JSON.stringify(res))
        return res;
    }).catch(err => err);
}
export function _deleteUser(data) {
    console.log('datadelete' + data.idusuario);
    return fetch('http://localhost:8080/users/'+data.idusuario, {
        method: 'DELETE',
         
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
       //console.log("Reponse" + JSON.stringify(res))
        return res;
    }).catch(err => err);
}

export async function _getUserbyid(data) {
   // console.log('getUserData>' + data);
    const res = await fetch('http://localhost:8080/users/'+ data);
    const responseJson = await res.json();
  // console.log("return" + JSON.stringify(responseJson))
    return responseJson
}
export async function _updateImageUser(file,id){
    var formData = new FormData();
    formData.append("file",file);
    formData.append('name', 'nametest');
    formData.append('description', 'some value test');
   // console.log(this.state.selectedFile);
//console.log('http://localhost:8080/users/'+this.state.idusuario+ '/avatar')

return fetch('http://localhost:8080/users/'+id+ '/avatar', {
method: 'POST',
 
body: formData,

}).then(res => {

//console.log("Reponse" + res)
return res;
}).catch(err => err);


}