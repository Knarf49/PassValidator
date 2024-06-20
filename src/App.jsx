import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import validator from 'validator'


function App() {
  const [error, setError] = useState('')
  console.log(error)
  const validate = (value) =>{
    if(validator.isStrongPassword(value,{minLength: 8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1})){
      setError('Is strong password')
    }else{
      setError("Is not strong password")
    }
  }

  return (
    <div className="body">
      <h1>Checking Password Strength</h1>
      <div className='flex gap-x-3 mt-4 justify-center'>
        <p>Enter Password</p>
        <input type="text" onChange={(e)=> validate(e.target.value)}/><br />
      </div>
      {error === '' ? null :
        <span className='font-bold text-red-700'>{error}</span>
      }
    </div>
  )
}

export default App
