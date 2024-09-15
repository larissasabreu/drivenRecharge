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