import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>© 2025 Madeira Nobre - Marcenaria Artesanal</p>
      </footer>
    </div>
  )
}

export default App
