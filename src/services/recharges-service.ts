import { Recharges } from "../protocols/types";
import { GetRechargeByNumberRepository, PostRechargeRepository } from "../repositories/recharges-repository";

export async function PostRechargeService(RechargesReq: Recharges) {
    const PostRecharge = await PostRechargeRepository(RechargesReq);
    return PostRecharge;
}

export async function GetRechargeByNumberService(RechargeReq: string) {
    const GetRecharge = await GetRechargeByNumberRepository(RechargeReq);
    return GetRecharge;
}