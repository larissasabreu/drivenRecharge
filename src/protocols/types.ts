export type Errors = {
  type: string,
  message: string
}

export type Phone = {
    telefone: string,
    operadora: string,
    nome:string,
    descrição: string,
    cpf: string
  };

export type Recharges = {
  telefone: string,
  telefone_id: number,
  credit_value: number
};

export type SummaryTp = {
  id: number,
  phone: string,
  carriers_name: string,
  name: string,
  description: string,
  cpf: string,
  carriers_code: number,
  phone_number: string,
  phone_id: number,
  credit: number,
  recharge_date: Date
}