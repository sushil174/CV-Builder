import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import ResumePreview from './components/ResumePreview'
import './App.css'

function App() {
  const initalGeneralInfo = {full_name : "Sushil Koregave", email : "sushilkoregave@gmail.com", phone : '787455445', address : 'mumbai, thane'}
  const [generalInfo, setGeneralInfo] = useState(initalGeneralInfo)

  const handleName = (e) => {
    setGeneralInfo({
      ...generalInfo,
      full_name : e.target.value
    })
  }

  const handleEmail = (e) => {
    setGeneralInfo({
      ...generalInfo,
      email : e.target.value
    })
  }

  const handlePhone = (e) => {
    setGeneralInfo({
      ...generalInfo,
      phone : e.target.value
    })
  }

  const handleAddress = (e) => {
    setGeneralInfo({
      ...generalInfo,
      address: e.target.value
    })
  }

  return (
    <div className='container'>
      <GeneralInfo info = {generalInfo} 
      nameChange={handleName} 
      emailChange={handleEmail} 
      phoneChange={handlePhone} 
      addressChange={handleAddress}
    />
    <ResumePreview info={generalInfo}/>
    </div>
  )
}

export default App
