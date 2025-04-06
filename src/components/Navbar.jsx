import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Madeira Nobre</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar