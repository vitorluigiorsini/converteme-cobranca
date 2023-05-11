import { Payment } from '.'

const Option = () => {
  return (
    <div className="bg-grey flex-1 w-full flex flex-col items-center py-[52px]">
      <div className="flex flex-col items-start w-[811px]">
        <a className="block mb-5 text-base font-medium text-secondary" href="#">
          {'<- VOLTAR'}
        </a>
        <h1 className="mb-[30px] text-xs font-bold text-primary">COBRANÇA</h1>
        <Payment />
      </div>
    </div>
  )
}

export default Option
