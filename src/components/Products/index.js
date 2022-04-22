import React , {useState} from 'react';
import axios from 'axios';








let Products = () => {
  let [users,setUsers] = useState([])

  let grapper = async ()=> {
    let data = await axios.get("https://jsonplaceholder.typicode.com/users").catch(err => { setUsers([{id : 222}]) });
    let finalData = await data.data
   
    setUsers(finalData)
   
    
  }
  grapper()
  let [myProducts,setmyProducts] = useState({
    products : [
      {id : 1 , name : "pc" , price : 20},
      {id : 2 , name : "mob" , price : 200},
      {id : 3 , name : "phhc" , price : 30},
      {id : 4 , name : "phhhh" , price : 820},
      {id : 5 , name : "puuuuc" , price : 220},
    ]
  });
  let {products} = myProducts;
  return(
    
      <>
    {users.map(user=>{
      return(
        <div key={user.id}>{user.phone}</div>
      )
    })}
      {products.map(product => {
        return <div key={product.id}>{product.id} {product.name} {product.price}</div>
      })}
      
      </>
    
  )
}

export default Products