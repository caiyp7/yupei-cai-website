import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', cn: '首页' },
    { path: '/about', label: 'About', cn: '关于我' },
    { path: '/research', label: 'Research', cn: '研究方向' },
    { path: '/publications', label: 'Publications', cn: '论文成果' },
    { path: '/projects', label: 'Projects', cn: '项目 / 作品' },
    { path: '/teaching', label: 'TA', cn: '教学' },
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Yupei Cai
        </Link>
        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={location.pathname === item.path || (item.path === '/about' && location.pathname === '/contact') ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

