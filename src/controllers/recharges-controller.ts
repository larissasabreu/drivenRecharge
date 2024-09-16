import { Recharges } from "protocols/types";
import { GetRechargeByNumberService, PostRechargeService } from "../services/recharges-service";
import {Request, Response} from 'express';

// efetua a recarga
export async function PostRechargeController(req: Request, res: Response) {
    const RechargeReq = req.body as Recharges;

    try {
    const PostRecharge = await PostRechargeService(RechargeReq);
    res.status(201).send(PostRecharge); 
    } catch (error) {
    res.status(404).send(error.detail);
    }
}

// mostra todas as recargas efetuadas para o número de telefone recebido como parametro
export async function GetRechargeByNumberController(req: Request, res: Response) {
    const { number } = req.params;

    const ListRecharges = await GetRechargeByNumberService(number);
    res.status(200).send(ListRecharges);
}