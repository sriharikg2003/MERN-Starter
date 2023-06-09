import {useState,useEffect} from 'react';
import Axios from 'axios';
function App() {

  const [users,setUsers] = useState([])
  const [name,setName] = useState ("")
  const [email,setEmail] = useState ("")
  const [password,setPassword] = useState ("")
  useEffect( ()=>{

    Axios.get("http://localhost:3001/getUsers").then(response =>{
     setUsers( response.data)
    })

  
  },[])


  function handleClick()
  {
    Axios.post("http://localhost:3001/addUser",{
      name : name,
      password: password,
      email: email
    }).then(response =>{
      
      setUsers([...users,{name:name,password:password,email:email}]);
    })

  }


  return (
    <div className="App">
        {
          users.map( (user) =>
            {return (

                <div>
                    <h2> Name : {user.name}</h2>
                    <h3> Email : {user.email}</h3>
                    <h4> Password : {user.password}</h4>
                </div>

            )}
          )
        }




        <div>
          <input type='text'  placeholder='name' name='name' onChange={  (event)=> {setName(event.target.value)} } />
          <input type='text'  placeholder='email' name='email'  onChange={ (event)=> {setEmail(event.target.value)} }/>
          <input type='text'  placeholder='password' name='password' onChange={ (event)=> {setPassword(event.target.value)} } />
          <button type='submit' onClick={handleClick}>Click</button>
        </div>
    </div>
  );
}

export default App;
