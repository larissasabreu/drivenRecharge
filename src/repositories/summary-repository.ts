import { db } from "../config/database";
import { SummaryQuery } from "../protocols/types";

export async function GetSummaryRepository(SummaryReq: string) {
    const resultado = await db.query<SummaryQuery>(`
        SELECT phones.*, carriers.*, recharges.* 
	    FROM recharges 
	    JOIN phones ON phones.id = phone_id
	    JOIN carriers ON carriers.code = phones.carriers_code
        WHERE phones.cpf = $1
	    ORDER BY phone_id`, [SummaryReq]);
        
        // formatação
        const rows = resultado.rows
        const formatados = {
            document: SummaryReq,
            phones: []
        };

        rows.forEach(row => {
            let phoneIndex = formatados.phones.findIndex(phone => phone.phone == row.phone);
            if (phoneIndex == -1) {
                formatados.phones.push({
                    telefone: row.phone,
                    operadora: row.carriers_code,
                    nome: row.customer_name,
                    description: row.descricao,
                    cpf: row.cpf,
                    carrier: {
                        name: row.name,
                        code: row.code
                    },
                    recharges: []
                });

                phoneIndex = formatados.phones.length - 1;

                if (row.phone_id) {
                    formatados.phones[phoneIndex].recharges.push({
                        phone_id: row.phone_id,
                        credit: row.credit,
                        recharge_date: row.recharge_date
                    })}
            }})
    
    return formatados

}

