import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar' >
        <div className="navContainer">
            <div className="logo">lamaBooking</div>
            <div className="navItems">
                <button className="navBtn">Login</button>
                <button className="navBtn">Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar