
import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {

  const auth = localStorage.getItem('user');

  const navigate = useNavigate()

  const logOut = ( )=> {
    localStorage.clear();
    navigate('/register');
  }

  return (
    <>
      <div className="navbar justify-content-between px-3 py-4 bg-primary-subtle">
        <h3 className="mb-0">E-Dashboard</h3>
        <ul className="nav gap-4">
          <li className="nav-item"><Link to='/' className="text-decoration-none text-black">Products</Link></li>
          <li className="nav-item"><Link to='/add' className="text-decoration-none text-black">Add Product</Link></li>
          <li className="nav-item"><Link to='/update' className="text-decoration-none text-black">Update Product</Link></li>

          <li className="nav-item"><Link to='/profile' className="text-decoration-none text-black">Profile</Link></li>
          <li className="nav-item">
            {
              auth ? <Link to='/register' onClick={logOut} className="text-decoration-none text-black">Log Out</Link>
                : <Link to='/register' className="text-decoration-none text-black">Sign Up</Link>
            }
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
