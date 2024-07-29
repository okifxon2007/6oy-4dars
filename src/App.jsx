import { useState } from 'react'
import Header from './components/header'
import './App.css'
import Form from './components/form'

function App() {

  return (
    <>
     <div className="conta">
      <div className="box">
        <Header/>
        <Form/>
      </div>
     </div>
    </>
  )
}

export default App
