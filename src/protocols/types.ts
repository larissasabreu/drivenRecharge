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
  telefone_id: number,
  credit_value: number
};

export type SummaryQuery = {
  id: number,
  phone: string,
  customer_name: string,
  name: string,
  descricao: string,
  cpf: string,
  carriers_code: number,
  code: number,
  phone_number: string,
  phone_id: number,
  credit: number,
  recharge_date: Date
}

// export type Summary = {
//   document: string, 
//   phones: [
//     telefone: string,
//     operadora: number, 
//     nome: string,
//     description: string,
//     cpf: string, 
//     carrier: {
//       name: string,
//       code: number,
//     },
//     recharges: {
//       phone_id: number, 
//       credit: number,
//       recharge_date: Date
//     }
//   ]
// };