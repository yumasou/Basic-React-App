import React from 'react'
import  createRef  from 'react'
class AddForm extends React.Component{
    nameref = React.createRef();
    priceref = React.createRef();
    add=()=>{
        let name=this.nameref.current.value;
        let price=this.priceref.current.value;
        this.props.add(name,price)
        this.priceref.current.value=""
        this.nameref.current.value=""

    }
    
render(){
    return(
        <div className='col-6 m-auto border border-3 border-success'>
            <input type="text" className='form-control mt-3' ref={this.nameref} placeholder='Enter name'/>
            <input type="text" className='form-control mt-3' ref={this.priceref} placeholder='Enter price' />
            <button className='btn btn-primary mt-3' onClick={this.add}>Submit</button>
        </div>
    )
}
}
export default AddForm;