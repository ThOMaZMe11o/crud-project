import { useState } from 'react'
import './App.css'
import ModalForm from './components/Modalform'
import Navbar from './components/Navbar'
import TableList from './components/TableList'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modelMode, setmodalMode] = useState('add');

  const handleOpen = (mode) => {
    setIsOpen(true);
  }

  const handleSubmit = () => {
    if (modelMode === 'add') {
      console.log('modal mode add');
    } else {
      console.log('modal mode edit')
    }
  }

  return (
    <>
      <Navbar onOpen={() => handleOpen('add')} />
      <TableList />
      <ModalForm 
        isOpen={isOpen} onSubmit={handleSubmit}
        onClose={() => setIsOpen(false)} />
    </>
  )
}

export default App 
