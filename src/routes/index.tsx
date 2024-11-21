import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Kanban from '../pages/Kanban/Kanban'
import { TaskForm } from '../components'

const Routers = () => {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path='/' element={<Navigate to='./kanban' />} />
          <Route path='/kanban' element={<Kanban />}>
            <Route path='create' element={<TaskForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routers