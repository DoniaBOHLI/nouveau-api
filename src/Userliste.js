import React from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Userliste() {

    const [ list,setList] = React.useState([]);

    React.useEffect(() => {  
        axios.get('https://jsonplaceholder.typicode.com/users')
 .then(function (response) {
 
    setList(response.data);
 })
.catch(function (error) {
   
   console.log(error);
 })
    },[])
console.log(list)
    const users =  list.map((item) => 
    <div> <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Title>{item.street}</Card.Title>
        <Card.Title>{item.suite}</Card.Title>
        <Card.Title>{item.id}</Card.Title>
      <Card.Text>
             {item.username} {item.email}
         </Card.Text>
         
   </Card.Body>
  </Card></div>
    
    )
  
return (
    <div>{users}</div>
  )
}
