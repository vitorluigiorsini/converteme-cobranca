import { BiMoneyWithdraw, BiMenu } from 'react-icons/bi'
import { HiPencil } from 'react-icons/hi'
import { MdShoppingCart, MdPeople, MdPerson, MdHelp } from 'react-icons/md'
import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiSettings4Fill
} from 'react-icons/ri'
import { RxCaretRight } from 'react-icons/rx'
import { TbFileDollar } from 'react-icons/tb'

const Sidebar = () => {
  return (
    <div className="w-[211px] py-[14px] pr-6 flex flex-col gap-5">
      <div className="text-primary flex items-center h-9 -mb-[15px]">
        <BiMenu size={24} className="ml-4" />
      </div>
      <div className="text-primary flex items-center h-9">
        <RiDashboardFill size={24} className="ml-4" />
        <a className="text-[14px] font-bold pl-2"> Dashboard</a>
      </div>
      <div className="text-primary flex items-center h-9">
        <MdShoppingCart size={24} className="ml-4" />
        <a className="text-[14px] font-bold pl-2">Minhas Vendas</a>
        <RxCaretRight size={24} />
      </div>
      <div className="text-primary flex items-center h-9">
        <RiShoppingBag3Fill size={24} className="ml-4" />
        <a className="text-[14px] font-bold pl-2">Meus Produtos</a>
        <RxCaretRight size={24} />
      </div>
      <div className="text-primary flex items-center h-9">
        <HiPencil size={24} className="ml-4" />
        <a className="text-[14px] font-bold pl-2">Assinaturas</a>
      </div>
      <div className="bg-secondary rounded-r-2xl text-white flex items-center h-9">
        <TbFileDollar size={24} className="ml-4" />
        <a className="text-[14px] font-bold pl-2 cursor-pointer">Cobrança</a>
      </div>
      <div className="text-primary flex items-center h-9">
        <BiMoneyWithdraw size={24} className="ml-4" />
        <a className="text-[14px] font-bold pl-2">Banco Virtual</a>
        <RxCaretRight size={24} />
      </div>
      <div className="text-primary flex items-center h-9">
        <MdPeople size={24} className="ml-4" />
        <a className="text-[14px] font-bold pl-2">Clientes</a>
      </div>
      <div className="text-primary flex items-center h-9">
        <RiSettings4Fill size={24} className="ml-4" />
        <a className="text-[14px] font-bold pl-2">Configurações</a>
        <RxCaretRight size={24} />
      </div>
      <div className="text-primary flex items-center h-9">
        <MdPerson size={24} className="ml-4" />
        <a className="text-[14px] font-bold pl-2">Minha Conta</a>
      </div>
      <div className="text-primary flex items-center h-9">
        <MdHelp size={24} className="ml-4" />
        <a className="text-[14px] font-bold pl-2">Ajuda</a>
      </div>
    </div>
  )
}

export default Sidebar
