import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'
import { Sidebar } from './shared/components'

const App = () => {
  return (
    <BrowserRouter>
      <nav className="flex justify-center items-center h-[65px] w-full text-white font-bold bg-secondary">
        Navbar
      </nav>
      <Sidebar>
        <AppRoutes />
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
