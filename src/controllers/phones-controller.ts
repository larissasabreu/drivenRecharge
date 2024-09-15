import { CPFTp, Phone } from "protocols/types";
import { GetPhonesByDocService, GetPhonesService, PostPhonesService } from "../services/phones-service";
import {Request, Response} from 'express';

// lista todos os telefones cadastrados
export async function GetPhonesController(req: Request, res: Response) {
    const ListPhones = await GetPhonesService();
    
    res.status(200).send(ListPhones);
}

// lista os telefones de acordo com o CPF de cada cliente
export async function GetPhonesByDocController(req: Request, res: Response) {
    const { document } = req.params;
    const ListPhones = await GetPhonesByDocService(document);
    
    res.status(200).send(ListPhones);
}

// cadastra 
export async function PostPhonesController(req: Request, res: Response) {
    const PhonesReq = req.body as Phone;
    const PostPhones = await PostPhonesService(PhonesReq);
    
    res.status(201).send(PostPhones);
}