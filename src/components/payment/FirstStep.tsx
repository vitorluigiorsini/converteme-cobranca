import { RxCaretDown } from 'react-icons/rx'

const FirstStep = () => {
  return (
    <div className="bg-white w-full px-5 py-[25px] rounded-lg flex flex-col gap-5">
      <div className="w-full flex justify-center">
        <span className="bg-transparent flex items-center justify-center border border-secondary rounded-full text-secondary text-lg font-bold h-9 w-9">
          1
        </span>
        <span className="bg-primary flex self-center h-[2px] w-[169px]"></span>
        <span className="bg-transparent flex items-center justify-center border border-primary rounded-full text-primary text-lg font-bold h-9 w-9">
          2
        </span>
        <span className="bg-primary flex self-center h-[2px] w-[169px]"></span>
        <span className="bg-transparent flex items-center justify-center border border-primary rounded-full text-primary text-lg font-bold h-9 w-9">
          3
        </span>
        <span className="bg-primary flex self-center h-[2px] w-[169px]"></span>
        <span className="bg-transparent flex items-center justify-center border border-primary rounded-full text-primary text-lg font-bold h-9 w-9">
          4
        </span>
      </div>
      <div className="flex justify-between items-center px-8 mb-1">
        <h3 className="text-primary text-xs font-normal">Dados da cobrança</h3>
        <h3 className="text-primary text-xs font-normal pr-5">Juros e Multa</h3>
        <h3 className="text-primary text-xs font-normal pr-5">
          Dados do cliente
        </h3>
        <h3 className="text-primary text-xs font-normal pr-5">Resumo</h3>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-black text-sm">O QUE COBRAR?</h3>

          <div className="w-full flex flex-col gap-1">
            <label className="font-semibold text-primary text-xs">
              Valor da cobrança
            </label>
            <div className="w-full flex items-center h-[36px]">
              <span className="bg-secondary rounded-l-lg text-white text-base font-bold flex justify-center items-center h-[36px] w-[36px] absolute">
                R$
              </span>
              <input
                className="bg-transparent border border-secondary rounded-lg text-primary text-[13px] font-semibold pl-10 h-[36px] w-[194px] z-10"
                type="text"
                placeholder="0,00"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-primary text-[13px]">
              Descrição da cobrança
              <span className="font-normal text-sm">{' (Opcional)'}</span>
            </label>
            <textarea
              className="font-normal text-primary text-sm border rounded-lg w-[386px] h-[103px] p-[10px] resize-none"
              placeholder="A descrição informada será impressa na fatura"
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex flex-col gap-5 shadow-card rounded-lg w-[293px] h-fit p-[15px]">
            <h1 className="text-primary text-base font-semibold">
              Opções adicionais
            </h1>

            <div>
              <div className="flex justify-between items-center mb-[5px]">
                <h3 className="text-secondary text-[13px] font-semibold">
                  Inserir documentos e arquivos
                </h3>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <h5 className="text-primary text-[10px] font-normal">
                Deseja adicionar documentos para o seu cliente visualizar e
                baixar quando receber esta cobrança
              </h5>
            </div>

            <div>
              <div className="flex justify-between items-center mb-[5px]">
                <h3 className="text-secondary text-[13px] font-semibold">
                  Emitir nota fiscal de serviço
                </h3>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <h5 className="text-primary text-[10px] font-normal">
                Você deseja emitir uma nota fiscal de serviço vinculado a esta
                cobrança?
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-black text-sm font-bold">
          QUAL SERÁ A FORMA DE PAGAMENTO?
        </h3>
        <div className="flex items-center -mb-[5px] rounded-lg border border-primary w-[386px] h-10 text-center">
          <a className="bg-secondary rounded-lg text-white text-base font-bold py-2 flex-1 cursor-pointer">
            À vista ou parcelado
          </a>
          <a className="rounded-l-lg text-secondary text-base font-bold py-2 flex-1 cursor-pointer">
            Assinatura
          </a>
        </div>
        <h4 className="text-primary text-[13px] font-normal">
          O valor será cobrado apenas uma vez, podendo ser parcelado conforme
          definido abaixo.
        </h4>

        <div className="flex gap-[14px]">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-primary text-xs">
              Parcelamento
            </label>
            <select className="bg-transparent border border-primary rounded-lg text-primary text-xs font-medium pl-[10px] h-[36px] w-[186px]">
              <option value="0">
                À vista <span>{' (R$ 150,00)'}</span>
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-primary text-xs">
              Vencimento da cobrança
            </label>
            <input
              className="bg-transparent border border-primary rounded-lg text-primary text-xs font-medium pl-[10px] h-[36px] w-[186px]"
              type="text"
              placeholder="__/__/__"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-black text-sm font-bold">
          COMO SEU CLIENTE PODERÁ PAGAR?
        </h3>
        <div className="flex flex-col gap-[15px]">
          <div className="accordion flex flex-col border border-primary rounded-lg px-2 pt-[22px] pb-3 min-h-[61px] h-fit w-[545px]">
            <div className="flex justify-between items-center">
              <div className="flex justify-between flex-1 pr-2">
                <div className="flex item-center gap-[10px]">
                  <span className="bg-secondary border border-primary rounded-full self-center h-3 w-3"></span>{' '}
                  <h4 className="text-black text-sm font-semibold">
                    Boleto Bancário
                  </h4>
                </div>
                <h4 className="text-primary text-sm font-normal">
                  Valor líquido por parcela: R$148,01
                </h4>
              </div>
              <label
                className="text-primary text-xl cursor-pointer"
                htmlFor="handle1"
              >
                <RxCaretDown />
              </label>
            </div>
            <input type="checkbox" name="collapse" id="handle1" />
            <div className="content text-primary text-xs font-normal">
              <p>
                Taxa de R$ 1,99 por cobrança recebida. Receba em 1 dia útil após
                o pagamento.
              </p>
              <p>
                Taxa de R$ 1,99 por pix recebido. Rebeca em poucos segundos após
                o pagamento.
              </p>
            </div>
          </div>

          <div className="flex flex-col border border-primary rounded-lg px-2 pt-[22px] pb-3 min-h-[61px] h-fit w-[545px]">
            <div className="flex justify-between items-center">
              <div className="flex justify-between flex-1 pr-2">
                <div className="flex item-center gap-[10px]">
                  <span className="bg-secondary border border-primary rounded-full self-center h-3 w-3"></span>{' '}
                  <h4 className="text-black text-sm font-semibold">Pix</h4>
                </div>
                <h4 className="text-primary text-sm font-normal">
                  Valor líquido por parcela: R$148,01
                </h4>
              </div>
              <label
                className="text-primary text-xl cursor-pointer"
                htmlFor="handle1"
              >
                <RxCaretDown />
              </label>
            </div>
          </div>

          <div className="flex flex-col border border-primary rounded-lg px-2 pt-[22px] pb-3 min-h-[61px] h-fit w-[545px]">
            <div className="flex justify-between items-center">
              <div className="flex justify-between flex-1 pr-2">
                <div className="flex item-center gap-[10px]">
                  <span className="bg-secondary border border-primary rounded-full self-center h-3 w-3"></span>{' '}
                  <h4 className="text-black text-sm font-semibold">
                    Cartão de Crédito
                  </h4>
                </div>
                <h4 className="text-primary text-sm font-normal">
                  Valor líquido por parcela: R$145,03
                </h4>
              </div>
              <label
                className="text-primary text-xl cursor-pointer"
                htmlFor="handle1"
              >
                <RxCaretDown />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end mt-[70px]">
        <a className="bg-secondary text-white text-[14px] font-bold rounded-3xl px-7 py-2 h-[34px] w-[124px] cursor-pointer">
          AVANÇAR
        </a>
      </div>
    </div>
  )
}

export default FirstStep
