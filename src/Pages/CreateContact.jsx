import React from 'react'
import Sidebar from '../Components/Sidebar'
import CreateForm from '../Components/CreateForm'
import CreateHead from '../Components/CreateHead'
const CreateContact = () => {
  return (
    <Sidebar>
      <div className=" container">
      <CreateForm />
    </div>
    </Sidebar>
  )
}

export default CreateContact
