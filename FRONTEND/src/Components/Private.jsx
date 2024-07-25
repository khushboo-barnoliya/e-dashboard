
import{Link, Navigate, Outlet} from 'react-router-dom'

const Private = () => {

  const auth = localStorage.getItem('user');

  return auth ? <Outlet /> : <Navigate to='/register' />
}

export default Private
 