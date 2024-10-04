import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import ResumePreview from './components/ResumePreview'
import './App.css'

function App() {

  const initalGeneralInfo = {full_name : "Sushil Koregave", 
    email : "sushilkoregave@gmail.com", 
    phone : '787455445', 
    address : 'mumbai, thane'
  }

  const initialEducationInfo = [
    {
      id : '1',
      institute : 'first',
      study : '',
      timeline : '',
      score : '',
    },
    {
      id : '2',
      institute : 'second',
      study : '',
      timeline : '',
      score : '',
    },
    {
      id : '3',
      institute : 'second',
      study : '',
      timeline : '',
      score : '',
    }

  ]
  const [educationInfo, setEducationInfo] = useState(initialEducationInfo)
  const [generalInfo, setGeneralInfo] = useState(initalGeneralInfo)

  const handleInstitute = (id,e) => {
    setEducationInfo(educationInfo.map(edu => {
      if(edu.id === id) {
        return {
          ...edu,
          [e.target.name]:e.target.value
        }
      }
      else {
        return edu
      }
    }))
  }

  const handleName = (e) => {
    setGeneralInfo({
      ...generalInfo,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className='container'>
      <GeneralInfo info = {generalInfo} 
      nameChange={handleName} 
    />

    <Education info={educationInfo} intituteChange={handleInstitute}/>
    <ResumePreview info={generalInfo} eduInfo={educationInfo}/>
    </div>
  )
}

export default App
