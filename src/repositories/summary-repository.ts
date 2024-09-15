import { db } from "../config/database";
import { SummaryTp } from "protocols/types";

export async function GetSummaryRepository(SummaryReq: string) {
    const resultado = await db.query(`
        SELECT phones.*, carriers.*, recharges.* 
	    FROM recharges 
	    JOIN phones ON phones.id = phone_id
	    JOIN carriers ON carriers.code = phones.carriers_code
        WHERE phones.cpf = $1
	    ORDER BY phone_id`, [SummaryReq]);

    // let SummaryFormatados

    // for (let i = 0; i < resultado.rows.length; i++) {
    //     const summary = resultado.rows[i];

    //     if (SummaryFormatados && SummaryFormatados.id == summary.id) {
    //         SummaryFormatados.phones.push(
    //                     summary.cpf,
    //                     summary.name)
    //     } else {
    //         SummaryFormatados = {...summary, phones: [{phone: summary.phone, carriers_code: summary.carriers_code, 
    //             name: summary.name, description: summary.description
    //         }], Recharges: [{phone_number: summary.phone_number, credit: summary.credit, recharge_date: summary.recharge_date}], 
    //         Carriers: [{carrier_name: summary.name, carriers_code: summary.carriers_code}]}
            
    //     }
    // }

    
    return resultado.rows
}
