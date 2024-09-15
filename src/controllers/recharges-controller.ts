import { Recharges } from "protocols/types";
import { GetRechargeByNumberService, PostRechargeService } from "../services/recharges-service";
import {Request, Response} from 'express';

export async function PostRechargeController(req: Request, res: Response) {
    const RechargeReq = req.body as Recharges;

    const PostRecharge = await PostRechargeService(RechargeReq);
    
    res.status(201).send(PostRecharge);
}

export async function GetRechargeByNumberController(req: Request, res: Response) {
    const { number } = req.params;

    const ListRecharges = await GetRechargeByNumberService(number);
    
    res.status(200).send(ListRecharges);
}