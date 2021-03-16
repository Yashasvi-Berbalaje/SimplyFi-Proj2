import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row } from 'antd';
import UserCard from './UserCard';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setUsers(data)
      setLoading(false)
    })
  },[])
 
  const deleteUser=(id)=>{
    setUsers(users.filter(user=>user.id!==id))
  }

  return (
    loading===true?(
      <div class="sk-fading-circle">
      <div class="sk-circle1 sk-circle"></div>
      <div class="sk-circle2 sk-circle"></div>
      <div class="sk-circle3 sk-circle"></div>
      <div class="sk-circle4 sk-circle"></div>
      <div class="sk-circle5 sk-circle"></div>
      <div class="sk-circle6 sk-circle"></div>
      <div class="sk-circle7 sk-circle"></div>
      <div class="sk-circle8 sk-circle"></div>
      <div class="sk-circle9 sk-circle"></div>
      <div class="sk-circle10 sk-circle"></div>
      <div class="sk-circle11 sk-circle"></div>
      <div class="sk-circle12 sk-circle"></div>
    </div>
    ):(
      <Row>  
         {
           users.map(user=>(
             <UserCard user={user} deleteUser={deleteUser}  key={user.id}/>
             ))
         }
      </Row>     
      )
  )
}

export default App;