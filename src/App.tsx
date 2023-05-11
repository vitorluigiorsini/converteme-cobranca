import { Option, Sidebar } from './components'

const App = () => {
  return (
    <>
      <h1 className="flex justify-center items-center h-[65px] w-full text-white font-bold bg-secondary">
        Navbar
      </h1>
      <div className="flex">
        <Sidebar />
        <Option />
      </div>
    </>
  )
}

export default App
