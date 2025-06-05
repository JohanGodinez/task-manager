import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout, TaskForm } from '../components';
import Login from '../pages/Login';
import Kanban from '../pages/Kanban';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />

        <Route
          path='/kanban'
          element={
            <ProtectedRoute>
              <Kanban />
            </ProtectedRoute>
          }
        >
          <Route
            path='create'
            element={<TaskForm />}
          />
        </Route>

        <Route
          path='/'
          element={<Navigate to='/kanban' />}
        />

        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default Routers;
