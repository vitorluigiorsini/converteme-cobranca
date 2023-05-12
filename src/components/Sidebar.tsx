const Sidebar = () => {
  return (
    <div className="w-[211px] px-4 py-[14px] flex flex-col gap-[30px]">
      <a>Dashboard</a>
      <a className="bg-secondary rounded-r-2xl text-white text-lg font-bold">
        Cobrança
      </a>
      <a>Clientes</a>
    </div>
  )
}

export default Sidebar
