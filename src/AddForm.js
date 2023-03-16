import React from 'react'
const AddForm=props=>{
 let   nameref=React.createRef();
 let   priceref=React.createRef();
let Add=()=>{
    
    let name=nameref.current.value;
    let price=priceref.current.value;
    if(name==="" || price===""){
        alert("name or pricing is missing")
    }
    else{props.add(name,price)}
    nameref.current.value="";
    priceref.current.value="";
}
    return(
        <div className='col-4 form m-auto mt-4'>
           <label htmlFor="name" className='form-label'>Name</label>
            <input type="text" id='name' className='form-control' ref={nameref} />
            <small className='text-danger d-none' id='namerr'>
                Name is missing
            </small>
            <br />
            <label htmlFor="price" className='form-label'>Price</label>
            <input type="text" id='price' className='form-control' ref={priceref} />
            <small id='pricerr' className='text-danger d-none' >
                Price is missing
            </small>
            <br />
            <button className='btn btn-primary px-5 mt-4' onClick={Add}>Add</button>
        </div>
    )
}
export default AddForm;