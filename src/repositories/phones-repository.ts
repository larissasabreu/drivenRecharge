import { db } from "../config/database";
import { CPFTp, Phone } from "../protocols/types";

export async function GetPhonesRepository() : Promise<Phone[]>{
	const ListPhones = await db.query<Phone>(`
	SELECT * FROM phones;
	`);
  
  return ListPhones.rows;
}

export async function GetPhonesByDocRepository(cpf: string) : Promise<Phone[]> {
	const ListPhones = await db.query<Phone>(`
	SELECT * FROM phones WHERE cpf = $1;
	`, [cpf]);
  
  return ListPhones.rows;
}

export async function PostPhonesRepository(PhonesReq: Phone) {
	const {telefone1, telefone2, telefone3, operadora, nome, descrição, cpf} = PhonesReq;
	console.log(PhonesReq)

    const InsertPhones = await db.query(`
        INSERT INTO phones ("phone_1", "phone_2", "phone_3","carriers_code","name","description", "cpf") 
        VALUES ($1, $2, $3, $4, $5, $6, $7)`, [telefone1, telefone2, telefone3, operadora, nome, descrição, cpf]);
    return InsertPhones
}