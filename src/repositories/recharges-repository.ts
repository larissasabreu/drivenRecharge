import { db } from "../config/database";
import { Recharges } from "../protocols/types";

export async function PostRechargeRepository(RechargeReq: Recharges) {
    const {telefone, telefone_id, credit_value} = RechargeReq;

    const InsertPhones = await db.query(`
        INSERT INTO recharges ("phone_number", "phone_id", "credit") 
        VALUES ($1, $2, $3)`, [telefone, telefone_id, credit_value]);
    return InsertPhones
}

export async function GetRechargeByNumberRepository(RechargeReq: string) : Promise<Recharges[]> {
	const ListPhones = await db.query<Recharges>(`
        SELECT * FROM recharges WHERE phone_number = $1;
        `, [RechargeReq]);
      
      return ListPhones.rows;
}