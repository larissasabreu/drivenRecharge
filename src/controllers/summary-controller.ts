import { GetSummaryService } from '../services/summary-service';
import {Request, Response} from 'express';

// mostra um summário com todas as informações do usuário utilizando o cpf como parametro
export async function GetSummaryController(req: Request, res: Response) {
    const { document } = req.params;

    const ListSummary = await GetSummaryService(document);
    
    res.status(200).send(ListSummary);
}