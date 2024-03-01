
import './App.css'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import { useState } from 'react'
import validation from './Validation'

function App() {
    const [values ,setValues] = useState({
      username:'',
      email:'',
      password:'',
      confirm_password:''
    })

    const [errors,setErrors]=useState({})

    const handleInput =(e)=>{
       setValues(prev=>({...values,[e.target.name]:[e.target.value]}))
    }

    function handleValidation(e){
      e.preventDefault()
      setErrors(validation(values))

    }
  return (
    <>
     <div>
      
      <div id='back'  className='bg-dark rounded mt-5 d-flex justify-content-center align-items-center flex-column'>
       <form action="" onSubmit={handleValidation}>
       <h1 style={{textAlign:'center', color:'white'}}>Sign In</h1>
        <div className="mb-3 mt-5">
         
        <TextField name='username' onChange={handleInput} className='form-control w-100' style={{marginRight:'370px'}} id="outlined-basic" color="warning" label="Name" variant="outlined" />
        {errors.username && <p style={{color:'red'}}>{errors.username}</p>}
       <div className="mb-3 mt-4"> 
       <TextField name='email' onChange={handleInput} className='form-control w-100' style={{marginRight:'320px'}} id="outlined-basic" color="warning" label="Email" variant="outlined" />
       {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
       </div>
       
        <div className="mb-3 mt-4">
          <TextField name='password' onChange={handleInput} className='form-control w-100' style={{marginRight:'320px'}} id="outlined-basic" color="warning" label="Password" variant="outlined" />
          {errors.password && <p style={{color:'red'}}>{errors.password}</p>}</div>
        <div className="mb-3 mt-4">
          <TextField name='confirm_password' onChange={handleInput} className='form-control w-100' style={{marginRight:'320px'}} id="outlined-basic" color="warning" label="Confirm Password" variant="outlined" />
          {errors.confirm_password && <p style={{color:'red'}}>{errors.confirm_password}</p>}
          </div>

        </div>
        <div id='butt' className="mb-3 d-flex justify-content-between align-items-center">
          <Button id='reset' variant="outlined" color='secondary' style={{height:'60px', width:'190px'}}>Cancel</Button>
          <Button id='sub'  variant="contained" color='success' style={{height:'60px', width:'190px'}} type='submit'>Sign In</Button>
          </div>
       </form>
      </div>

     </div>
    </>
  )
}

export default App
