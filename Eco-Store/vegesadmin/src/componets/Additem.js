import { useState} from 'react'
import React from 'react'
import classes from './Additem.module.css'

const Additem = () => {
//checks input values
  const [inputs, setInputs] = useState({
    productName:'',
    brand: '',
    price: ''
  });

  const { productName ,brand , price} = inputs;
//capture inputs
  const onChange = (e) =>{
    setInputs({
      ...inputs, [e.target.name] :e.target.value
    })

  }
  //file
  const [fileData ,setFileData] = useState();
  const fileChange=(e)=>{
    setFileData(e.target.files[0]);
  };

  const onSubmitForm = async (e) =>{
    e.preventDefault();
    console.log(inputs);

    try {
      const body = { productName, brand, price};

      const response = await fetch("http://localhost:5000/products" ,{            
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(body)  
      });
       console.log("product  added succesfully");
      
    } catch (error) {
      console.error(error.message)
      
    }
    try {
      const data = new FormData();
      data.append('image',fileData)
      fetch("http://localhost:5000/upload",{
        method:"POST",
        body:data,
      }).then((result) =>{
        console.log("file Sent Successful")
      })
      
    } catch (error) {
      console.error(error.message)
      
    }
  }


  return (
    <div>
   
        
    <div className={classes.container}>
        <form>
            <h2>Add New Item</h2>

            <input type="text" placeholder='productName'
            onChange={e => onChange(e)}
            name="productName"
            value={productName}/>
            <input type="text" placeholder='productbrand'
            onChange={e => onChange(e)}
            name="brand"
            value={brand}/>
            <input type="text" placeholder='productprice'
            onChange={e=> onChange(e)}
            name="price"
            value={price}/>

            <input type="file" placeholder='productimage'
            onChange={fileChange}/>

            <button type='submit'
            value="send" onClick={onSubmitForm}>Add Item</button>
        </form>
    </div>
    
    </div>
  
  )
}

export default Additem;