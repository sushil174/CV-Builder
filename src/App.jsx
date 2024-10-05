import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import ResumePreview from './components/ResumePreview'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const initalGeneralInfo = {full_name : "Sushil Koregave", 
    email : "sushilkoregave@gmail.com", 
    phone : '787455445', 
    address : 'mumbai, thane'
  }

  const initialEducationInfo = [
    {
      id : '1',
      institute : 'mumbai university',
      study : 'cs',
      timeline : '2022-2023',
      score : '10',
    }
  ]

  const initialExperienceInfo = [
    {
      id : '1',
      company : 'apple',
      position : 'senior dev',
      timeline : '2024-2025',
      description : 'nothing'
    }
  ]
  const educationLabels = [
    {label : "Institute", name :"institute" },
    {label : "Study", name :"study" },
    {label : "Timeline", name :"timeline" },
    {label : "Score", name :"score" },
  ]

  const experienceLabels = [
    {label : "Company", name :"company" },
    {label : "Position", name :"position" },
    {label : "Timeline", name :"timeline" },
    {label : "Description", name :"description" },
  ]


  const [generalInfo, setGeneralInfo] = useState(initalGeneralInfo)
  const [educationInfo, setEducationInfo] = useState(initialEducationInfo)
  const [experienceInfo, setExperienceInfo] = useState(initialExperienceInfo)

  const handleName = (e) => {
    setGeneralInfo({
      ...generalInfo,
      [e.target.name] : e.target.value
    })
  }

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
  
  const addEdu = () => {
    const newEducation = {...initialEducationInfo, id:uuidv4() , institute : "New Institute"}
    setEducationInfo(prev => [...prev, newEducation])
  }

  const deleteEdu = (id) => {
    return function() {
      const updatedEducation = educationInfo.filter(edu => {
        return edu.id !== id
      })
      setEducationInfo(updatedEducation)
    }
  }


  const handleCompany = (id,e) => {
    setExperienceInfo(experienceInfo.map(work => {
      if(work.id === id) {
        return {
          ...work,
          [e.target.name]:e.target.value
        }
      }
      else {
        return work
      }
    }))
  }

  const deleteExp = (id) => {
    return function() {
      const updatedExerience = experienceInfo.filter(work => {
        return work.id !== id
      })
      setExperienceInfo(updatedExerience)
    }
  }
  
  const addExp = () => {
    const newExperience = {...initialExperienceInfo, id:uuidv4(), company : "new company"}
    setExperienceInfo(prev => [...prev, newExperience])
  }


  return (
    <div className='container'>
      <div className='fill-in'>
        <GeneralInfo info = {generalInfo} nameChange={handleName} />
        <Education labels={educationLabels} info={educationInfo} intituteChange={handleInstitute} deleteEdu={deleteEdu} addEdu={addEdu}/>
        <Experience labels={experienceLabels} info={experienceInfo} companyChange={handleCompany} deleteExp={deleteExp} addExp={addExp}/>
      </div>
      <ResumePreview info={generalInfo} eduInfo={educationInfo} expInfo={experienceInfo}/>
    </div>
  )
}

export default App
