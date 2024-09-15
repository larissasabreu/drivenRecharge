export type Phone = {
    telefone1: string,
    telefone2?: string,
    telefone3?: string,
    operadora: string,
    nome:string,
    descrição: string,
    cpf: string
  };

export type Document = Omit<Phone, "telefone1" | "telefone2" | "telefone3" | "operadora">;

export type CPFTp = Omit<Document, "nome" | "descrição">